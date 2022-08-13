'use strict'
import * as BN from "bn.js"
import {Rand} from '@safeheron/crypto-rand'
import {PailPrivKey, PailPubKey, createPailKeyPair} from '@safeheron/crypto-paillier'
import {two_party_ecdsa_sign} from "../proto_gen/two_party_ecdsa_sign";
import {JsonObject} from "./jsonObject";
import {UrlBase64} from "@safeheron/crypto-utils";

type TCurve = any
type TCurvePoint = any

export class Message1 {
    public readonly commitment_R1: BN

    public constructor(commitment_R1: BN) {
        this.commitment_R1 = commitment_R1
    }

    public toProtobuf(): Uint8Array {
        return two_party_ecdsa_sign.Message1.encode(JsonObject.fromMessage1(this)).finish()
    }

    public static fromProtobuf(bytes: Uint8Array): Message1 {
        const model = two_party_ecdsa_sign.Message1.decode(bytes);
        return JsonObject.toMessage1(model)
    }

    public toBase64(): string {
        return UrlBase64.fromBytes(this.toProtobuf())
    }

    public static fromBase64(base64: string): Message1 {
        const bytes = UrlBase64.toBytes(base64)
        return Message1.fromProtobuf(bytes)
    }

    public toJsonObject(): object {
        return JsonObject.fromMessage1(this)
    }

    public static fromJsonObject(obj: object): Message1 {
        return JsonObject.toMessage1(obj)
    }

}