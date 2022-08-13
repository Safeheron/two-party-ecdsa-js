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
exports.P2Context = void 0;
const BN = require("bn.js");
const crypto_rand_1 = require("@safeheron/crypto-rand");
const crypto_paillier_1 = require("@safeheron/crypto-paillier");
const dist_1 = require("@safeheron/crypto-commitment/dist");
const elliptic = require("elliptic");
const crypto_zkp_1 = require("@safeheron/crypto-zkp");
const message1_1 = require("./message1");
const message2_1 = require("./message2");
const message3_1 = require("./message3");
const keyShare2_1 = require("./keyShare2");
const Secp256k1 = new elliptic.ec('secp256k1');
class P2Context {
    constructor(x2, Q2, proof_Q2) {
        this.x2 = x2;
        this.Q2 = Q2;
        this.proof_Q2 = proof_Q2;
        this.expectedStep = 1;
    }
    static createContext() {
        return __awaiter(this, void 0, void 0, function* () {
            // Sample x2 \in (0, 2^255]
            let x2 = yield crypto_rand_1.Rand.randomBNLt(Secp256k1.n);
            while (x2.eqn(new BN(0))) {
                x2 = yield crypto_rand_1.Rand.randomBN(32);
            }
            // Q2 = x2 * G
            let Q2 = Secp256k1.g.mul(x2);
            // Schnorr proof of Q2
            let proof_Q2 = yield crypto_zkp_1.Secp256k1SchnorrProof.prove(x2);
            return new P2Context(x2, Q2, proof_Q2);
        });
    }
    step1(message1Bytes) {
        if (this.expectedStep != 1)
            throw "The expected step must be 1 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message1 = message1_1.Message1.fromProtobuf(message1Bytes);
        this.message2 = new message2_1.Message2(this.proof_Q2);
        return this.message2.toProtobuf();
    }
    step2(message3Bytes) {
        if (this.expectedStep != 2)
            throw "The expected step must be 2 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message3 = message3_1.Message3.fromProtobuf(message3Bytes);
        // Verify the Schnorr proof
        let Q1 = this.message3.proof_Q1.pk;
        let commitment_Q1 = dist_1.HashCommitment.createComWithBlindFromCurvePoint(Q1, this.message3.blind);
        if (!commitment_Q1.eq(this.message1.commitment_Q1)) {
            throw "Failed on commitment of Q1 !";
        }
        if (!this.message3.proof_Q1.verify()) {
            throw "Failed on schnorr proof on Q1 !";
        }
        // Verify the pail proof
        // g = n + 1
        let g = this.message3.N.add(new BN(1));
        let pailPubKey = new crypto_paillier_1.PailPubKey(this.message3.N, g);
        if (!this.message3.proof_PailN.verify(pailPubKey, new BN(1), Q1.getX(), Q1.getY())) {
            throw "Failed on proof on pailN !";
        }
        // Calculate the public key
        this.Q = Q1.mul(this.x2);
        this.pailPubKey = pailPubKey;
        this.cypher_x1 = this.message3.cypher_x1;
    }
    exportKeyShare() {
        if (this.expectedStep <= 2)
            throw "The key share isn't prepared before step " + this.expectedStep;
        return new keyShare2_1.KeyShare2(this.x2, this.Q, this.pailPubKey, this.cypher_x1);
    }
}
exports.P2Context = P2Context;
//# sourceMappingURL=P2Context.js.map