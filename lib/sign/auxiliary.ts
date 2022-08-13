'use strict'
import * as assert from "assert"
import * as elliptic from "elliptic"
const Secp256k1 = new elliptic.ec('secp256k1')

function recoverPubKey(msg, r, s, j) {
    assert((3 & j) === j, 'The recovery param is more than two bits');

    var n = Secp256k1.n;
    var e = msg;

    // A set LSB signifies that the y-coordinate is odd
    var isYOdd = j & 1;
    var isSecondKey = j >> 1;
    if (r.cmp(Secp256k1.curve.p.umod(Secp256k1.n)) >= 0 && isSecondKey)
        throw 'Unable to find sencond key candinate'

    // 1.1. Let x = r + jn.
    let x = undefined
    if (isSecondKey)
        x = Secp256k1.curve.pointFromX(r.add(Secp256k1.n), isYOdd);
    else
        x = Secp256k1.curve.pointFromX(r, isYOdd);

    var rInv = r.invm(n);
    var s1 = n.sub(e).mul(rInv).umod(n);
    var s2 = s.mul(rInv).umod(n);

    // 1.6.1 Compute Q = r^-1 (sR -  eG)
    //               Q = r^-1 (sR + -eG)
    return Secp256k1.g.mulAdd(s1, x, s2);
}

function verifySig(message_to_sign, r, s, v, pub) {
    let pub0 = recoverPubKey(message_to_sign, r.umod(Secp256k1.n), s.umod(Secp256k1.n), v)
    return pub0.eq(pub)
}

export {recoverPubKey, verifySig}