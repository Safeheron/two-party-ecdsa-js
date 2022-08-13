import { BasicJsonObject } from "../basicJsonObject";
import JsonObject_Secp256k1SchnorrProof = BasicJsonObject.JsonObject_Secp256k1SchnorrProof;
import { Message1 } from "./message1";
import { Message2 } from "./message2";
import { Message3 } from "./message3";
import { Message4 } from "./message4";
export declare namespace JsonObject {
    interface JsonObject_Message1 {
        commitment_R1?: string;
    }
    function fromMessage1(message: Message1): JsonObject_Message1;
    function toMessage1(obj: JsonObject_Message1): Message1;
    interface JsonObject_Message2 {
        proof_R2?: JsonObject_Secp256k1SchnorrProof;
    }
    function fromMessage2(message: Message2): JsonObject_Message2;
    function toMessage2(obj: JsonObject_Message2): Message2;
    interface JsonObject_Message3 {
        proof_R1?: JsonObject_Secp256k1SchnorrProof;
        blind?: string;
    }
    function fromMessage3(message: Message3): JsonObject_Message3;
    function toMessage3(obj: JsonObject_Message3): Message3;
    interface JsonObject_Message4 {
        cypher3?: string;
    }
    function fromMessage4(message: Message4): JsonObject_Message4;
    function toMessage4(obj: JsonObject_Message4): Message4;
}
