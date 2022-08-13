'use strict'
import * as BN from "bn.js"
import {Rand} from '@safeheron/crypto-rand'
import {PailPrivKey, PailPubKey, createPailKeyPair} from '@safeheron/crypto-paillier'
import {Secp256k1SchnorrProof, PailProof} from "@safeheron/crypto-zkp";
import {two_party_ecdsa_sign} from "../proto_gen/two_party_ecdsa_sign";
import {JsonObject} from "./jsonObject";
import {UrlBase64} from "@safeheron/crypto-utils";

type TCurve = any
type TCurvePoint = any

export class Message4{
    public readonly cypher3: BN

    public constructor(cypher3: BN) {
        this.cypher3 = cypher3
    }

    public toProtobuf(): Uint8Array{
        return two_party_ecdsa_sign.Message4.encode(JsonObject.fromMessage4(this)).finish()
    }

    public static fromProtobuf(bytes: Uint8Array): Message4{
        const model = two_party_ecdsa_sign.Message4.decode(bytes);
        return JsonObject.toMessage4(model)
    }

    public toBase64(): string {
        return UrlBase64.fromBytes(this.toProtobuf())
    }

    public static fromBase64(base64: string): Message4{
        const bytes = UrlBase64.toBytes(base64)
        return  Message4.fromProtobuf(bytes)
    }

    public toJsonObject(): object{
        return JsonObject.fromMessage4(this)
    }

    public static fromJsonObject(obj: object): Message4{
        return JsonObject.toMessage4(obj)
    }
}