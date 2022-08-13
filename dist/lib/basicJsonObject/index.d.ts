import * as BN from "bn.js";
import { PailPubKey, PailPrivKey } from "@safeheron/crypto-paillier";
import { PailProof, Secp256k1SchnorrProof } from "@safeheron/crypto-zkp";
declare type TCurvePoint = any;
export declare namespace BasicJsonObject {
    /*****************     JsonObject_CurvePoint <==> TCurvePoint    ******************/
    interface JsonObject_CurvePoint {
        curve?: string;
        x?: string;
        y?: string;
    }
    function fromCurvePoint(point: TCurvePoint, curveName: string): JsonObject_CurvePoint;
    function toCurvePoint(obj: JsonObject_CurvePoint): TCurvePoint;
    /*****************     JsonObject_Secp256k1SchnorrProof <==> Secp256k1SchnorrProof    ******************/
    interface JsonObject_Secp256k1SchnorrProof {
        pk?: JsonObject_CurvePoint;
        g_r?: JsonObject_CurvePoint;
        res?: string;
    }
    function fromSecp256k1SchnorrProof(schnorrProof: Secp256k1SchnorrProof): JsonObject_Secp256k1SchnorrProof;
    function toSecp256k1SchnorrProof(obj: JsonObject_Secp256k1SchnorrProof): Secp256k1SchnorrProof;
    /*****************     JsonObject_KGD_Point <==> KGD_Point: [TCurvePoint, BN]    ******************/
    interface JsonObject_KGD_Point {
        point?: JsonObject_CurvePoint;
        blindFactor?: string;
    }
    function fromKGD_Point(kgd_point: [TCurvePoint, BN]): JsonObject_KGD_Point;
    function toKGD_Point(obj: JsonObject_KGD_Point): [TCurvePoint, BN];
    /*****************     JsonObject_PailPriv <==> PailPriv    ******************/
    interface JsonObject_PailPriv {
        lambda?: string;
        mu?: string;
        n?: string;
        p?: string;
        q?: string;
        pSqr?: string;
        qSqr?: string;
        pMinus1?: string;
        qMinus1?: string;
        hp?: string;
        hq?: string;
        qInvP?: string;
        pInvQ?: string;
    }
    function fromPailPriv(pailPriv: PailPrivKey): JsonObject_PailPriv;
    function toPailPriv(obj: JsonObject_PailPriv): PailPrivKey;
    /*****************     JsonObject_PailPub <==> PailPub    ******************/
    interface JsonObject_PailPub {
        n?: string;
        g?: string;
    }
    function fromPailPub(pailPub: PailPubKey): JsonObject_PailPub;
    function toPailPub(obj: JsonObject_PailPub): PailPubKey;
    /*****************     JsonObject_PailProof <==> PailProof    ******************/
    interface JsonObject_PailProof {
        yNArr?: string[];
    }
    function fromPailProof(proof_PailN: PailProof): JsonObject_PailProof;
    function toPailProof(obj: JsonObject_PailProof): PailProof;
}
export {};
