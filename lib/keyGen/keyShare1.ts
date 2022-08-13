'use strict'
import * as BN from "bn.js"
import {PailPrivKey, PailPubKey, createPailKeyPair} from '@safeheron/crypto-paillier'
import {two_party_ecdsa_key_gen} from "../proto_gen/two_party_ecdsa_key_gen";
import {JsonObject} from "./jsonObject";
import {UrlBase64} from "@safeheron/crypto-utils";

type TCurvePoint = any

export class KeyShare1 {
    public readonly x1: BN
    public readonly Q: TCurvePoint
    public readonly pailPubKey: PailPubKey
    public readonly pailPrivKey: PailPrivKey

    public constructor(x1: BN, Q: TCurvePoint, pailPubKey: PailPubKey, pailPrivKey: PailPrivKey) {
        this.x1 = x1
        this.Q = Q
        this.pailPubKey = pailPubKey
        this.pailPrivKey = pailPrivKey
    }

    public toProtobuf(): Uint8Array{
        return two_party_ecdsa_key_gen.KeyShare1.encode(JsonObject.fromKeyShare1(this)).finish()
    }

    public static fromProtobuf(bytes: Uint8Array): KeyShare1{
        const model = two_party_ecdsa_key_gen.KeyShare1.decode(bytes);
        return JsonObject.toKeyShare1(model)
    }

    public toBase64(): string {
        return UrlBase64.fromBytes(this.toProtobuf())
    }

    public static fromBase64(base64) : KeyShare1{
        const bytes = UrlBase64.toBytes(base64)
        return  KeyShare1.fromProtobuf(bytes)
    }

    public toJsonObject(): object{
        return JsonObject.fromKeyShare1(this)
    }

    public static fromJsonObject(obj: object): KeyShare1{
        return JsonObject.toKeyShare1(obj)
    }
}
