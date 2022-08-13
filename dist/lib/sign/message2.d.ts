import { Secp256k1SchnorrProof } from "@safeheron/crypto-zkp";
export declare class Message2 {
    readonly proof_R2: Secp256k1SchnorrProof;
    constructor(schnorrProof_R2: Secp256k1SchnorrProof);
    toProtobuf(): Uint8Array;
    static fromProtobuf(bytes: Uint8Array): Message2;
    toBase64(): string;
    static fromBase64(base64: string): Message2;
    toJsonObject(): object;
    static fromJsonObject(obj: object): Message2;
}
