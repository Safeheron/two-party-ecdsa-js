'use strict'
import {Secp256k1SchnorrProof} from "@safeheron/crypto-zkp";
import {two_party_ecdsa_key_gen} from "../proto_gen/two_party_ecdsa_key_gen";
import {JsonObject} from "./jsonObject";
import {UrlBase64} from "@safeheron/crypto-utils";

export class Message2 {
    public readonly proof_Q2: Secp256k1SchnorrProof

    public constructor(proof_Q2: Secp256k1SchnorrProof) {
        this.proof_Q2 = proof_Q2
    }

    public toProtobuf(): Uint8Array{
        return two_party_ecdsa_key_gen.Message2.encode(JsonObject.fromMessage2(this)).finish()
    }

    public static fromProtobuf(bytes: Uint8Array): Message2{
        const model = two_party_ecdsa_key_gen.Message2.decode(bytes);
        return JsonObject.toMessage2(model)
    }

    public toBase64(): string {
        return UrlBase64.fromBytes(this.toProtobuf())
    }

    public static fromBase64(base64: string): Message2{
        const bytes = UrlBase64.toBytes(base64)
        return  Message2.fromProtobuf(bytes)
    }

    public toJsonObject(): object{
        return JsonObject.fromMessage2(this)
    }

    public static fromJsonObject(obj: object): Message2{
        return JsonObject.toMessage2(obj)
    }
}