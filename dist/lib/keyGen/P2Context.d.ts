import * as BN from "bn.js";
import { PailPubKey } from '@safeheron/crypto-paillier';
import { Secp256k1SchnorrProof } from "@safeheron/crypto-zkp";
import { Message1 } from "./message1";
import { Message2 } from "./message2";
import { Message3 } from "./message3";
import { KeyShare2 } from "./keyShare2";
declare type TCurvePoint = any;
export declare class P2Context {
    private expectedStep;
    pailPubKey: PailPubKey;
    x2: BN;
    Q2: TCurvePoint;
    Q: TCurvePoint;
    cypher_x1: BN;
    proof_Q2: Secp256k1SchnorrProof;
    message1: Message1;
    message2: Message2;
    message3: Message3;
    constructor(x2: BN, Q2: TCurvePoint, proof_Q2: Secp256k1SchnorrProof);
    static createContext(): Promise<P2Context>;
    step1(message1Bytes: Uint8Array): Uint8Array;
    step2(message3Bytes: Uint8Array): void;
    exportKeyShare(): KeyShare2;
}
export {};
