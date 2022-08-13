'use strict'
import * as assert from "assert";
import * as BN from "bn.js"
import {PailPubKey, PailPrivKey} from "@safeheron/crypto-paillier";
import {PailProof, Secp256k1SchnorrProof, Ed25519SchnorrProof} from "@safeheron/crypto-zkp";
import * as elliptic from "elliptic"
const Secp256k1 = new elliptic.ec('secp256k1')
const P256 = new elliptic.ec('p256')
const Ed25519 = new elliptic.eddsa('ed25519')

type TCurvePoint = any

export namespace BasicJsonObject {
    /*****************     JsonObject_CurvePoint <==> TCurvePoint    ******************/
    export interface JsonObject_CurvePoint {
        curve?: string,
        x?: string,
        y?: string,
    }

    export function fromCurvePoint(point: TCurvePoint, curveName: string): JsonObject_CurvePoint {
        assert(curveName.toLowerCase() === 'secp256k1' ||
            curveName.toLowerCase() === 'p256' ||
            curveName.toLowerCase() === 'ed25519')
        return {
            curve: curveName,
            x: point.getX().toString(16),
            y: point.getY().toString(16)
        }
    }

    export function toCurvePoint(obj: JsonObject_CurvePoint): TCurvePoint {
        if (obj.curve.toLowerCase() === 'secp256k1') {
            return Secp256k1.curve.pointFromJSON([new BN(obj.x, 16), new BN(obj.y, 16)])
        } else if (obj.curve.toLowerCase() === 'p256') {
            return P256.curve.pointFromJSON([new BN(obj.x, 16), new BN(obj.y, 16)])
        } else if (obj.curve.toLowerCase() === 'ed25519') {
            return Ed25519.curve.pointFromJSON([new BN(obj.x, 16), new BN(obj.y, 16)])
        } else {
            assert(false, 'only support elliptic curve "secp256k1" and "p256".')
        }
    }

    /*****************     JsonObject_Secp256k1SchnorrProof <==> Secp256k1SchnorrProof    ******************/
    export interface JsonObject_Secp256k1SchnorrProof{
        pk?: JsonObject_CurvePoint,
        g_r?: JsonObject_CurvePoint,
        res?: string,
    }

    export function fromSecp256k1SchnorrProof(schnorrProof: Secp256k1SchnorrProof): JsonObject_Secp256k1SchnorrProof {
        const curve = 'secp256k1'
        return {
            pk: fromCurvePoint(schnorrProof.pk, curve),
            g_r: fromCurvePoint(schnorrProof.g_r, curve),
            res: schnorrProof.res.toString(16)
        }
    }

    export function toSecp256k1SchnorrProof(obj: JsonObject_Secp256k1SchnorrProof): Secp256k1SchnorrProof {
        return new Secp256k1SchnorrProof(toCurvePoint(obj.pk),
            toCurvePoint(obj.g_r),
            new BN(obj.res, 16))
    }

    /*****************     JsonObject_KGD_Point <==> KGD_Point: [TCurvePoint, BN]    ******************/
    export interface JsonObject_KGD_Point {
        point?: JsonObject_CurvePoint,
        blindFactor?: string,
    }
    export function fromKGD_Point(kgd_point: [TCurvePoint, BN]): JsonObject_KGD_Point {
        return {
            point: {
                curve: "secp256k1",
                x: kgd_point[0].getX().toString(16),
                y: kgd_point[0].getY().toString(16)
            },
            blindFactor: kgd_point[1].toString(16)
        }
    }

    export function toKGD_Point(obj: JsonObject_KGD_Point): [TCurvePoint, BN] {
        return [
            Secp256k1.curve.pointFromJSON([new BN(obj.point.x, 16), new BN(obj.point.y, 16)]),
            new BN(obj.blindFactor, 16)
        ]
    }

    /*****************     JsonObject_PailPriv <==> PailPriv    ******************/
    export interface JsonObject_PailPriv {
        lambda?: string,
        mu?: string,
        n?: string,
        p?: string,
        q?: string,
        pSqr?: string,
        qSqr?: string,
        pMinus1?: string,
        qMinus1?: string,
        hp?: string,
        hq?: string,
        qInvP?: string,
        pInvQ?: string,
    }
    export function fromPailPriv(pailPriv: PailPrivKey): JsonObject_PailPriv {
        return {
            lambda: pailPriv.lambda.toString(16),
            mu: pailPriv.mu.toString(16),
            n: pailPriv.n.toString(16),
            p: pailPriv.p.toString(16),
            q: pailPriv.q.toString(16),
            pSqr: pailPriv.pSqr.toString(16),
            qSqr: pailPriv.qSqr.toString(16),
            pMinus1: pailPriv.pMinus1.toString(16),
            qMinus1: pailPriv.qMinus1.toString(16),
            hp: pailPriv.hp.toString(16),
            hq: pailPriv.hq.toString(16),
            qInvP: pailPriv.qInvP.toString(16),
            pInvQ: pailPriv.pInvQ.toString(16),
        }
    }

    export function toPailPriv(obj: JsonObject_PailPriv): PailPrivKey {
        return new PailPrivKey(
            new BN(obj.lambda, 16), new BN(obj.mu, 16), new BN(obj.n, 16),
            new BN(obj.p, 16), new BN(obj.q, 16),
            new BN(obj.pSqr, 16), new BN(obj.qSqr, 16),
            new BN(obj.pMinus1, 16), new BN(obj.qMinus1, 16),
            new BN(obj.hp, 16), new BN(obj.hq, 16),
            new BN(obj.qInvP, 16), new BN(obj.pInvQ, 16),
        )
    }

    /*****************     JsonObject_PailPub <==> PailPub    ******************/
    export interface JsonObject_PailPub {
        n?: string,
        g?: string,
    }
    export function fromPailPub(pailPub: PailPubKey): JsonObject_PailPub {
        return {
            n: pailPub.n.toString(16),
            g: pailPub.g.toString(16)
        }
    }

    export function toPailPub(obj: JsonObject_PailPub): PailPubKey {
        return new PailPubKey(new BN(obj.n, 16), new BN(obj.g, 16))
    }

    /*****************     JsonObject_PailProof <==> PailProof    ******************/
    export interface JsonObject_PailProof {
        yNArr?: string[],
    }
    export function fromPailProof(proof_PailN: PailProof): JsonObject_PailProof {
        const arr = []
        for(let yN of proof_PailN.yNArr){
           arr.push(yN.toString(16))
        }
        return {
            yNArr: arr
        }
    }

    export function toPailProof (obj: JsonObject_PailProof): PailProof {
        const yNArr = []
        for(let yN of obj.yNArr){
            yNArr.push(new BN(yN, 16))
        }
        return new PailProof(yNArr)
    }
}
