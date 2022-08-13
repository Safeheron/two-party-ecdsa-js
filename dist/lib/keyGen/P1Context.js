'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P1Context = void 0;
const BN = require("bn.js");
const crypto_rand_1 = require("@safeheron/crypto-rand");
const crypto_paillier_1 = require("@safeheron/crypto-paillier");
const dist_1 = require("@safeheron/crypto-commitment/dist");
const elliptic = require("elliptic");
const crypto_zkp_1 = require("@safeheron/crypto-zkp");
const message1_1 = require("./message1");
const message2_1 = require("./message2");
const message3_1 = require("./message3");
const keyShare1_1 = require("./keyShare1");
const Secp256k1 = new elliptic.ec('secp256k1');
class P1Context {
    constructor(pailPrivKey, pailPubKey, x1, Q1, blind, commitment_Q1, cypher_x1, proof_Q1, proof_pailN) {
        this.pailPrivKey = pailPrivKey;
        this.pailPubKey = pailPubKey;
        this.x1 = x1;
        this.Q1 = Q1;
        this.blind = blind;
        this.commitment_Q1 = commitment_Q1;
        this.cypher_x1 = cypher_x1;
        this.proof_Q1 = proof_Q1;
        this.proof_pailN = proof_pailN;
        this.expectedStep = 1;
    }
    static createContext() {
        return __awaiter(this, void 0, void 0, function* () {
            const [pailPrivKey, pailPubKey] = yield (0, crypto_paillier_1.createPailKeyPair)(2048 / 8);
            // Sample x1 \in [q/3, 2q/3]
            const TWO = new BN(2);
            const THREE = new BN(3);
            let min = Secp256k1.n.div(THREE);
            let max = Secp256k1.n.mul(TWO).div(THREE);
            let x1 = yield crypto_rand_1.Rand.randomBN(32);
            while (x1.lt(min) || x1.gt(max)) {
                x1 = yield crypto_rand_1.Rand.randomBN(32);
            }
            // Q1 = x1 * G
            let Q1 = Secp256k1.g.mul(x1);
            // Commitment of Q1
            let blind = yield crypto_rand_1.Rand.randomBN(32);
            let commitment_Q1 = dist_1.HashCommitment.createComWithBlindFromCurvePoint(Q1, blind);
            // Enc(x1)
            let cypher_x1 = yield pailPubKey.encrypt(x1);
            // Schnorr proof of Q1
            let proof_Q1 = yield crypto_zkp_1.Secp256k1SchnorrProof.prove(x1);
            // Proof PailN
            let proof_pailN = crypto_zkp_1.PailProof.prove(pailPrivKey, new BN(1), Q1.getX(), Q1.getY());
            return new P1Context(pailPrivKey, pailPubKey, x1, Q1, blind, commitment_Q1, cypher_x1, proof_Q1, proof_pailN);
        });
    }
    step1() {
        if (this.expectedStep != 1)
            throw "The expected step must be 1 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message1 = new message1_1.Message1(this.commitment_Q1);
        return this.message1.toProtobuf();
    }
    step2(message2Bytes) {
        if (this.expectedStep != 2)
            throw "The expected step must be 2 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message2 = message2_1.Message2.fromProtobuf(message2Bytes);
        if (!this.message2.proof_Q2.verify()) {
            throw "Failed on schnorr proof on Q2 !";
        }
        // Calculate the public key
        const Q2 = this.message2.proof_Q2.pk;
        this.Q = Q2.mul(this.x1);
        this.message3 = new message3_1.Message3(this.proof_pailN, this.pailPrivKey.n, this.cypher_x1, this.proof_Q1, this.blind);
        return this.message3.toProtobuf();
    }
    exportKeyShare() {
        if (this.expectedStep <= 2)
            throw "The key share isn't prepared before step " + this.expectedStep;
        return new keyShare1_1.KeyShare1(this.x1, this.Q, this.pailPubKey, this.pailPrivKey);
    }
}
exports.P1Context = P1Context;
//# sourceMappingURL=P1Context.js.map