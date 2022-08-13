import * as BN from "bn.js";
import { Secp256k1SchnorrProof } from "@safeheron/crypto-zkp";
export declare class Message3 {
    readonly proof_R1: Secp256k1SchnorrProof;
    readonly blind: BN;
    constructor(proof_R1: Secp256k1SchnorrProof, blind: BN);
    toProtobuf(): Uint8Array;
    static fromProtobuf(bytes: Uint8Array): Message3;
    toBase64(): string;
    static fromBase64(base64: string): Message3;
    toJsonObject(): object;
    static fromJsonObject(obj: object): Message3;
}
