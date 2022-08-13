'use strict'
import * as BN from "bn.js"
import {PailPrivKey, PailPubKey, createPailKeyPair} from '@safeheron/crypto-paillier'
import {two_party_ecdsa_key_gen} from "../proto_gen/two_party_ecdsa_key_gen";
import {JsonObject} from "./jsonObject";
import {UrlBase64} from "@safeheron/crypto-utils";

type TCurvePoint = any

export class KeyShare2 {
    public readonly x2: BN
    public readonly Q: TCurvePoint
    public readonly pailPubKey: PailPubKey
    public readonly cypher_x1: BN

    public constructor(x2: BN, Q: TCurvePoint, pailPubKey: PailPubKey, cypher_x1: BN) {
        this.x2 = x2
        this.Q = Q
        this.pailPubKey = pailPubKey
        this.cypher_x1 = cypher_x1
    }

    public toProtobuf(): Uint8Array{
        return two_party_ecdsa_key_gen.KeyShare2.encode(JsonObject.fromKeyShare2(this)).finish()
    }

    public static fromProtobuf(bytes: Uint8Array): KeyShare2{
        const model = two_party_ecdsa_key_gen.KeyShare2.decode(bytes);
        return JsonObject.toKeyShare2(model)
    }

    public toBase64(): string {
        return UrlBase64.fromBytes(this.toProtobuf())
    }

    public fromBase64(base64){
        const bytes = UrlBase64.toBytes(base64)
        return  KeyShare2.fromProtobuf(bytes)
    }

    public toJsonObject(){
        return JsonObject.fromKeyShare2(this)
    }

    public static fromJsonObject(obj: object): KeyShare2{
        return JsonObject.toKeyShare2(obj)
    }
}
