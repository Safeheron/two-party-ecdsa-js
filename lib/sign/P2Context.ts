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
import {KeyShare1, KeyShare2} from "../keyGen";
const Secp256k1 = new elliptic.ec('secp256k1')

type TCurve = any
type TCurvePoint = any

const QSqr = Secp256k1.n.mul(Secp256k1.n)

export class P2Context {
    private expectedStep: number
    public keyShare2: KeyShare2
    public m: BN
    public pailPubKey: PailPubKey
    public k2: BN
    public k2Inv: BN
    public R2: TCurvePoint
    public R: TCurvePoint
    public cypher_x1: BN
    public proof_R2: Secp256k1SchnorrProof
    public rho: BN
    public r_tilde: BN

    public message1: Message1
    public message2: Message2
    public message3: Message3
    public message4: Message4

    public constructor(keyShare2: KeyShare2, m: BN, k2: BN, R2: TCurvePoint, proof_R2: Secp256k1SchnorrProof, rho: BN, r_tilde: BN) {
        this.keyShare2 = keyShare2
        this.m = m
        this.k2 = k2
        this.k2Inv = k2.invm(Secp256k1.n)
        this.R2 = R2
        this.proof_R2 = proof_R2
        this.rho = rho
        this.r_tilde = r_tilde
        this.expectedStep = 1
    }

    public static async createContext(keyShare2Json: string, m: BN): Promise<P2Context> {
        const keyShare2 = KeyShare2.fromJsonObject(JSON.parse(keyShare2Json))
        // Sample k2 \in (0, 2^255]
        let k2 = await Rand.randomBNLt(Secp256k1.n)
        while (k2.eqn(0)){
            k2 = await Rand.randomBN(32)
        }
        // R2 = k2 * G
        let R2 = Secp256k1.g.mul(k2)
        // Schnorr proof of R2
        let proof_R2 = await Secp256k1SchnorrProof.prove(k2)

        // Sample rho \in Z_{q^2}
        // Sample r_tilde \in Z_N*, which means gcd(r_tidle, N) = 1
        let rho = await Rand.randomBNLt(QSqr)
        let r_tilde = await Rand.randomBNLtCoPrime(Secp256k1.n)

        return new P2Context(keyShare2, m, k2, R2, proof_R2, rho, r_tilde)
    }

    public step1(message1Bytes: Uint8Array): Uint8Array{
        if(this.expectedStep != 1) throw "The expected step must be 1 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message1 = Message1.fromProtobuf(message1Bytes)
        this.message2 = new Message2(this.proof_R2)
        return this.message2.toProtobuf()
    }

    public step2(message3Bytes: Uint8Array): Uint8Array {
        if(this.expectedStep != 2) throw "The expected step must be 2 but not " + this.expectedStep
        this.expectedStep = this.expectedStep + 1

        this.message3 = Message3.fromProtobuf(message3Bytes)

        // Verify the Schnorr proof
        let R1 = this.message3.proof_R1.pk
        let commitment_R1 = HashCommitment.createComWithBlindFromCurvePoint(R1, this.message3.blind)
        if(!commitment_R1.eq(this.message1.commitment_R1)) {
            throw "Failed on commitment of R1 !"
        }
        if(!this.message3.proof_R1.verify()) {
            throw "Failed on schnorr proof on R1 !"
        }

        // Calculate R = (k1 * k2) * G = k2 * R1
        this.R = R1.mul(this.k2)
        // r = R.x mod q
        const r: BN = this.R.getX().mod(Secp256k1.n)

        // Calculate k2^-1 * m mod q
        const k2InvMulM = this.k2Inv.mul(this.m).mod(Secp256k1.n)
        // Enc(k2^-1 * m mod q)
        const c0 = this.keyShare2.pailPubKey.encryptWithR(k2InvMulM, this.r_tilde)
        // rho * q
        const rhoMulQ = this.rho.mul(Secp256k1.n)
        // c1 = Enc(k2^-1 * m mod q + rho * q)
        const c1 = this.keyShare2.pailPubKey.homomorphicAddPlain(c0, rhoMulQ)
        // v = k2^-1 * r * x2 mod q
        const v = this.k2Inv.mul(r).mul(this.keyShare2.x2).mod(Secp256k1.n)
        // c2 = Enc((k2^-1 * r * x2 mod q) * x1)
        const c2 = this.keyShare2.pailPubKey.homomorphicMulPlain(this.keyShare2.cypher_x1, v)
        // c3 = Enc((k2^-1 * r * x2 mod q) * x1 + k2^-1 * m mod q + rho * q)
        const c3 = this.keyShare2.pailPubKey.homomorphicAdd(c1, c2)

        this.message4 = new Message4(c3)
        return this.message4.toProtobuf()
    }
}
