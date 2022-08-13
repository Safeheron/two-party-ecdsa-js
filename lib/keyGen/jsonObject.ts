'use strict'
import * as BN from "bn.js"
import {BasicJsonObject} from "../basicJsonObject";
import {Message1} from "./message1";
import {Message2} from "./message2";
import {Message3} from "./message3";
import {KeyShare1} from "./keyShare1";
import {KeyShare2} from "./keyShare2";

export namespace JsonObject {
    import JsonObject_Secp256k1SchnorrProof = BasicJsonObject.JsonObject_Secp256k1SchnorrProof;
    import JsonObject_PailProof = BasicJsonObject.JsonObject_PailProof;
    import JsonObject_CurvePoint = BasicJsonObject.JsonObject_CurvePoint;
    import JsonObject_PailPub = BasicJsonObject.JsonObject_PailPub;
    import JsonObject_PailPriv = BasicJsonObject.JsonObject_PailPriv;

    export interface JsonObject_Message1 {
        commitment_Q1?: string,
    }

    export function fromMessage1(message: Message1): JsonObject_Message1 {
        return {
            commitment_Q1: message.commitment_Q1.toString(16),
        }
    }

    export function toMessage1(obj: JsonObject_Message1): Message1{
        return new Message1(new BN(obj.commitment_Q1, 16))
    }


    export interface JsonObject_Message2 {
        proof_Q2?: JsonObject_Secp256k1SchnorrProof,
    }

    export function fromMessage2(message: Message2): JsonObject_Message2 {
        return {
            proof_Q2: BasicJsonObject.fromSecp256k1SchnorrProof(message.proof_Q2),
        }
    }

    export function toMessage2(obj: JsonObject_Message2): Message2{
        return new Message2(BasicJsonObject.toSecp256k1SchnorrProof(obj.proof_Q2))
    }

    export interface JsonObject_Message3 {
        proof_pailN?: JsonObject_PailProof,
        N?: string,
        cypher_x1?: string,
        proof_Q1?: JsonObject_Secp256k1SchnorrProof,
        blind?: string,
    }

    export function fromMessage3(message: Message3): JsonObject_Message3 {
        return {
            proof_pailN: BasicJsonObject.fromPailProof(message.proof_PailN),
            N: message.N.toString(16),
            cypher_x1: message.cypher_x1.toString(16),
            proof_Q1: BasicJsonObject.fromSecp256k1SchnorrProof(message.proof_Q1),
            blind: message.blind.toString(16),
        }
    }

    export function toMessage3(obj: JsonObject_Message3): Message3 {
        return new Message3(BasicJsonObject.toPailProof(obj.proof_pailN),
            new BN(obj.N, 16),
            new BN(obj.cypher_x1, 16),
            BasicJsonObject.toSecp256k1SchnorrProof(obj.proof_Q1),
            new BN(obj.blind, 16))
    }

    export interface JsonObject_KeyShare1 {
        x1?: string,
        Q?: JsonObject_CurvePoint,
        pailPubKey?: JsonObject_PailPub,
        pailPrivKey?: JsonObject_PailPriv,
    }

    export function fromKeyShare1(keyShare: KeyShare1): JsonObject_KeyShare1 {
        return {
            x1: keyShare.x1.toString(16),
            Q: BasicJsonObject.fromCurvePoint(keyShare.Q, "secp256k1"),
            pailPubKey: BasicJsonObject.fromPailPub(keyShare.pailPubKey),
            pailPrivKey: BasicJsonObject.fromPailPriv(keyShare.pailPrivKey),
        }
    }

    export function toKeyShare1(obj: JsonObject_KeyShare1): KeyShare1{
        return new KeyShare1(new BN(obj.x1, 16),
            BasicJsonObject.toCurvePoint(obj.Q),
            BasicJsonObject.toPailPub(obj.pailPubKey),
            BasicJsonObject.toPailPriv(obj.pailPrivKey))
    }

    export interface JsonObject_KeyShare2 {
        x2?: string,
        Q?: JsonObject_CurvePoint,
        pailPubKey?: JsonObject_PailPub,
        cypher_x1?: string,
    }

    export function fromKeyShare2(keyShare: KeyShare2): JsonObject_KeyShare2 {
        return {
            x2: keyShare.x2.toString(16),
            Q: BasicJsonObject.fromCurvePoint(keyShare.Q, "secp256k1"),
            pailPubKey: BasicJsonObject.fromPailPub(keyShare.pailPubKey),
            cypher_x1: keyShare.cypher_x1.toString(16),
        }
    }

    export function toKeyShare2(obj: JsonObject_KeyShare2): KeyShare2{
        return new KeyShare2(new BN(obj.x2, 16),
            BasicJsonObject.toCurvePoint(obj.Q),
            BasicJsonObject.toPailPub(obj.pailPubKey),
            new BN(obj.cypher_x1, 16))
    }
}

