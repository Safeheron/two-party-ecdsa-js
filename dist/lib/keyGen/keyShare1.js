'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyShare1 = void 0;
const two_party_ecdsa_key_gen_1 = require("../proto_gen/two_party_ecdsa_key_gen");
const jsonObject_1 = require("./jsonObject");
const crypto_utils_1 = require("@safeheron/crypto-utils");
class KeyShare1 {
    constructor(x1, Q, pailPubKey, pailPrivKey) {
        this.x1 = x1;
        this.Q = Q;
        this.pailPubKey = pailPubKey;
        this.pailPrivKey = pailPrivKey;
    }
    toProtobuf() {
        return two_party_ecdsa_key_gen_1.two_party_ecdsa_key_gen.KeyShare1.encode(jsonObject_1.JsonObject.fromKeyShare1(this)).finish();
    }
    static fromProtobuf(bytes) {
        const model = two_party_ecdsa_key_gen_1.two_party_ecdsa_key_gen.KeyShare1.decode(bytes);
        return jsonObject_1.JsonObject.toKeyShare1(model);
    }
    toBase64() {
        return crypto_utils_1.UrlBase64.fromBytes(this.toProtobuf());
    }
    static fromBase64(base64) {
        const bytes = crypto_utils_1.UrlBase64.toBytes(base64);
        return KeyShare1.fromProtobuf(bytes);
    }
    toJsonObject() {
        return jsonObject_1.JsonObject.fromKeyShare1(this);
    }
    static fromJsonObject(obj) {
        return jsonObject_1.JsonObject.toKeyShare1(obj);
    }
}
exports.KeyShare1 = KeyShare1;
//# sourceMappingURL=keyShare1.js.map