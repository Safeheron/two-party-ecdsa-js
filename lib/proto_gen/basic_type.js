/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.basic_type = (function() {

    /**
     * Namespace basic_type.
     * @exports basic_type
     * @namespace
     */
    var basic_type = {};

    basic_type.CurvePoint = (function() {

        /**
         * Properties of a CurvePoint.
         * @memberof basic_type
         * @interface ICurvePoint
         * @property {string|null} [x] CurvePoint x
         * @property {string|null} [y] CurvePoint y
         * @property {string|null} [curve] CurvePoint curve
         */

        /**
         * Constructs a new CurvePoint.
         * @memberof basic_type
         * @classdesc Represents a CurvePoint.
         * @implements ICurvePoint
         * @constructor
         * @param {basic_type.ICurvePoint=} [properties] Properties to set
         */
        function CurvePoint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurvePoint x.
         * @member {string} x
         * @memberof basic_type.CurvePoint
         * @instance
         */
        CurvePoint.prototype.x = "";

        /**
         * CurvePoint y.
         * @member {string} y
         * @memberof basic_type.CurvePoint
         * @instance
         */
        CurvePoint.prototype.y = "";

        /**
         * CurvePoint curve.
         * @member {string} curve
         * @memberof basic_type.CurvePoint
         * @instance
         */
        CurvePoint.prototype.curve = "";

        /**
         * Creates a new CurvePoint instance using the specified properties.
         * @function create
         * @memberof basic_type.CurvePoint
         * @static
         * @param {basic_type.ICurvePoint=} [properties] Properties to set
         * @returns {basic_type.CurvePoint} CurvePoint instance
         */
        CurvePoint.create = function create(properties) {
            return new CurvePoint(properties);
        };

        /**
         * Encodes the specified CurvePoint message. Does not implicitly {@link basic_type.CurvePoint.verify|verify} messages.
         * @function encode
         * @memberof basic_type.CurvePoint
         * @static
         * @param {basic_type.ICurvePoint} message CurvePoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurvePoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.y);
            if (message.curve != null && Object.hasOwnProperty.call(message, "curve"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.curve);
            return writer;
        };

        /**
         * Encodes the specified CurvePoint message, length delimited. Does not implicitly {@link basic_type.CurvePoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof basic_type.CurvePoint
         * @static
         * @param {basic_type.ICurvePoint} message CurvePoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurvePoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurvePoint message from the specified reader or buffer.
         * @function decode
         * @memberof basic_type.CurvePoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {basic_type.CurvePoint} CurvePoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurvePoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.basic_type.CurvePoint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.string();
                    break;
                case 2:
                    message.y = reader.string();
                    break;
                case 3:
                    message.curve = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CurvePoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof basic_type.CurvePoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {basic_type.CurvePoint} CurvePoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurvePoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurvePoint message.
         * @function verify
         * @memberof basic_type.CurvePoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurvePoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isString(message.x))
                    return "x: string expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isString(message.y))
                    return "y: string expected";
            if (message.curve != null && message.hasOwnProperty("curve"))
                if (!$util.isString(message.curve))
                    return "curve: string expected";
            return null;
        };

        /**
         * Creates a CurvePoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof basic_type.CurvePoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {basic_type.CurvePoint} CurvePoint
         */
        CurvePoint.fromObject = function fromObject(object) {
            if (object instanceof $root.basic_type.CurvePoint)
                return object;
            var message = new $root.basic_type.CurvePoint();
            if (object.x != null)
                message.x = String(object.x);
            if (object.y != null)
                message.y = String(object.y);
            if (object.curve != null)
                message.curve = String(object.curve);
            return message;
        };

        /**
         * Creates a plain object from a CurvePoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof basic_type.CurvePoint
         * @static
         * @param {basic_type.CurvePoint} message CurvePoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurvePoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = "";
                object.y = "";
                object.curve = "";
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.curve != null && message.hasOwnProperty("curve"))
                object.curve = message.curve;
            return object;
        };

        /**
         * Converts this CurvePoint to JSON.
         * @function toJSON
         * @memberof basic_type.CurvePoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurvePoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CurvePoint;
    })();

    basic_type.PailPub = (function() {

        /**
         * Properties of a PailPub.
         * @memberof basic_type
         * @interface IPailPub
         * @property {string|null} [n] PailPub n
         * @property {string|null} [g] PailPub g
         */

        /**
         * Constructs a new PailPub.
         * @memberof basic_type
         * @classdesc Represents a PailPub.
         * @implements IPailPub
         * @constructor
         * @param {basic_type.IPailPub=} [properties] Properties to set
         */
        function PailPub(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PailPub n.
         * @member {string} n
         * @memberof basic_type.PailPub
         * @instance
         */
        PailPub.prototype.n = "";

        /**
         * PailPub g.
         * @member {string} g
         * @memberof basic_type.PailPub
         * @instance
         */
        PailPub.prototype.g = "";

        /**
         * Creates a new PailPub instance using the specified properties.
         * @function create
         * @memberof basic_type.PailPub
         * @static
         * @param {basic_type.IPailPub=} [properties] Properties to set
         * @returns {basic_type.PailPub} PailPub instance
         */
        PailPub.create = function create(properties) {
            return new PailPub(properties);
        };

        /**
         * Encodes the specified PailPub message. Does not implicitly {@link basic_type.PailPub.verify|verify} messages.
         * @function encode
         * @memberof basic_type.PailPub
         * @static
         * @param {basic_type.IPailPub} message PailPub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PailPub.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.n != null && Object.hasOwnProperty.call(message, "n"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.n);
            if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.g);
            return writer;
        };

        /**
         * Encodes the specified PailPub message, length delimited. Does not implicitly {@link basic_type.PailPub.verify|verify} messages.
         * @function encodeDelimited
         * @memberof basic_type.PailPub
         * @static
         * @param {basic_type.IPailPub} message PailPub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PailPub.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PailPub message from the specified reader or buffer.
         * @function decode
         * @memberof basic_type.PailPub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {basic_type.PailPub} PailPub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PailPub.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.basic_type.PailPub();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.n = reader.string();
                    break;
                case 2:
                    message.g = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PailPub message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof basic_type.PailPub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {basic_type.PailPub} PailPub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PailPub.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PailPub message.
         * @function verify
         * @memberof basic_type.PailPub
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PailPub.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.n != null && message.hasOwnProperty("n"))
                if (!$util.isString(message.n))
                    return "n: string expected";
            if (message.g != null && message.hasOwnProperty("g"))
                if (!$util.isString(message.g))
                    return "g: string expected";
            return null;
        };

        /**
         * Creates a PailPub message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof basic_type.PailPub
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {basic_type.PailPub} PailPub
         */
        PailPub.fromObject = function fromObject(object) {
            if (object instanceof $root.basic_type.PailPub)
                return object;
            var message = new $root.basic_type.PailPub();
            if (object.n != null)
                message.n = String(object.n);
            if (object.g != null)
                message.g = String(object.g);
            return message;
        };

        /**
         * Creates a plain object from a PailPub message. Also converts values to other types if specified.
         * @function toObject
         * @memberof basic_type.PailPub
         * @static
         * @param {basic_type.PailPub} message PailPub
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PailPub.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.n = "";
                object.g = "";
            }
            if (message.n != null && message.hasOwnProperty("n"))
                object.n = message.n;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = message.g;
            return object;
        };

        /**
         * Converts this PailPub to JSON.
         * @function toJSON
         * @memberof basic_type.PailPub
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PailPub.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PailPub;
    })();

    basic_type.PailPriv = (function() {

        /**
         * Properties of a PailPriv.
         * @memberof basic_type
         * @interface IPailPriv
         * @property {string|null} [n] PailPriv n
         * @property {string|null} [lambda] PailPriv lambda
         * @property {string|null} [mu] PailPriv mu
         * @property {string|null} [p] PailPriv p
         * @property {string|null} [q] PailPriv q
         * @property {string|null} [pSqr] PailPriv pSqr
         * @property {string|null} [qSqr] PailPriv qSqr
         * @property {string|null} [pMinus1] PailPriv pMinus1
         * @property {string|null} [qMinus1] PailPriv qMinus1
         * @property {string|null} [hp] PailPriv hp
         * @property {string|null} [hq] PailPriv hq
         * @property {string|null} [qInvP] PailPriv qInvP
         * @property {string|null} [pInvQ] PailPriv pInvQ
         */

        /**
         * Constructs a new PailPriv.
         * @memberof basic_type
         * @classdesc Represents a PailPriv.
         * @implements IPailPriv
         * @constructor
         * @param {basic_type.IPailPriv=} [properties] Properties to set
         */
        function PailPriv(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PailPriv n.
         * @member {string} n
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.n = "";

        /**
         * PailPriv lambda.
         * @member {string} lambda
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.lambda = "";

        /**
         * PailPriv mu.
         * @member {string} mu
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.mu = "";

        /**
         * PailPriv p.
         * @member {string} p
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.p = "";

        /**
         * PailPriv q.
         * @member {string} q
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.q = "";

        /**
         * PailPriv pSqr.
         * @member {string} pSqr
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.pSqr = "";

        /**
         * PailPriv qSqr.
         * @member {string} qSqr
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.qSqr = "";

        /**
         * PailPriv pMinus1.
         * @member {string} pMinus1
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.pMinus1 = "";

        /**
         * PailPriv qMinus1.
         * @member {string} qMinus1
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.qMinus1 = "";

        /**
         * PailPriv hp.
         * @member {string} hp
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.hp = "";

        /**
         * PailPriv hq.
         * @member {string} hq
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.hq = "";

        /**
         * PailPriv qInvP.
         * @member {string} qInvP
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.qInvP = "";

        /**
         * PailPriv pInvQ.
         * @member {string} pInvQ
         * @memberof basic_type.PailPriv
         * @instance
         */
        PailPriv.prototype.pInvQ = "";

        /**
         * Creates a new PailPriv instance using the specified properties.
         * @function create
         * @memberof basic_type.PailPriv
         * @static
         * @param {basic_type.IPailPriv=} [properties] Properties to set
         * @returns {basic_type.PailPriv} PailPriv instance
         */
        PailPriv.create = function create(properties) {
            return new PailPriv(properties);
        };

        /**
         * Encodes the specified PailPriv message. Does not implicitly {@link basic_type.PailPriv.verify|verify} messages.
         * @function encode
         * @memberof basic_type.PailPriv
         * @static
         * @param {basic_type.IPailPriv} message PailPriv message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PailPriv.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.n != null && Object.hasOwnProperty.call(message, "n"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.n);
            if (message.lambda != null && Object.hasOwnProperty.call(message, "lambda"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lambda);
            if (message.mu != null && Object.hasOwnProperty.call(message, "mu"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.mu);
            if (message.p != null && Object.hasOwnProperty.call(message, "p"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.p);
            if (message.q != null && Object.hasOwnProperty.call(message, "q"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.q);
            if (message.pSqr != null && Object.hasOwnProperty.call(message, "pSqr"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.pSqr);
            if (message.qSqr != null && Object.hasOwnProperty.call(message, "qSqr"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.qSqr);
            if (message.pMinus1 != null && Object.hasOwnProperty.call(message, "pMinus1"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.pMinus1);
            if (message.qMinus1 != null && Object.hasOwnProperty.call(message, "qMinus1"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.qMinus1);
            if (message.hp != null && Object.hasOwnProperty.call(message, "hp"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.hp);
            if (message.hq != null && Object.hasOwnProperty.call(message, "hq"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.hq);
            if (message.qInvP != null && Object.hasOwnProperty.call(message, "qInvP"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.qInvP);
            if (message.pInvQ != null && Object.hasOwnProperty.call(message, "pInvQ"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.pInvQ);
            return writer;
        };

        /**
         * Encodes the specified PailPriv message, length delimited. Does not implicitly {@link basic_type.PailPriv.verify|verify} messages.
         * @function encodeDelimited
         * @memberof basic_type.PailPriv
         * @static
         * @param {basic_type.IPailPriv} message PailPriv message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PailPriv.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PailPriv message from the specified reader or buffer.
         * @function decode
         * @memberof basic_type.PailPriv
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {basic_type.PailPriv} PailPriv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PailPriv.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.basic_type.PailPriv();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.n = reader.string();
                    break;
                case 2:
                    message.lambda = reader.string();
                    break;
                case 3:
                    message.mu = reader.string();
                    break;
                case 4:
                    message.p = reader.string();
                    break;
                case 5:
                    message.q = reader.string();
                    break;
                case 6:
                    message.pSqr = reader.string();
                    break;
                case 7:
                    message.qSqr = reader.string();
                    break;
                case 8:
                    message.pMinus1 = reader.string();
                    break;
                case 9:
                    message.qMinus1 = reader.string();
                    break;
                case 10:
                    message.hp = reader.string();
                    break;
                case 11:
                    message.hq = reader.string();
                    break;
                case 12:
                    message.qInvP = reader.string();
                    break;
                case 13:
                    message.pInvQ = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PailPriv message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof basic_type.PailPriv
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {basic_type.PailPriv} PailPriv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PailPriv.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PailPriv message.
         * @function verify
         * @memberof basic_type.PailPriv
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PailPriv.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.n != null && message.hasOwnProperty("n"))
                if (!$util.isString(message.n))
                    return "n: string expected";
            if (message.lambda != null && message.hasOwnProperty("lambda"))
                if (!$util.isString(message.lambda))
                    return "lambda: string expected";
            if (message.mu != null && message.hasOwnProperty("mu"))
                if (!$util.isString(message.mu))
                    return "mu: string expected";
            if (message.p != null && message.hasOwnProperty("p"))
                if (!$util.isString(message.p))
                    return "p: string expected";
            if (message.q != null && message.hasOwnProperty("q"))
                if (!$util.isString(message.q))
                    return "q: string expected";
            if (message.pSqr != null && message.hasOwnProperty("pSqr"))
                if (!$util.isString(message.pSqr))
                    return "pSqr: string expected";
            if (message.qSqr != null && message.hasOwnProperty("qSqr"))
                if (!$util.isString(message.qSqr))
                    return "qSqr: string expected";
            if (message.pMinus1 != null && message.hasOwnProperty("pMinus1"))
                if (!$util.isString(message.pMinus1))
                    return "pMinus1: string expected";
            if (message.qMinus1 != null && message.hasOwnProperty("qMinus1"))
                if (!$util.isString(message.qMinus1))
                    return "qMinus1: string expected";
            if (message.hp != null && message.hasOwnProperty("hp"))
                if (!$util.isString(message.hp))
                    return "hp: string expected";
            if (message.hq != null && message.hasOwnProperty("hq"))
                if (!$util.isString(message.hq))
                    return "hq: string expected";
            if (message.qInvP != null && message.hasOwnProperty("qInvP"))
                if (!$util.isString(message.qInvP))
                    return "qInvP: string expected";
            if (message.pInvQ != null && message.hasOwnProperty("pInvQ"))
                if (!$util.isString(message.pInvQ))
                    return "pInvQ: string expected";
            return null;
        };

        /**
         * Creates a PailPriv message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof basic_type.PailPriv
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {basic_type.PailPriv} PailPriv
         */
        PailPriv.fromObject = function fromObject(object) {
            if (object instanceof $root.basic_type.PailPriv)
                return object;
            var message = new $root.basic_type.PailPriv();
            if (object.n != null)
                message.n = String(object.n);
            if (object.lambda != null)
                message.lambda = String(object.lambda);
            if (object.mu != null)
                message.mu = String(object.mu);
            if (object.p != null)
                message.p = String(object.p);
            if (object.q != null)
                message.q = String(object.q);
            if (object.pSqr != null)
                message.pSqr = String(object.pSqr);
            if (object.qSqr != null)
                message.qSqr = String(object.qSqr);
            if (object.pMinus1 != null)
                message.pMinus1 = String(object.pMinus1);
            if (object.qMinus1 != null)
                message.qMinus1 = String(object.qMinus1);
            if (object.hp != null)
                message.hp = String(object.hp);
            if (object.hq != null)
                message.hq = String(object.hq);
            if (object.qInvP != null)
                message.qInvP = String(object.qInvP);
            if (object.pInvQ != null)
                message.pInvQ = String(object.pInvQ);
            return message;
        };

        /**
         * Creates a plain object from a PailPriv message. Also converts values to other types if specified.
         * @function toObject
         * @memberof basic_type.PailPriv
         * @static
         * @param {basic_type.PailPriv} message PailPriv
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PailPriv.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.n = "";
                object.lambda = "";
                object.mu = "";
                object.p = "";
                object.q = "";
                object.pSqr = "";
                object.qSqr = "";
                object.pMinus1 = "";
                object.qMinus1 = "";
                object.hp = "";
                object.hq = "";
                object.qInvP = "";
                object.pInvQ = "";
            }
            if (message.n != null && message.hasOwnProperty("n"))
                object.n = message.n;
            if (message.lambda != null && message.hasOwnProperty("lambda"))
                object.lambda = message.lambda;
            if (message.mu != null && message.hasOwnProperty("mu"))
                object.mu = message.mu;
            if (message.p != null && message.hasOwnProperty("p"))
                object.p = message.p;
            if (message.q != null && message.hasOwnProperty("q"))
                object.q = message.q;
            if (message.pSqr != null && message.hasOwnProperty("pSqr"))
                object.pSqr = message.pSqr;
            if (message.qSqr != null && message.hasOwnProperty("qSqr"))
                object.qSqr = message.qSqr;
            if (message.pMinus1 != null && message.hasOwnProperty("pMinus1"))
                object.pMinus1 = message.pMinus1;
            if (message.qMinus1 != null && message.hasOwnProperty("qMinus1"))
                object.qMinus1 = message.qMinus1;
            if (message.hp != null && message.hasOwnProperty("hp"))
                object.hp = message.hp;
            if (message.hq != null && message.hasOwnProperty("hq"))
                object.hq = message.hq;
            if (message.qInvP != null && message.hasOwnProperty("qInvP"))
                object.qInvP = message.qInvP;
            if (message.pInvQ != null && message.hasOwnProperty("pInvQ"))
                object.pInvQ = message.pInvQ;
            return object;
        };

        /**
         * Converts this PailPriv to JSON.
         * @function toJSON
         * @memberof basic_type.PailPriv
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PailPriv.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PailPriv;
    })();

    basic_type.SchnorrProof = (function() {

        /**
         * Properties of a SchnorrProof.
         * @memberof basic_type
         * @interface ISchnorrProof
         * @property {basic_type.ICurvePoint|null} [pk] SchnorrProof pk
         * @property {basic_type.ICurvePoint|null} [g_r] SchnorrProof g_r
         * @property {string|null} [res] SchnorrProof res
         */

        /**
         * Constructs a new SchnorrProof.
         * @memberof basic_type
         * @classdesc Represents a SchnorrProof.
         * @implements ISchnorrProof
         * @constructor
         * @param {basic_type.ISchnorrProof=} [properties] Properties to set
         */
        function SchnorrProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SchnorrProof pk.
         * @member {basic_type.ICurvePoint|null|undefined} pk
         * @memberof basic_type.SchnorrProof
         * @instance
         */
        SchnorrProof.prototype.pk = null;

        /**
         * SchnorrProof g_r.
         * @member {basic_type.ICurvePoint|null|undefined} g_r
         * @memberof basic_type.SchnorrProof
         * @instance
         */
        SchnorrProof.prototype.g_r = null;

        /**
         * SchnorrProof res.
         * @member {string} res
         * @memberof basic_type.SchnorrProof
         * @instance
         */
        SchnorrProof.prototype.res = "";

        /**
         * Creates a new SchnorrProof instance using the specified properties.
         * @function create
         * @memberof basic_type.SchnorrProof
         * @static
         * @param {basic_type.ISchnorrProof=} [properties] Properties to set
         * @returns {basic_type.SchnorrProof} SchnorrProof instance
         */
        SchnorrProof.create = function create(properties) {
            return new SchnorrProof(properties);
        };

        /**
         * Encodes the specified SchnorrProof message. Does not implicitly {@link basic_type.SchnorrProof.verify|verify} messages.
         * @function encode
         * @memberof basic_type.SchnorrProof
         * @static
         * @param {basic_type.ISchnorrProof} message SchnorrProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SchnorrProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pk != null && Object.hasOwnProperty.call(message, "pk"))
                $root.basic_type.CurvePoint.encode(message.pk, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.g_r != null && Object.hasOwnProperty.call(message, "g_r"))
                $root.basic_type.CurvePoint.encode(message.g_r, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.res != null && Object.hasOwnProperty.call(message, "res"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.res);
            return writer;
        };

        /**
         * Encodes the specified SchnorrProof message, length delimited. Does not implicitly {@link basic_type.SchnorrProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof basic_type.SchnorrProof
         * @static
         * @param {basic_type.ISchnorrProof} message SchnorrProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SchnorrProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SchnorrProof message from the specified reader or buffer.
         * @function decode
         * @memberof basic_type.SchnorrProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {basic_type.SchnorrProof} SchnorrProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SchnorrProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.basic_type.SchnorrProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pk = $root.basic_type.CurvePoint.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.g_r = $root.basic_type.CurvePoint.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.res = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SchnorrProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof basic_type.SchnorrProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {basic_type.SchnorrProof} SchnorrProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SchnorrProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SchnorrProof message.
         * @function verify
         * @memberof basic_type.SchnorrProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SchnorrProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pk != null && message.hasOwnProperty("pk")) {
                var error = $root.basic_type.CurvePoint.verify(message.pk);
                if (error)
                    return "pk." + error;
            }
            if (message.g_r != null && message.hasOwnProperty("g_r")) {
                var error = $root.basic_type.CurvePoint.verify(message.g_r);
                if (error)
                    return "g_r." + error;
            }
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isString(message.res))
                    return "res: string expected";
            return null;
        };

        /**
         * Creates a SchnorrProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof basic_type.SchnorrProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {basic_type.SchnorrProof} SchnorrProof
         */
        SchnorrProof.fromObject = function fromObject(object) {
            if (object instanceof $root.basic_type.SchnorrProof)
                return object;
            var message = new $root.basic_type.SchnorrProof();
            if (object.pk != null) {
                if (typeof object.pk !== "object")
                    throw TypeError(".basic_type.SchnorrProof.pk: object expected");
                message.pk = $root.basic_type.CurvePoint.fromObject(object.pk);
            }
            if (object.g_r != null) {
                if (typeof object.g_r !== "object")
                    throw TypeError(".basic_type.SchnorrProof.g_r: object expected");
                message.g_r = $root.basic_type.CurvePoint.fromObject(object.g_r);
            }
            if (object.res != null)
                message.res = String(object.res);
            return message;
        };

        /**
         * Creates a plain object from a SchnorrProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof basic_type.SchnorrProof
         * @static
         * @param {basic_type.SchnorrProof} message SchnorrProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SchnorrProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pk = null;
                object.g_r = null;
                object.res = "";
            }
            if (message.pk != null && message.hasOwnProperty("pk"))
                object.pk = $root.basic_type.CurvePoint.toObject(message.pk, options);
            if (message.g_r != null && message.hasOwnProperty("g_r"))
                object.g_r = $root.basic_type.CurvePoint.toObject(message.g_r, options);
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            return object;
        };

        /**
         * Converts this SchnorrProof to JSON.
         * @function toJSON
         * @memberof basic_type.SchnorrProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SchnorrProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SchnorrProof;
    })();

    basic_type.KGD_Point = (function() {

        /**
         * Properties of a KGD_Point.
         * @memberof basic_type
         * @interface IKGD_Point
         * @property {basic_type.ICurvePoint|null} [point] KGD_Point point
         * @property {string|null} [blindFactor] KGD_Point blindFactor
         */

        /**
         * Constructs a new KGD_Point.
         * @memberof basic_type
         * @classdesc Represents a KGD_Point.
         * @implements IKGD_Point
         * @constructor
         * @param {basic_type.IKGD_Point=} [properties] Properties to set
         */
        function KGD_Point(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KGD_Point point.
         * @member {basic_type.ICurvePoint|null|undefined} point
         * @memberof basic_type.KGD_Point
         * @instance
         */
        KGD_Point.prototype.point = null;

        /**
         * KGD_Point blindFactor.
         * @member {string} blindFactor
         * @memberof basic_type.KGD_Point
         * @instance
         */
        KGD_Point.prototype.blindFactor = "";

        /**
         * Creates a new KGD_Point instance using the specified properties.
         * @function create
         * @memberof basic_type.KGD_Point
         * @static
         * @param {basic_type.IKGD_Point=} [properties] Properties to set
         * @returns {basic_type.KGD_Point} KGD_Point instance
         */
        KGD_Point.create = function create(properties) {
            return new KGD_Point(properties);
        };

        /**
         * Encodes the specified KGD_Point message. Does not implicitly {@link basic_type.KGD_Point.verify|verify} messages.
         * @function encode
         * @memberof basic_type.KGD_Point
         * @static
         * @param {basic_type.IKGD_Point} message KGD_Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KGD_Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                $root.basic_type.CurvePoint.encode(message.point, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.blindFactor != null && Object.hasOwnProperty.call(message, "blindFactor"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.blindFactor);
            return writer;
        };

        /**
         * Encodes the specified KGD_Point message, length delimited. Does not implicitly {@link basic_type.KGD_Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof basic_type.KGD_Point
         * @static
         * @param {basic_type.IKGD_Point} message KGD_Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KGD_Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KGD_Point message from the specified reader or buffer.
         * @function decode
         * @memberof basic_type.KGD_Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {basic_type.KGD_Point} KGD_Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KGD_Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.basic_type.KGD_Point();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.point = $root.basic_type.CurvePoint.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blindFactor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KGD_Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof basic_type.KGD_Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {basic_type.KGD_Point} KGD_Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KGD_Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KGD_Point message.
         * @function verify
         * @memberof basic_type.KGD_Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KGD_Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.point != null && message.hasOwnProperty("point")) {
                var error = $root.basic_type.CurvePoint.verify(message.point);
                if (error)
                    return "point." + error;
            }
            if (message.blindFactor != null && message.hasOwnProperty("blindFactor"))
                if (!$util.isString(message.blindFactor))
                    return "blindFactor: string expected";
            return null;
        };

        /**
         * Creates a KGD_Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof basic_type.KGD_Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {basic_type.KGD_Point} KGD_Point
         */
        KGD_Point.fromObject = function fromObject(object) {
            if (object instanceof $root.basic_type.KGD_Point)
                return object;
            var message = new $root.basic_type.KGD_Point();
            if (object.point != null) {
                if (typeof object.point !== "object")
                    throw TypeError(".basic_type.KGD_Point.point: object expected");
                message.point = $root.basic_type.CurvePoint.fromObject(object.point);
            }
            if (object.blindFactor != null)
                message.blindFactor = String(object.blindFactor);
            return message;
        };

        /**
         * Creates a plain object from a KGD_Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof basic_type.KGD_Point
         * @static
         * @param {basic_type.KGD_Point} message KGD_Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KGD_Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.point = null;
                object.blindFactor = "";
            }
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = $root.basic_type.CurvePoint.toObject(message.point, options);
            if (message.blindFactor != null && message.hasOwnProperty("blindFactor"))
                object.blindFactor = message.blindFactor;
            return object;
        };

        /**
         * Converts this KGD_Point to JSON.
         * @function toJSON
         * @memberof basic_type.KGD_Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KGD_Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KGD_Point;
    })();

    basic_type.PailProof = (function() {

        /**
         * Properties of a PailProof.
         * @memberof basic_type
         * @interface IPailProof
         * @property {Array.<string>|null} [yNArr] PailProof yNArr
         */

        /**
         * Constructs a new PailProof.
         * @memberof basic_type
         * @classdesc Represents a PailProof.
         * @implements IPailProof
         * @constructor
         * @param {basic_type.IPailProof=} [properties] Properties to set
         */
        function PailProof(properties) {
            this.yNArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PailProof yNArr.
         * @member {Array.<string>} yNArr
         * @memberof basic_type.PailProof
         * @instance
         */
        PailProof.prototype.yNArr = $util.emptyArray;

        /**
         * Creates a new PailProof instance using the specified properties.
         * @function create
         * @memberof basic_type.PailProof
         * @static
         * @param {basic_type.IPailProof=} [properties] Properties to set
         * @returns {basic_type.PailProof} PailProof instance
         */
        PailProof.create = function create(properties) {
            return new PailProof(properties);
        };

        /**
         * Encodes the specified PailProof message. Does not implicitly {@link basic_type.PailProof.verify|verify} messages.
         * @function encode
         * @memberof basic_type.PailProof
         * @static
         * @param {basic_type.IPailProof} message PailProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PailProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.yNArr != null && message.yNArr.length)
                for (var i = 0; i < message.yNArr.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.yNArr[i]);
            return writer;
        };

        /**
         * Encodes the specified PailProof message, length delimited. Does not implicitly {@link basic_type.PailProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof basic_type.PailProof
         * @static
         * @param {basic_type.IPailProof} message PailProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PailProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PailProof message from the specified reader or buffer.
         * @function decode
         * @memberof basic_type.PailProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {basic_type.PailProof} PailProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PailProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.basic_type.PailProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.yNArr && message.yNArr.length))
                        message.yNArr = [];
                    message.yNArr.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PailProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof basic_type.PailProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {basic_type.PailProof} PailProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PailProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PailProof message.
         * @function verify
         * @memberof basic_type.PailProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PailProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.yNArr != null && message.hasOwnProperty("yNArr")) {
                if (!Array.isArray(message.yNArr))
                    return "yNArr: array expected";
                for (var i = 0; i < message.yNArr.length; ++i)
                    if (!$util.isString(message.yNArr[i]))
                        return "yNArr: string[] expected";
            }
            return null;
        };

        /**
         * Creates a PailProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof basic_type.PailProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {basic_type.PailProof} PailProof
         */
        PailProof.fromObject = function fromObject(object) {
            if (object instanceof $root.basic_type.PailProof)
                return object;
            var message = new $root.basic_type.PailProof();
            if (object.yNArr) {
                if (!Array.isArray(object.yNArr))
                    throw TypeError(".basic_type.PailProof.yNArr: array expected");
                message.yNArr = [];
                for (var i = 0; i < object.yNArr.length; ++i)
                    message.yNArr[i] = String(object.yNArr[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PailProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof basic_type.PailProof
         * @static
         * @param {basic_type.PailProof} message PailProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PailProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.yNArr = [];
            if (message.yNArr && message.yNArr.length) {
                object.yNArr = [];
                for (var j = 0; j < message.yNArr.length; ++j)
                    object.yNArr[j] = message.yNArr[j];
            }
            return object;
        };

        /**
         * Converts this PailProof to JSON.
         * @function toJSON
         * @memberof basic_type.PailProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PailProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PailProof;
    })();

    return basic_type;
})();

module.exports = $root;
