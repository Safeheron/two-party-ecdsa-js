'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonObject = void 0;
const BN = require("bn.js");
const basicJsonObject_1 = require("../basicJsonObject");
const message1_1 = require("./message1");
const message2_1 = require("./message2");
const message3_1 = require("./message3");
const keyShare1_1 = require("./keyShare1");
const keyShare2_1 = require("./keyShare2");
var JsonObject;
(function (JsonObject) {
    function fromMessage1(message) {
        return {
            commitment_Q1: message.commitment_Q1.toString(16),
        };
    }
    JsonObject.fromMessage1 = fromMessage1;
    function toMessage1(obj) {
        return new message1_1.Message1(new BN(obj.commitment_Q1, 16));
    }
    JsonObject.toMessage1 = toMessage1;
    function fromMessage2(message) {
        return {
            proof_Q2: basicJsonObject_1.BasicJsonObject.fromSecp256k1SchnorrProof(message.proof_Q2),
        };
    }
    JsonObject.fromMessage2 = fromMessage2;
    function toMessage2(obj) {
        return new message2_1.Message2(basicJsonObject_1.BasicJsonObject.toSecp256k1SchnorrProof(obj.proof_Q2));
    }
    JsonObject.toMessage2 = toMessage2;
    function fromMessage3(message) {
        return {
            proof_pailN: basicJsonObject_1.BasicJsonObject.fromPailProof(message.proof_PailN),
            N: message.N.toString(16),
            cypher_x1: message.cypher_x1.toString(16),
            proof_Q1: basicJsonObject_1.BasicJsonObject.fromSecp256k1SchnorrProof(message.proof_Q1),
            blind: message.blind.toString(16),
        };
    }
    JsonObject.fromMessage3 = fromMessage3;
    function toMessage3(obj) {
        return new message3_1.Message3(basicJsonObject_1.BasicJsonObject.toPailProof(obj.proof_pailN), new BN(obj.N, 16), new BN(obj.cypher_x1, 16), basicJsonObject_1.BasicJsonObject.toSecp256k1SchnorrProof(obj.proof_Q1), new BN(obj.blind, 16));
    }
    JsonObject.toMessage3 = toMessage3;
    function fromKeyShare1(keyShare) {
        return {
            x1: keyShare.x1.toString(16),
            Q: basicJsonObject_1.BasicJsonObject.fromCurvePoint(keyShare.Q, "secp256k1"),
            pailPubKey: basicJsonObject_1.BasicJsonObject.fromPailPub(keyShare.pailPubKey),
            pailPrivKey: basicJsonObject_1.BasicJsonObject.fromPailPriv(keyShare.pailPrivKey),
        };
    }
    JsonObject.fromKeyShare1 = fromKeyShare1;
    function toKeyShare1(obj) {
        return new keyShare1_1.KeyShare1(new BN(obj.x1, 16), basicJsonObject_1.BasicJsonObject.toCurvePoint(obj.Q), basicJsonObject_1.BasicJsonObject.toPailPub(obj.pailPubKey), basicJsonObject_1.BasicJsonObject.toPailPriv(obj.pailPrivKey));
    }
    JsonObject.toKeyShare1 = toKeyShare1;
    function fromKeyShare2(keyShare) {
        return {
            x2: keyShare.x2.toString(16),
            Q: basicJsonObject_1.BasicJsonObject.fromCurvePoint(keyShare.Q, "secp256k1"),
            pailPubKey: basicJsonObject_1.BasicJsonObject.fromPailPub(keyShare.pailPubKey),
            cypher_x1: keyShare.cypher_x1.toString(16),
        };
    }
    JsonObject.fromKeyShare2 = fromKeyShare2;
    function toKeyShare2(obj) {
        return new keyShare2_1.KeyShare2(new BN(obj.x2, 16), basicJsonObject_1.BasicJsonObject.toCurvePoint(obj.Q), basicJsonObject_1.BasicJsonObject.toPailPub(obj.pailPubKey), new BN(obj.cypher_x1, 16));
    }
    JsonObject.toKeyShare2 = toKeyShare2;
})(JsonObject = exports.JsonObject || (exports.JsonObject = {}));
//# sourceMappingURL=jsonObject.js.map