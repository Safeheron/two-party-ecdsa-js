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
const dist_1 = require("@safeheron/crypto-commitment/dist");
const elliptic = require("elliptic");
const crypto_zkp_1 = require("@safeheron/crypto-zkp");
const message1_1 = require("./message1");
const message2_1 = require("./message2");
const message3_1 = require("./message3");
const message4_1 = require("./message4");
const keyGen_1 = require("../keyGen");
const Secp256k1 = new elliptic.ec('secp256k1');
const QSqr = Secp256k1.n.mul(Secp256k1.n);
class P2Context {
    constructor(keyShare2, m, k2, R2, proof_R2, rho, r_tilde) {
        this.keyShare2 = keyShare2;
        this.m = m;
        this.k2 = k2;
        this.k2Inv = k2.invm(Secp256k1.n);
        this.R2 = R2;
        this.proof_R2 = proof_R2;
        this.rho = rho;
        this.r_tilde = r_tilde;
        this.expectedStep = 1;
    }
    static createContext(keyShare2Json, m) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyShare2 = keyGen_1.KeyShare2.fromJsonObject(JSON.parse(keyShare2Json));
            // Sample k2 \in (0, 2^255]
            let k2 = yield crypto_rand_1.Rand.randomBNLt(Secp256k1.n);
            while (k2.eqn(new BN(0))) {
                k2 = yield crypto_rand_1.Rand.randomBN(32);
            }
            // R2 = k2 * G
            let R2 = Secp256k1.g.mul(k2);
            // Schnorr proof of R2
            let proof_R2 = yield crypto_zkp_1.Secp256k1SchnorrProof.prove(k2);
            // Sample rho \in Z_{q^2}
            // Sample r_tilde \in Z_N*, which means gcd(r_tidle, N) = 1
            let rho = yield crypto_rand_1.Rand.randomBNLt(QSqr);
            let r_tilde = yield crypto_rand_1.Rand.randomBNLtCoPrime(Secp256k1.n);
            return new P2Context(keyShare2, m, k2, R2, proof_R2, rho, r_tilde);
        });
    }
    step1(message1Bytes) {
        if (this.expectedStep != 1)
            throw "The expected step must be 1 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message1 = message1_1.Message1.fromProtobuf(message1Bytes);
        this.message2 = new message2_1.Message2(this.proof_R2);
        return this.message2.toProtobuf();
    }
    step2(message3Bytes) {
        if (this.expectedStep != 2)
            throw "The expected step must be 2 but not " + this.expectedStep;
        this.expectedStep = this.expectedStep + 1;
        this.message3 = message3_1.Message3.fromProtobuf(message3Bytes);
        // Verify the Schnorr proof
        let R1 = this.message3.proof_R1.pk;
        let commitment_R1 = dist_1.HashCommitment.createComWithBlindFromCurvePoint(R1, this.message3.blind);
        if (!commitment_R1.eq(this.message1.commitment_R1)) {
            throw "Failed on commitment of R1 !";
        }
        if (!this.message3.proof_R1.verify()) {
            throw "Failed on schnorr proof on R1 !";
        }
        // Calculate R = (k1 * k2) * G = k2 * R1
        this.R = R1.mul(this.k2);
        // r = R.x mod q
        const r = this.R.getX().mod(Secp256k1.n);
        // Calculate k2^-1 * m mod q
        const k2InvMulM = this.k2Inv.mul(this.m).mod(Secp256k1.n);
        // Enc(k2^-1 * m mod q)
        const c0 = this.keyShare2.pailPubKey.encryptWithR(k2InvMulM, this.r_tilde);
        // rho * q
        const rhoMulQ = this.rho.mul(Secp256k1.n);
        // c1 = Enc(k2^-1 * m mod q + rho * q)
        const c1 = this.keyShare2.pailPubKey.homomorphicAddPlain(c0, rhoMulQ);
        // v = k2^-1 * r * x2 mod q
        const v = this.k2Inv.mul(r).mul(this.keyShare2.x2).mod(Secp256k1.n);
        // c2 = Enc((k2^-1 * r * x2 mod q) * x1)
        const c2 = this.keyShare2.pailPubKey.homomorphicMulPlain(this.keyShare2.cypher_x1, v);
        // c3 = Enc((k2^-1 * r * x2 mod q) * x1 + k2^-1 * m mod q + rho * q)
        const c3 = this.keyShare2.pailPubKey.homomorphicAdd(c1, c2);
        this.message4 = new message4_1.Message4(c3);
        return this.message4.toProtobuf();
    }
}
exports.P2Context = P2Context;
//# sourceMappingURL=P2Context.js.map