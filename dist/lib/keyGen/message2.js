'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message2 = void 0;
const two_party_ecdsa_key_gen_1 = require("../proto_gen/two_party_ecdsa_key_gen");
const jsonObject_1 = require("./jsonObject");
const crypto_utils_1 = require("@safeheron/crypto-utils");
class Message2 {
    constructor(proof_Q2) {
        this.proof_Q2 = proof_Q2;
    }
    toProtobuf() {
        return two_party_ecdsa_key_gen_1.two_party_ecdsa_key_gen.Message2.encode(jsonObject_1.JsonObject.fromMessage2(this)).finish();
    }
    static fromProtobuf(bytes) {
        const model = two_party_ecdsa_key_gen_1.two_party_ecdsa_key_gen.Message2.decode(bytes);
        return jsonObject_1.JsonObject.toMessage2(model);
    }
    toBase64() {
        return crypto_utils_1.UrlBase64.fromBytes(this.toProtobuf());
    }
    static fromBase64(base64) {
        const bytes = crypto_utils_1.UrlBase64.toBytes(base64);
        return Message2.fromProtobuf(bytes);
    }
    toJsonObject() {
        return jsonObject_1.JsonObject.fromMessage2(this);
    }
    static fromJsonObject(obj) {
        return jsonObject_1.JsonObject.toMessage2(obj);
    }
}
exports.Message2 = Message2;
//# sourceMappingURL=message2.js.map