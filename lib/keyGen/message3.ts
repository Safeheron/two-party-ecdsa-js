'use strict'
import * as BN from "bn.js"
import {Secp256k1SchnorrProof, PailProof} from "@safeheron/crypto-zkp";
import {two_party_ecdsa_key_gen} from "../proto_gen/two_party_ecdsa_key_gen";
import {JsonObject} from "./jsonObject";
import {UrlBase64} from "@safeheron/crypto-utils";

export class Message3 {
    public readonly proof_PailN: PailProof
    public readonly N: BN
    public readonly cypher_x1: BN
    public readonly proof_Q1: Secp256k1SchnorrProof
    public readonly blind: BN

    public constructor(proof_PailN: PailProof, N: BN, cypher_x1: BN, proof_Q1: Secp256k1SchnorrProof, blind: BN) {
        this.proof_PailN = proof_PailN
        this.N = N
        this.cypher_x1 = cypher_x1
        this.proof_Q1 = proof_Q1
        this.blind = blind
    }


    public toProtobuf(){
        return two_party_ecdsa_key_gen.Message3.encode(JsonObject.fromMessage3(this)).finish()
    }

    public static fromProtobuf(bytes): Message3{
        const model = two_party_ecdsa_key_gen.Message3.decode(bytes);
        return JsonObject.toMessage3(model)
    }

    public toBase64(): string {
        return UrlBase64.fromBytes(this.toProtobuf())
    }

    public static fromBase64(base64): Message3{
        const bytes = UrlBase64.toBytes(base64)
        return  Message3.fromProtobuf(bytes)
    }

    public toJsonObject(){
        return JsonObject.fromMessage3(this)
    }

    public static fromJsonObject(obj: object): Message3{
        return JsonObject.toMessage3(obj)
    }
}
