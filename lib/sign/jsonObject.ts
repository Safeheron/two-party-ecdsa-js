'use strict'

import * as assert from "assert";
import * as BN from "bn.js"
import {PailPubKey, PailPrivKey} from "@safeheron/crypto-paillier";
import {PailProof, Secp256k1SchnorrProof, Ed25519SchnorrProof} from "@safeheron/crypto-zkp";
import {BasicJsonObject} from "../basicJsonObject";
import * as elliptic from "elliptic"
const Secp256k1 = new elliptic.ec('secp256k1')
const P256 = new elliptic.ec('p256')
const Ed25519 = new elliptic.eddsa('ed25519')
import JsonObject_Secp256k1SchnorrProof = BasicJsonObject.JsonObject_Secp256k1SchnorrProof;
import JsonObject_PailProof = BasicJsonObject.JsonObject_PailProof;
import JsonObject_CurvePoint = BasicJsonObject.JsonObject_CurvePoint;
import JsonObject_PailPub = BasicJsonObject.JsonObject_PailPub;
import JsonObject_PailPriv = BasicJsonObject.JsonObject_PailPriv;
import {Message1} from "./message1";
import {Message2} from "./message2";
import {Message3} from "./message3";
import {Message4} from "./message4";

export namespace JsonObject {

    export interface JsonObject_Message1 {
        commitment_R1?: string,
    }

    export function fromMessage1(message: Message1): JsonObject_Message1 {
        return {
            commitment_R1: message.commitment_R1.toString(16),
        }
    }

    export function toMessage1(obj: JsonObject_Message1): Message1{
        return new Message1(new BN(obj.commitment_R1, 16))
    }


    export interface JsonObject_Message2 {
        proof_R2?: JsonObject_Secp256k1SchnorrProof,
    }

    export function fromMessage2(message: Message2): JsonObject_Message2 {
        return {
            proof_R2: BasicJsonObject.fromSecp256k1SchnorrProof(message.proof_R2),
        }
    }

    export function toMessage2(obj: JsonObject_Message2): Message2{
        return new Message2(BasicJsonObject.toSecp256k1SchnorrProof(obj.proof_R2))
    }

    export interface JsonObject_Message3 {
        proof_R1?: JsonObject_Secp256k1SchnorrProof,
        blind?: string,
    }

    export function fromMessage3(message: Message3): JsonObject_Message3 {
        return {
            proof_R1: BasicJsonObject.fromSecp256k1SchnorrProof(message.proof_R1),
            blind: message.blind.toString(16),
        }
    }

    export function toMessage3(obj: JsonObject_Message3): Message3 {
        return new Message3(BasicJsonObject.toSecp256k1SchnorrProof(obj.proof_R1), new BN(obj.blind, 16))
    }

    export interface JsonObject_Message4 {
        cypher3?: string,
    }

    export function fromMessage4(message: Message4): JsonObject_Message4 {
        return {
            cypher3: message.cypher3.toString(16),
        }
    }

    export function toMessage4(obj: JsonObject_Message4): Message4 {
        return new Message4(new BN(obj.cypher3, 16))
    }
}

