import * as BN from "bn.js";
export declare class Message4 {
    readonly cypher3: BN;
    constructor(cypher3: BN);
    toProtobuf(): Uint8Array;
    static fromProtobuf(bytes: Uint8Array): Message4;
    toBase64(): string;
    static fromBase64(base64: string): Message4;
    toJsonObject(): object;
    static fromJsonObject(obj: object): Message4;
}
