import { BasicJsonObject } from "../basicJsonObject";
import { Message1 } from "./message1";
import { Message2 } from "./message2";
import { Message3 } from "./message3";
import { KeyShare1 } from "./keyShare1";
import { KeyShare2 } from "./keyShare2";
export declare namespace JsonObject {
    import JsonObject_Secp256k1SchnorrProof = BasicJsonObject.JsonObject_Secp256k1SchnorrProof;
    import JsonObject_PailProof = BasicJsonObject.JsonObject_PailProof;
    import JsonObject_CurvePoint = BasicJsonObject.JsonObject_CurvePoint;
    import JsonObject_PailPub = BasicJsonObject.JsonObject_PailPub;
    import JsonObject_PailPriv = BasicJsonObject.JsonObject_PailPriv;
    interface JsonObject_Message1 {
        commitment_Q1?: string;
    }
    function fromMessage1(message: Message1): JsonObject_Message1;
    function toMessage1(obj: JsonObject_Message1): Message1;
    interface JsonObject_Message2 {
        proof_Q2?: JsonObject_Secp256k1SchnorrProof;
    }
    function fromMessage2(message: Message2): JsonObject_Message2;
    function toMessage2(obj: JsonObject_Message2): Message2;
    interface JsonObject_Message3 {
        proof_pailN?: JsonObject_PailProof;
        N?: string;
        cypher_x1?: string;
        proof_Q1?: JsonObject_Secp256k1SchnorrProof;
        blind?: string;
    }
    function fromMessage3(message: Message3): JsonObject_Message3;
    function toMessage3(obj: JsonObject_Message3): Message3;
    interface JsonObject_KeyShare1 {
        x1?: string;
        Q?: JsonObject_CurvePoint;
        pailPubKey?: JsonObject_PailPub;
        pailPrivKey?: JsonObject_PailPriv;
    }
    function fromKeyShare1(keyShare: KeyShare1): JsonObject_KeyShare1;
    function toKeyShare1(obj: JsonObject_KeyShare1): KeyShare1;
    interface JsonObject_KeyShare2 {
        x2?: string;
        Q?: JsonObject_CurvePoint;
        pailPubKey?: JsonObject_PailPub;
        cypher_x1?: string;
    }
    function fromKeyShare2(keyShare: KeyShare2): JsonObject_KeyShare2;
    function toKeyShare2(obj: JsonObject_KeyShare2): KeyShare2;
}
