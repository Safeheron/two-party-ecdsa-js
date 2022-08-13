import * as BN from "bn.js";
import { PailPrivKey, PailPubKey } from '@safeheron/crypto-paillier';
declare type TCurvePoint = any;
export declare class KeyShare1 {
    readonly x1: BN;
    readonly Q: TCurvePoint;
    readonly pailPubKey: PailPubKey;
    readonly pailPrivKey: PailPrivKey;
    constructor(x1: BN, Q: TCurvePoint, pailPubKey: PailPubKey, pailPrivKey: PailPrivKey);
    toProtobuf(): Uint8Array;
    static fromProtobuf(bytes: Uint8Array): KeyShare1;
    toBase64(): string;
    static fromBase64(base64: any): KeyShare1;
    toJsonObject(): object;
    static fromJsonObject(obj: object): KeyShare1;
}
export {};
