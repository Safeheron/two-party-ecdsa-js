'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicJsonObject = void 0;
const assert = require("assert");
const BN = require("bn.js");
const crypto_paillier_1 = require("@safeheron/crypto-paillier");
const crypto_zkp_1 = require("@safeheron/crypto-zkp");
const elliptic = require("elliptic");
const Secp256k1 = new elliptic.ec('secp256k1');
const P256 = new elliptic.ec('p256');
const Ed25519 = new elliptic.eddsa('ed25519');
var BasicJsonObject;
(function (BasicJsonObject) {
    function fromCurvePoint(point, curveName) {
        assert(curveName.toLowerCase() === 'secp256k1' ||
            curveName.toLowerCase() === 'p256' ||
            curveName.toLowerCase() === 'ed25519');
        return {
            curve: curveName,
            x: point.getX().toString(16),
            y: point.getY().toString(16)
        };
    }
    BasicJsonObject.fromCurvePoint = fromCurvePoint;
    function toCurvePoint(obj) {
        if (obj.curve.toLowerCase() === 'secp256k1') {
            return Secp256k1.curve.pointFromJSON([new BN(obj.x, 16), new BN(obj.y, 16)]);
        }
        else if (obj.curve.toLowerCase() === 'p256') {
            return P256.curve.pointFromJSON([new BN(obj.x, 16), new BN(obj.y, 16)]);
        }
        else if (obj.curve.toLowerCase() === 'ed25519') {
            return Ed25519.curve.pointFromJSON([new BN(obj.x, 16), new BN(obj.y, 16)]);
        }
        else {
            assert(false, 'only support elliptic curve "secp256k1" and "p256".');
        }
    }
    BasicJsonObject.toCurvePoint = toCurvePoint;
    function fromSecp256k1SchnorrProof(schnorrProof) {
        const curve = 'secp256k1';
        return {
            pk: fromCurvePoint(schnorrProof.pk, curve),
            g_r: fromCurvePoint(schnorrProof.g_r, curve),
            res: schnorrProof.res.toString(16)
        };
    }
    BasicJsonObject.fromSecp256k1SchnorrProof = fromSecp256k1SchnorrProof;
    function toSecp256k1SchnorrProof(obj) {
        return new crypto_zkp_1.Secp256k1SchnorrProof(toCurvePoint(obj.pk), toCurvePoint(obj.g_r), new BN(obj.res, 16));
    }
    BasicJsonObject.toSecp256k1SchnorrProof = toSecp256k1SchnorrProof;
    function fromKGD_Point(kgd_point) {
        return {
            point: {
                curve: "secp256k1",
                x: kgd_point[0].getX().toString(16),
                y: kgd_point[0].getY().toString(16)
            },
            blindFactor: kgd_point[1].toString(16)
        };
    }
    BasicJsonObject.fromKGD_Point = fromKGD_Point;
    function toKGD_Point(obj) {
        return [
            Secp256k1.curve.pointFromJSON([new BN(obj.point.x, 16), new BN(obj.point.y, 16)]),
            new BN(obj.blindFactor, 16)
        ];
    }
    BasicJsonObject.toKGD_Point = toKGD_Point;
    function fromPailPriv(pailPriv) {
        return {
            lambda: pailPriv.lambda.toString(16),
            mu: pailPriv.mu.toString(16),
            n: pailPriv.n.toString(16),
            p: pailPriv.p.toString(16),
            q: pailPriv.q.toString(16),
            pSqr: pailPriv.pSqr.toString(16),
            qSqr: pailPriv.qSqr.toString(16),
            pMinus1: pailPriv.pMinus1.toString(16),
            qMinus1: pailPriv.qMinus1.toString(16),
            hp: pailPriv.hp.toString(16),
            hq: pailPriv.hq.toString(16),
            qInvP: pailPriv.qInvP.toString(16),
            pInvQ: pailPriv.pInvQ.toString(16),
        };
    }
    BasicJsonObject.fromPailPriv = fromPailPriv;
    function toPailPriv(obj) {
        return new crypto_paillier_1.PailPrivKey(new BN(obj.lambda, 16), new BN(obj.mu, 16), new BN(obj.n, 16), new BN(obj.p, 16), new BN(obj.q, 16), new BN(obj.pSqr, 16), new BN(obj.qSqr, 16), new BN(obj.pMinus1, 16), new BN(obj.qMinus1, 16), new BN(obj.hp, 16), new BN(obj.hq, 16), new BN(obj.qInvP, 16), new BN(obj.pInvQ, 16));
    }
    BasicJsonObject.toPailPriv = toPailPriv;
    function fromPailPub(pailPub) {
        return {
            n: pailPub.n.toString(16),
            g: pailPub.g.toString(16)
        };
    }
    BasicJsonObject.fromPailPub = fromPailPub;
    function toPailPub(obj) {
        return new crypto_paillier_1.PailPubKey(new BN(obj.n, 16), new BN(obj.g, 16));
    }
    BasicJsonObject.toPailPub = toPailPub;
    function fromPailProof(proof_PailN) {
        const arr = [];
        for (let yN of proof_PailN.yNArr) {
            arr.push(yN.toString(16));
        }
        return {
            yNArr: arr
        };
    }
    BasicJsonObject.fromPailProof = fromPailProof;
    function toPailProof(obj) {
        const yNArr = [];
        for (let yN of obj.yNArr) {
            yNArr.push(new BN(yN, 16));
        }
        return new crypto_zkp_1.PailProof(yNArr);
    }
    BasicJsonObject.toPailProof = toPailProof;
})(BasicJsonObject = exports.BasicJsonObject || (exports.BasicJsonObject = {}));
//# sourceMappingURL=index.js.map