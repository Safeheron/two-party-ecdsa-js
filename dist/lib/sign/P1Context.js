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
const crypto_rand_1 = require("@safeheron/crypto-rand");
const dist_1 = require("@safeheron/crypto-commitment/dist");
const elliptic = require("elliptic");
const crypto_zkp_1 = require("@safeheron/crypto-zkp");
const message1_1 = require("./message1");
const message2_1 = require("./message2");
const message3_1 = require("./message3");
const message4_1 = require("./message4");
const keyGen_1 = require("../keyGen");
const auxiliary_1 = require("./auxiliary");
const assert = require("assert");
const Secp256k1 = new elliptic.ec('secp256k1');
class P1Context {
    constructor(keyShare1, k1, R1, blind, commitment_R1, proof_R1, m) {
        this.keyShare1 = keyShare1;
        this.k1 = k1;
        this.k1Inv = k1.invm(Secp256k1.n);
        this.R1 = R1;
        this.blind = blind;
        this.commitment_R1 = commitment_R1;
        this.proof_R1 = proof_R1;
        this.m = m;
        this.expectedStep = 1;
    }
    static createContext(keyShare1Json, m) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyShare1 = keyGen_1.KeyShare1.fromJsonObject(JSON.parse(keyShare1Json));
            // Sample k1 \in [0, q]
            let k1 = yield crypto_rand_1.Rand.randomBN(32);
            // R1 = k1 * G
            let R1 = Secp256k1.g.mul(k1);
            // Commitment of R1
            let blind = yield crypto_rand_1.Rand.randomBN(32);
            let commitment_R1 = dist_1.HashCommitment.createComWithBlindFromCurvePoint(R1, blind);
            // Schnorr proof of R1
            let proof_R1 = yield crypto_zkp_1.Secp256k1SchnorrProof.prove(k1);
            return new P1Context(keyShare1, k1, R1, blind, commitment_R1, proof_R1, m);
        });
    }
    step1() {
        if (this.expectedStep != 1)
            throw "The expected step must be 1 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message1 = new message1_1.Message1(this.commitment_R1);
        return this.message1.toProtobuf();
    }
    step2(message2Bytes) {
        if (this.expectedStep != 2)
            throw "The expected step must be 2 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message2 = message2_1.Message2.fromProtobuf(message2Bytes);
        if (!this.message2.proof_R2.verify()) {
            throw "Failed on schnorr proof on Q2 !";
        }
        // Calculate R = (k1 * k2) * G = k1 * R2
        const R2 = this.message2.proof_R2.pk;
        this.R = R2.mul(this.k1);
        this.message3 = new message3_1.Message3(this.proof_R1, this.blind);
        return this.message3.toProtobuf();
    }
    step3(message4Bytes) {
        if (this.expectedStep != 3)
            throw "The expected step must be 3 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message4 = message4_1.Message4.fromProtobuf(message4Bytes);
        // Calculate the public key
        //this.R = this.R1.add(this.message2.proof_R2.pk)
        let R2 = this.message2.proof_R2.pk;
        this.R = R2.mul(this.k1);
        // s' = decrypt(c3)
        const sPrime = this.keyShare1.pailPrivKey.decrypt(this.message4.cypher3);
        // s = s' * k1^-1   mod n
        this.s = sPrime.mul(this.k1Inv).mod(Secp256k1.n);
        this.r = this.R.getX().mod(Secp256k1.n);
        // get v
        let recoveryParam = (this.R.getY().isOdd() ? 1 : 0) |
            (this.R.getX().cmp(this.r) !== 0 ? 2 : 0);
        this.s = this.s.mod(Secp256k1.n);
        const halfOfN = Secp256k1.n.divn(2);
        if (this.s.gt(halfOfN)) {
            this.s = Secp256k1.n.sub(this.s);
            recoveryParam ^= 1;
        }
        this.v = recoveryParam;
        assert((0, auxiliary_1.verifySig)(this.m, this.r, this.s, this.v, this.keyShare1.Q));
    }
    exportSig() {
        if (this.expectedStep <= 3)
            throw "The signature isn't prepared before step " + this.expectedStep;
        return [this.r, this.s, this.v];
    }
}
exports.P1Context = P1Context;
//# sourceMappingURL=P1Context.js.map