import * as $protobuf from "protobufjs";
/** Namespace basic_type. */
export namespace basic_type {

    /** Properties of a CurvePoint. */
    interface ICurvePoint {

        /** CurvePoint x */
        x?: (string|null);

        /** CurvePoint y */
        y?: (string|null);

        /** CurvePoint curve */
        curve?: (string|null);
    }

    /** Represents a CurvePoint. */
    class CurvePoint implements ICurvePoint {

        /**
         * Constructs a new CurvePoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: basic_type.ICurvePoint);

        /** CurvePoint x. */
        public x: string;

        /** CurvePoint y. */
        public y: string;

        /** CurvePoint curve. */
        public curve: string;

        /**
         * Creates a new CurvePoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurvePoint instance
         */
        public static create(properties?: basic_type.ICurvePoint): basic_type.CurvePoint;

        /**
         * Encodes the specified CurvePoint message. Does not implicitly {@link basic_type.CurvePoint.verify|verify} messages.
         * @param message CurvePoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: basic_type.ICurvePoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurvePoint message, length delimited. Does not implicitly {@link basic_type.CurvePoint.verify|verify} messages.
         * @param message CurvePoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: basic_type.ICurvePoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurvePoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurvePoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): basic_type.CurvePoint;

        /**
         * Decodes a CurvePoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurvePoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): basic_type.CurvePoint;

        /**
         * Verifies a CurvePoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CurvePoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CurvePoint
         */
        public static fromObject(object: { [k: string]: any }): basic_type.CurvePoint;

        /**
         * Creates a plain object from a CurvePoint message. Also converts values to other types if specified.
         * @param message CurvePoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: basic_type.CurvePoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurvePoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PailPub. */
    interface IPailPub {

        /** PailPub n */
        n?: (string|null);

        /** PailPub g */
        g?: (string|null);
    }

    /** Represents a PailPub. */
    class PailPub implements IPailPub {

        /**
         * Constructs a new PailPub.
         * @param [properties] Properties to set
         */
        constructor(properties?: basic_type.IPailPub);

        /** PailPub n. */
        public n: string;

        /** PailPub g. */
        public g: string;

        /**
         * Creates a new PailPub instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PailPub instance
         */
        public static create(properties?: basic_type.IPailPub): basic_type.PailPub;

        /**
         * Encodes the specified PailPub message. Does not implicitly {@link basic_type.PailPub.verify|verify} messages.
         * @param message PailPub message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: basic_type.IPailPub, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PailPub message, length delimited. Does not implicitly {@link basic_type.PailPub.verify|verify} messages.
         * @param message PailPub message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: basic_type.IPailPub, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PailPub message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PailPub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): basic_type.PailPub;

        /**
         * Decodes a PailPub message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PailPub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): basic_type.PailPub;

        /**
         * Verifies a PailPub message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PailPub message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PailPub
         */
        public static fromObject(object: { [k: string]: any }): basic_type.PailPub;

        /**
         * Creates a plain object from a PailPub message. Also converts values to other types if specified.
         * @param message PailPub
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: basic_type.PailPub, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PailPub to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PailPriv. */
    interface IPailPriv {

        /** PailPriv n */
        n?: (string|null);

        /** PailPriv lambda */
        lambda?: (string|null);

        /** PailPriv mu */
        mu?: (string|null);

        /** PailPriv p */
        p?: (string|null);

        /** PailPriv q */
        q?: (string|null);

        /** PailPriv pSqr */
        pSqr?: (string|null);

        /** PailPriv qSqr */
        qSqr?: (string|null);

        /** PailPriv pMinus1 */
        pMinus1?: (string|null);

        /** PailPriv qMinus1 */
        qMinus1?: (string|null);

        /** PailPriv hp */
        hp?: (string|null);

        /** PailPriv hq */
        hq?: (string|null);

        /** PailPriv qInvP */
        qInvP?: (string|null);

        /** PailPriv pInvQ */
        pInvQ?: (string|null);
    }

    /** Represents a PailPriv. */
    class PailPriv implements IPailPriv {

        /**
         * Constructs a new PailPriv.
         * @param [properties] Properties to set
         */
        constructor(properties?: basic_type.IPailPriv);

        /** PailPriv n. */
        public n: string;

        /** PailPriv lambda. */
        public lambda: string;

        /** PailPriv mu. */
        public mu: string;

        /** PailPriv p. */
        public p: string;

        /** PailPriv q. */
        public q: string;

        /** PailPriv pSqr. */
        public pSqr: string;

        /** PailPriv qSqr. */
        public qSqr: string;

        /** PailPriv pMinus1. */
        public pMinus1: string;

        /** PailPriv qMinus1. */
        public qMinus1: string;

        /** PailPriv hp. */
        public hp: string;

        /** PailPriv hq. */
        public hq: string;

        /** PailPriv qInvP. */
        public qInvP: string;

        /** PailPriv pInvQ. */
        public pInvQ: string;

        /**
         * Creates a new PailPriv instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PailPriv instance
         */
        public static create(properties?: basic_type.IPailPriv): basic_type.PailPriv;

