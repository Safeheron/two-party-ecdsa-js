declare function recoverPubKey(msg: any, r: any, s: any, j: any): any;
declare function verifySig(message_to_sign: any, r: any, s: any, v: any, pub: any): any;
export { recoverPubKey, verifySig };
