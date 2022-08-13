'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message4 = void 0;
const two_party_ecdsa_sign_1 = require("../proto_gen/two_party_ecdsa_sign");
const jsonObject_1 = require("./jsonObject");
const crypto_utils_1 = require("@safeheron/crypto-utils");
class Message4 {
    constructor(cypher3) {
        this.cypher3 = cypher3;
    }
    toProtobuf() {
        return two_party_ecdsa_sign_1.two_party_ecdsa_sign.Message4.encode(jsonObject_1.JsonObject.fromMessage4(this)).finish();
    }
    static fromProtobuf(bytes) {
        const model = two_party_ecdsa_sign_1.two_party_ecdsa_sign.Message4.decode(bytes);
        return jsonObject_1.JsonObject.toMessage4(model);
    }
    toBase64() {
        return crypto_utils_1.UrlBase64.fromBytes(this.toProtobuf());
    }
    static fromBase64(base64) {
        const bytes = crypto_utils_1.UrlBase64.toBytes(base64);
        return Message4.fromProtobuf(bytes);
    }
    toJsonObject() {
        return jsonObject_1.JsonObject.fromMessage4(this);
    }
    static fromJsonObject(obj) {
        return jsonObject_1.JsonObject.toMessage4(obj);
    }
}
exports.Message4 = Message4;
//# sourceMappingURL=message4.js.map