        /**
         * Encodes the specified PailPriv message. Does not implicitly {@link basic_type.PailPriv.verify|verify} messages.
         * @param message PailPriv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: basic_type.IPailPriv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PailPriv message, length delimited. Does not implicitly {@link basic_type.PailPriv.verify|verify} messages.
         * @param message PailPriv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: basic_type.IPailPriv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PailPriv message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PailPriv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): basic_type.PailPriv;

        /**
         * Decodes a PailPriv message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PailPriv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): basic_type.PailPriv;

        /**
         * Verifies a PailPriv message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PailPriv message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PailPriv
         */
        public static fromObject(object: { [k: string]: any }): basic_type.PailPriv;

        /**
         * Creates a plain object from a PailPriv message. Also converts values to other types if specified.
         * @param message PailPriv
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: basic_type.PailPriv, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PailPriv to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SchnorrProof. */
    interface ISchnorrProof {

        /** SchnorrProof pk */
        pk?: (basic_type.ICurvePoint|null);

        /** SchnorrProof g_r */
        g_r?: (basic_type.ICurvePoint|null);

        /** SchnorrProof res */
        res?: (string|null);
    }

    /** Represents a SchnorrProof. */
    class SchnorrProof implements ISchnorrProof {

        /**
         * Constructs a new SchnorrProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: basic_type.ISchnorrProof);

        /** SchnorrProof pk. */
        public pk?: (basic_type.ICurvePoint|null);

        /** SchnorrProof g_r. */
        public g_r?: (basic_type.ICurvePoint|null);

        /** SchnorrProof res. */
        public res: string;

        /**
         * Creates a new SchnorrProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SchnorrProof instance
         */
        public static create(properties?: basic_type.ISchnorrProof): basic_type.SchnorrProof;

        /**
         * Encodes the specified SchnorrProof message. Does not implicitly {@link basic_type.SchnorrProof.verify|verify} messages.
         * @param message SchnorrProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: basic_type.ISchnorrProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SchnorrProof message, length delimited. Does not implicitly {@link basic_type.SchnorrProof.verify|verify} messages.
         * @param message SchnorrProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: basic_type.ISchnorrProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SchnorrProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SchnorrProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): basic_type.SchnorrProof;

        /**
         * Decodes a SchnorrProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SchnorrProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): basic_type.SchnorrProof;

        /**
         * Verifies a SchnorrProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SchnorrProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SchnorrProof
         */
        public static fromObject(object: { [k: string]: any }): basic_type.SchnorrProof;

        /**
         * Creates a plain object from a SchnorrProof message. Also converts values to other types if specified.
         * @param message SchnorrProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: basic_type.SchnorrProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SchnorrProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KGD_Point. */
    interface IKGD_Point {

        /** KGD_Point point */
        point?: (basic_type.ICurvePoint|null);

        /** KGD_Point blindFactor */
        blindFactor?: (string|null);
    }

    /** Represents a KGD_Point. */
    class KGD_Point implements IKGD_Point {

        /**
         * Constructs a new KGD_Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: basic_type.IKGD_Point);

        /** KGD_Point point. */
        public point?: (basic_type.ICurvePoint|null);

        /** KGD_Point blindFactor. */
        public blindFactor: string;

        /**
         * Creates a new KGD_Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KGD_Point instance
         */
        public static create(properties?: basic_type.IKGD_Point): basic_type.KGD_Point;

        /**
         * Encodes the specified KGD_Point message. Does not implicitly {@link basic_type.KGD_Point.verify|verify} messages.
         * @param message KGD_Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: basic_type.IKGD_Point, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KGD_Point message, length delimited. Does not implicitly {@link basic_type.KGD_Point.verify|verify} messages.
         * @param message KGD_Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: basic_type.IKGD_Point, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KGD_Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KGD_Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): basic_type.KGD_Point;

        /**
         * Decodes a KGD_Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KGD_Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): basic_type.KGD_Point;

        /**
         * Verifies a KGD_Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KGD_Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KGD_Point
         */
        public static fromObject(object: { [k: string]: any }): basic_type.KGD_Point;

        /**
         * Creates a plain object from a KGD_Point message. Also converts values to other types if specified.
         * @param message KGD_Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: basic_type.KGD_Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KGD_Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PailProof. */
    interface IPailProof {

        /** PailProof yNArr */
        yNArr?: (string[]|null);
    }

    /** Represents a PailProof. */
    class PailProof implements IPailProof {

        /**
         * Constructs a new PailProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: basic_type.IPailProof);

        /** PailProof yNArr. */
        public yNArr: string[];

        /**
         * Creates a new PailProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PailProof instance
         */
        public static create(properties?: basic_type.IPailProof): basic_type.PailProof;

        /**
         * Encodes the specified PailProof message. Does not implicitly {@link basic_type.PailProof.verify|verify} messages.
         * @param message PailProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: basic_type.IPailProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PailProof message, length delimited. Does not implicitly {@link basic_type.PailProof.verify|verify} messages.
         * @param message PailProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: basic_type.IPailProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PailProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PailProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): basic_type.PailProof;

        /**
         * Decodes a PailProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PailProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): basic_type.PailProof;

        /**
         * Verifies a PailProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PailProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PailProof
         */
        public static fromObject(object: { [k: string]: any }): basic_type.PailProof;

        /**
         * Creates a plain object from a PailProof message. Also converts values to other types if specified.
         * @param message PailProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: basic_type.PailProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PailProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
