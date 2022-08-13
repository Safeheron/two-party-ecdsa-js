'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyShare2 = void 0;
const two_party_ecdsa_key_gen_1 = require("../proto_gen/two_party_ecdsa_key_gen");
const jsonObject_1 = require("./jsonObject");
const crypto_utils_1 = require("@safeheron/crypto-utils");
class KeyShare2 {
    constructor(x2, Q, pailPubKey, cypher_x1) {
        this.x2 = x2;
        this.Q = Q;
        this.pailPubKey = pailPubKey;
        this.cypher_x1 = cypher_x1;
    }
    toProtobuf() {
        return two_party_ecdsa_key_gen_1.two_party_ecdsa_key_gen.KeyShare2.encode(jsonObject_1.JsonObject.fromKeyShare2(this)).finish();
    }
    static fromProtobuf(bytes) {
        const model = two_party_ecdsa_key_gen_1.two_party_ecdsa_key_gen.KeyShare2.decode(bytes);
        return jsonObject_1.JsonObject.toKeyShare2(model);
    }
    toBase64() {
        return crypto_utils_1.UrlBase64.fromBytes(this.toProtobuf());
    }
    fromBase64(base64) {
        const bytes = crypto_utils_1.UrlBase64.toBytes(base64);
        return KeyShare2.fromProtobuf(bytes);
    }
    toJsonObject() {
        return jsonObject_1.JsonObject.fromKeyShare2(this);
    }
    static fromJsonObject(obj) {
        return jsonObject_1.JsonObject.toKeyShare2(obj);
    }
}
exports.KeyShare2 = KeyShare2;
//# sourceMappingURL=keyShare2.js.map