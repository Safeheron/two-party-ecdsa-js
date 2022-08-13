import * as BN from "bn.js";
import { PailPubKey } from '@safeheron/crypto-paillier';
import { JsonObject } from "./jsonObject";
declare type TCurvePoint = any;
export declare class KeyShare2 {
    readonly x2: BN;
    readonly Q: TCurvePoint;
    readonly pailPubKey: PailPubKey;
    readonly cypher_x1: BN;
    constructor(x2: BN, Q: TCurvePoint, pailPubKey: PailPubKey, cypher_x1: BN);
    toProtobuf(): Uint8Array;
    static fromProtobuf(bytes: Uint8Array): KeyShare2;
    toBase64(): string;
    fromBase64(base64: any): KeyShare2;
    toJsonObject(): JsonObject.JsonObject_KeyShare2;
    static fromJsonObject(obj: object): KeyShare2;
}
export {};
