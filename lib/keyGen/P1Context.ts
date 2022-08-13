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
import {KeyShare1} from "./keyShare1";
const Secp256k1 = new elliptic.ec('secp256k1')

type TCurve = any
type TCurvePoint = any

export class P1Context {
    private expectedStep: number
    public readonly pailPrivKey: PailPrivKey
    public readonly pailPubKey: PailPubKey
    public x1: BN
    public Q1: TCurvePoint
    public Q: TCurvePoint
    public blind: BN
    public commitment_Q1: BN
    public cypher_x1: BN
    public proof_Q1: Secp256k1SchnorrProof
    public proof_pailN: PailProof

    public message1: Message1
    public message2: Message2
    public message3: Message3

    public constructor(pailPrivKey: PailPrivKey, pailPubKey: PailPubKey,
                       x1: BN,
                       Q1: TCurvePoint,
                       blind: BN,
                       commitment_Q1: BN,
                       cypher_x1: BN,
                       proof_Q1: Secp256k1SchnorrProof,
                       proof_pailN: PailProof) {
        this.pailPrivKey = pailPrivKey
        this.pailPubKey = pailPubKey
        this.x1 = x1
        this.Q1 = Q1
        this.blind = blind
        this.commitment_Q1 = commitment_Q1
        this.cypher_x1 = cypher_x1
        this.proof_Q1 = proof_Q1
        this.proof_pailN = proof_pailN
        this.expectedStep = 1
    }

    public static async createContext(): Promise<P1Context> {
        const [pailPrivKey, pailPubKey] = await createPailKeyPair(2048/8)

        // Sample x1 \in [q/3, 2q/3]
        const TWO = new BN(2)
        const THREE = new BN(3)
        let min = Secp256k1.n.div(THREE);
        let max = Secp256k1.n.mul(TWO).div(THREE);
        let x1 = await Rand.randomBN(32)
        while (x1.lt(min) || x1.gt(max)){
            x1 = await Rand.randomBN(32)
        }

        // Q1 = x1 * G
        let Q1 = Secp256k1.g.mul(x1)

        // Commitment of Q1
        let blind = await Rand.randomBN(32)
        let commitment_Q1 = HashCommitment.createComWithBlindFromCurvePoint(Q1, blind)

        // Enc(x1)
        let cypher_x1 = await pailPubKey.encrypt(x1)

        // Schnorr proof of Q1
        let proof_Q1 = await Secp256k1SchnorrProof.prove(x1)

        // Proof PailN
        let proof_pailN = PailProof.prove(pailPrivKey, new BN(1), Q1.getX(), Q1.getY())

        return new P1Context(pailPrivKey, pailPubKey, x1, Q1, blind, commitment_Q1, cypher_x1, proof_Q1, proof_pailN)
    }

    public step1(): Uint8Array{
        if(this.expectedStep != 1) throw "The expected step must be 1 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message1 = new Message1(this.commitment_Q1)
        return this.message1.toProtobuf()
    }

    public step2(message2Bytes: Uint8Array): Uint8Array{
        if(this.expectedStep != 2) throw "The expected step must be 2 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message2 = Message2.fromProtobuf(message2Bytes)
        if(!this.message2.proof_Q2.verify()) {
            throw "Failed on schnorr proof on Q2 !"
        }
        // Calculate the public key
        const Q2 = this.message2.proof_Q2.pk
        this.Q = Q2.mul(this.x1)

        this.message3 = new Message3(this.proof_pailN, this.pailPrivKey.n, this.cypher_x1, this.proof_Q1, this.blind)
        return this.message3.toProtobuf()
    }

    public exportKeyShare(): KeyShare1{
        if(this.expectedStep <= 2) throw "The key share isn't prepared before step " + this.expectedStep

        return new KeyShare1(this.x1, this.Q, this.pailPubKey, this.pailPrivKey)
    }
}