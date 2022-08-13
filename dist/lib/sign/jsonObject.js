'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonObject = void 0;
const BN = require("bn.js");
const basicJsonObject_1 = require("../basicJsonObject");
const elliptic = require("elliptic");
const Secp256k1 = new elliptic.ec('secp256k1');
const P256 = new elliptic.ec('p256');
const Ed25519 = new elliptic.eddsa('ed25519');
const message1_1 = require("./message1");
const message2_1 = require("./message2");
const message3_1 = require("./message3");
const message4_1 = require("./message4");
var JsonObject;
(function (JsonObject) {
    function fromMessage1(message) {
        return {
            commitment_R1: message.commitment_R1.toString(16),
        };
    }
    JsonObject.fromMessage1 = fromMessage1;
    function toMessage1(obj) {
        return new message1_1.Message1(new BN(obj.commitment_R1, 16));
    }
    JsonObject.toMessage1 = toMessage1;
    function fromMessage2(message) {
        return {
            proof_R2: basicJsonObject_1.BasicJsonObject.fromSecp256k1SchnorrProof(message.proof_R2),
        };
    }
    JsonObject.fromMessage2 = fromMessage2;
    function toMessage2(obj) {
        return new message2_1.Message2(basicJsonObject_1.BasicJsonObject.toSecp256k1SchnorrProof(obj.proof_R2));
    }
    JsonObject.toMessage2 = toMessage2;
    function fromMessage3(message) {
        return {
            proof_R1: basicJsonObject_1.BasicJsonObject.fromSecp256k1SchnorrProof(message.proof_R1),
            blind: message.blind.toString(16),
        };
    }
    JsonObject.fromMessage3 = fromMessage3;
    function toMessage3(obj) {
        return new message3_1.Message3(basicJsonObject_1.BasicJsonObject.toSecp256k1SchnorrProof(obj.proof_R1), new BN(obj.blind, 16));
    }
    JsonObject.toMessage3 = toMessage3;
    function fromMessage4(message) {
        return {
            cypher3: message.cypher3.toString(16),
        };
    }
    JsonObject.fromMessage4 = fromMessage4;
    function toMessage4(obj) {
        return new message4_1.Message4(new BN(obj.cypher3, 16));
    }
    JsonObject.toMessage4 = toMessage4;
})(JsonObject = exports.JsonObject || (exports.JsonObject = {}));
//# sourceMappingURL=jsonObject.js.map