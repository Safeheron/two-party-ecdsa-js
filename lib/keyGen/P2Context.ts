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
import {KeyShare2} from "./keyShare2";
const Secp256k1 = new elliptic.ec('secp256k1')

type TCurve = any
type TCurvePoint = any

export class P2Context {
    private expectedStep: number
    public pailPubKey: PailPubKey
    public x2: BN
    public Q2: TCurvePoint
    public Q: TCurvePoint
    public cypher_x1: BN
    public proof_Q2: Secp256k1SchnorrProof

    public message1: Message1
    public message2: Message2
    public message3: Message3

    public constructor(x2: BN, Q2: TCurvePoint, proof_Q2: Secp256k1SchnorrProof) {
        this.x2 = x2
        this.Q2 = Q2
        this.proof_Q2 = proof_Q2
        this.expectedStep = 1
    }

    public static async createContext(): Promise<P2Context> {
        // Sample x2 \in (0, 2^255]
        let x2 = await Rand.randomBNLt(Secp256k1.n)
        while (x2.eqn(0)){
            x2 = await Rand.randomBN(32)
        }
        // Q2 = x2 * G
        let Q2 = Secp256k1.g.mul(x2)
        // Schnorr proof of Q2
        let proof_Q2 = await Secp256k1SchnorrProof.prove(x2)

        return new P2Context(x2, Q2, proof_Q2)
    }

    public step1(message1Bytes: Uint8Array): Uint8Array{
        if(this.expectedStep != 1) throw "The expected step must be 1 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message1 = Message1.fromProtobuf(message1Bytes)
        this.message2 = new Message2(this.proof_Q2)

        return this.message2.toProtobuf()
    }

    public step2(message3Bytes: Uint8Array) {
        if(this.expectedStep != 2) throw "The expected step must be 2 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message3 = Message3.fromProtobuf(message3Bytes)

        // Verify the Schnorr proof
        let Q1 = this.message3.proof_Q1.pk
        let commitment_Q1 = HashCommitment.createComWithBlindFromCurvePoint(Q1, this.message3.blind)
        if(!commitment_Q1.eq(this.message1.commitment_Q1)) {
            throw "Failed on commitment of Q1 !"
        }
        if(!this.message3.proof_Q1.verify()) {
            throw "Failed on schnorr proof on Q1 !"
        }

        // Verify the pail proof
        // g = n + 1
        let g = this.message3.N.add(new BN(1))
        let pailPubKey = new PailPubKey(this.message3.N, g)
        if(!this.message3.proof_PailN.verify(pailPubKey, new BN(1), Q1.getX(), Q1.getY())) {
            throw "Failed on proof on pailN !"
        }

        // Calculate the public key
        this.Q = Q1.mul(this.x2)
        this.pailPubKey = pailPubKey
        this.cypher_x1 = this.message3.cypher_x1
    }

    public exportKeyShare(): KeyShare2{
        if(this.expectedStep <= 2) throw "The key share isn't prepared before step " + this.expectedStep

        return new KeyShare2(this.x2, this.Q, this.pailPubKey, this.cypher_x1)
    }
}
