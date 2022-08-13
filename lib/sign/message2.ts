'use strict'
import * as BN from "bn.js"
import {Rand} from '@safeheron/crypto-rand'
import {PailPrivKey, PailPubKey, createPailKeyPair} from '@safeheron/crypto-paillier'
import {Secp256k1SchnorrProof} from "@safeheron/crypto-zkp";
import {two_party_ecdsa_sign} from "../proto_gen/two_party_ecdsa_sign";
import {JsonObject} from "./jsonObject";
import {UrlBase64} from "@safeheron/crypto-utils";

type TCurve = any
type TCurvePoint = any

export class Message2{
    public readonly proof_R2: Secp256k1SchnorrProof

    public constructor(schnorrProof_R2: Secp256k1SchnorrProof) {
        this.proof_R2 = schnorrProof_R2
    }

    public toProtobuf(): Uint8Array{
        return two_party_ecdsa_sign.Message2.encode(JsonObject.fromMessage2(this)).finish()
    }

    public static fromProtobuf(bytes: Uint8Array): Message2{
        const model = two_party_ecdsa_sign.Message2.decode(bytes);
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
