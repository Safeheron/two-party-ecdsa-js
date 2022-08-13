'use strict'
import * as BN from "bn.js"
import {Rand} from '@safeheron/crypto-rand'
import {PailPrivKey, PailPubKey, createPailKeyPair} from '@safeheron/crypto-paillier'
import {HashCommitment} from "@safeheron/crypto-commitment/dist";
import * as elliptic from "elliptic"
import {PailProof, Secp256k1SchnorrProof} from "@safeheron/crypto-zkp";
import {Message1} from "./message1";
import {Message2} from "./message2";
import {Message3} from "./message3";
import {Message4} from "./message4";
import {KeyShare1} from "../keyGen";
import {verifySig} from "./auxiliary";
import * as assert from "assert";

const Secp256k1 = new elliptic.ec('secp256k1')

type TCurve = any
type TCurvePoint = any

export class P1Context {
    private expectedStep: number
    public keyShare1: KeyShare1
    public k1: BN
    public k1Inv: BN
    public m: TCurvePoint
    public R: TCurvePoint
    public R1: TCurvePoint
    public blind: BN
    public commitment_R1: BN
    public proof_R1: Secp256k1SchnorrProof
    // Signature
    public r: BN
    public s: BN
    public v: number

    public message1: Message1
    public message2: Message2
    public message3: Message3
    public message4: Message4

    public constructor(keyShare1: KeyShare1,
                       k1: BN,
                       R1: TCurvePoint,
                       blind: BN,
                       commitment_R1: BN,
                       proof_R1: Secp256k1SchnorrProof,
                       m: BN) {
        this.keyShare1 = keyShare1
        this.k1 = k1
        this.k1Inv = k1.invm(Secp256k1.n)
        this.R1 = R1
        this.blind = blind
        this.commitment_R1 = commitment_R1
        this.proof_R1 = proof_R1
        this.m = m
        this.expectedStep = 1
    }

    public static async createContext(keyShare1Json:string, m: BN): Promise<P1Context> {
        const keyShare1 = KeyShare1.fromJsonObject(JSON.parse(keyShare1Json))
        // Sample k1 \in [0, q]
        let k1 = await Rand.randomBN(32)
        // R1 = k1 * G
        let R1 = Secp256k1.g.mul(k1)
        // Commitment of R1
        let blind = await Rand.randomBN(32)
        let commitment_R1 = HashCommitment.createComWithBlindFromCurvePoint(R1, blind)
        // Schnorr proof of R1
        let proof_R1 = await Secp256k1SchnorrProof.prove(k1)

        return new P1Context(keyShare1, k1, R1, blind, commitment_R1, proof_R1, m)
    }

    public step1(): Uint8Array{
        if(this.expectedStep != 1) throw "The expected step must be 1 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message1 = new Message1(this.commitment_R1)
        return this.message1.toProtobuf()
    }

    public step2(message2Bytes: Uint8Array): Uint8Array{
        if(this.expectedStep != 2) throw "The expected step must be 2 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message2 = Message2.fromProtobuf(message2Bytes)
        if(!this.message2.proof_R2.verify()) {
            throw "Failed on schnorr proof on Q2 !"
        }
        // Calculate R = (k1 * k2) * G = k1 * R2
        const R2 = this.message2.proof_R2.pk
        this.R = R2.mul(this.k1)

        this.message3 = new Message3(this.proof_R1, this.blind)
        return this.message3.toProtobuf()
    }

    public step3(message4Bytes: Uint8Array){
        if(this.expectedStep != 3) throw "The expected step must be 3 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message4 = Message4.fromProtobuf(message4Bytes)
        // Calculate the public key
        //this.R = this.R1.add(this.message2.proof_R2.pk)
        let R2 = this.message2.proof_R2.pk
        this.R = R2.mul(this.k1)

        // s' = decrypt(c3)
        const sPrime: BN = this.keyShare1.pailPrivKey.decrypt(this.message4.cypher3)
        // s = s' * k1^-1   mod n
        this.s = sPrime.mul(this.k1Inv).mod(Secp256k1.n)
        this.r = this.R.getX().mod(Secp256k1.n)

        // get v
        let recoveryParam = (this.R.getY().isOdd() ? 1 : 0) |
            (this.R.getX().cmp(this.r) !== 0 ? 2 : 0)
        this.s = this.s.mod(Secp256k1.n)
        const halfOfN = Secp256k1.n.divn(2)
        if(this.s.gt(halfOfN)){
            this.s = Secp256k1.n.sub(this.s)
            recoveryParam ^= 1;
        }
        this.v = recoveryParam
        assert(verifySig(this.m, this.r, this.s, this.v, this.keyShare1.Q))
    }

    public exportSig(): [BN, BN, number]{
        if(this.expectedStep <= 3) throw "The signature isn't prepared before step " + this.expectedStep

        return [this.r, this.s, this.v]
    }
}