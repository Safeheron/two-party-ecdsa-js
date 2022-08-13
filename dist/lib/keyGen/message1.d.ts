import * as BN from "bn.js";
export declare class Message1 {
    readonly commitment_Q1: BN;
    constructor(commitment_Q1: BN);
    toProtobuf(): Uint8Array;
    static fromProtobuf(bytes: Uint8Array): Message1;
    toBase64(): string;
    static fromBase64(base64: string): Message1;
    toJsonObject(): object;
    static fromJsonObject(obj: object): Message1;
}
