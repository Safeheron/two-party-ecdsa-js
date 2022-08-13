import * as BN from "bn.js";
import { Secp256k1SchnorrProof, PailProof } from "@safeheron/crypto-zkp";
import { JsonObject } from "./jsonObject";
export declare class Message3 {
    readonly proof_PailN: PailProof;
    readonly N: BN;
    readonly cypher_x1: BN;
    readonly proof_Q1: Secp256k1SchnorrProof;
    readonly blind: BN;
    constructor(proof_PailN: PailProof, N: BN, cypher_x1: BN, proof_Q1: Secp256k1SchnorrProof, blind: BN);
    toProtobuf(): Uint8Array;
    static fromProtobuf(bytes: any): Message3;
    toBase64(): string;
    static fromBase64(base64: any): Message3;
    toJsonObject(): JsonObject.JsonObject_Message3;
    static fromJsonObject(obj: object): Message3;
}
