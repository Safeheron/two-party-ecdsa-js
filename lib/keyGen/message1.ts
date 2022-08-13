'use strict'
import * as BN from "bn.js"
import {JsonObject} from "./jsonObject";
import {two_party_ecdsa_key_gen} from "../proto_gen/two_party_ecdsa_key_gen";
import {Hex, UrlBase64} from "@safeheron/crypto-utils";

export class Message1 {
    public readonly commitment_Q1: BN

    public constructor(commitment_Q1: BN) {
        this.commitment_Q1 = commitment_Q1
    }

    public toProtobuf(): Uint8Array{
        return two_party_ecdsa_key_gen.Message1.encode(JsonObject.fromMessage1(this)).finish()
    }

    public static fromProtobuf(bytes: Uint8Array): Message1{
        const model = two_party_ecdsa_key_gen.Message1.decode(bytes);
        return JsonObject.toMessage1(model)
    }

    public toBase64(): string {
        return UrlBase64.fromBytes(this.toProtobuf())
    }

    public static fromBase64(base64: string): Message1{
        const bytes = UrlBase64.toBytes(base64)
        return  Message1.fromProtobuf(bytes)
    }

    public toJsonObject(): object{
        return JsonObject.fromMessage1(this)
    }

    public static fromJsonObject(obj: object): Message1{
        return JsonObject.toMessage1(obj)
    }
}