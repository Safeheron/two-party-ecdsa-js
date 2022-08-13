'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message1 = void 0;
const jsonObject_1 = require("./jsonObject");
const two_party_ecdsa_key_gen_1 = require("../proto_gen/two_party_ecdsa_key_gen");
const crypto_utils_1 = require("@safeheron/crypto-utils");
class Message1 {
    constructor(commitment_Q1) {
        this.commitment_Q1 = commitment_Q1;
    }
    toProtobuf() {
        return two_party_ecdsa_key_gen_1.two_party_ecdsa_key_gen.Message1.encode(jsonObject_1.JsonObject.fromMessage1(this)).finish();
    }
    static fromProtobuf(bytes) {
        const model = two_party_ecdsa_key_gen_1.two_party_ecdsa_key_gen.Message1.decode(bytes);
        return jsonObject_1.JsonObject.toMessage1(model);
    }
    toBase64() {
        return crypto_utils_1.UrlBase64.fromBytes(this.toProtobuf());
    }
    static fromBase64(base64) {
        const bytes = crypto_utils_1.UrlBase64.toBytes(base64);
        return Message1.fromProtobuf(bytes);
    }
    toJsonObject() {
        return jsonObject_1.JsonObject.fromMessage1(this);
    }
    static fromJsonObject(obj) {
        return jsonObject_1.JsonObject.toMessage1(obj);
    }
}
exports.Message1 = Message1;
//# sourceMappingURL=message1.js.map