'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message3 = void 0;
const two_party_ecdsa_sign_1 = require("../proto_gen/two_party_ecdsa_sign");
const jsonObject_1 = require("./jsonObject");
const crypto_utils_1 = require("@safeheron/crypto-utils");
class Message3 {
    constructor(proof_R1, blind) {
        this.proof_R1 = proof_R1;
        this.blind = blind;
    }
    toProtobuf() {
        return two_party_ecdsa_sign_1.two_party_ecdsa_sign.Message3.encode(jsonObject_1.JsonObject.fromMessage3(this)).finish();
    }
    static fromProtobuf(bytes) {
        const model = two_party_ecdsa_sign_1.two_party_ecdsa_sign.Message3.decode(bytes);
        return jsonObject_1.JsonObject.toMessage3(model);
    }
    toBase64() {
        return crypto_utils_1.UrlBase64.fromBytes(this.toProtobuf());
    }
    static fromBase64(base64) {
        const bytes = crypto_utils_1.UrlBase64.toBytes(base64);
        return Message3.fromProtobuf(bytes);
    }
    toJsonObject() {
        return jsonObject_1.JsonObject.fromMessage3(this);
    }
    static fromJsonObject(obj) {
        return jsonObject_1.JsonObject.toMessage3(obj);
    }
}
exports.Message3 = Message3;
//# sourceMappingURL=message3.js.map