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

export class Message3{
    public readonly proof_R1: Secp256k1SchnorrProof
    public readonly blind: BN

    public constructor(proof_R1: Secp256k1SchnorrProof, blind: BN) {
        this.proof_R1 = proof_R1
        this.blind = blind
    }

    public toProtobuf(): Uint8Array{
        return two_party_ecdsa_sign.Message3.encode(JsonObject.fromMessage3(this)).finish()
    }

    public static fromProtobuf(bytes: Uint8Array): Message3{
        const model = two_party_ecdsa_sign.Message3.decode(bytes);
        return JsonObject.toMessage3(model)
    }

    public toBase64(): string {
        return UrlBase64.fromBytes(this.toProtobuf())
    }

    public static fromBase64(base64: string): Message3{
        const bytes = UrlBase64.toBytes(base64)
        return  Message3.fromProtobuf(bytes)
    }

    public toJsonObject(): object{
        return JsonObject.fromMessage3(this)
    }

    public static fromJsonObject(obj: object): Message3{
        return JsonObject.toMessage3(obj)
    }
}
