/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetCommercePaymentRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for a payment.
     */
    paymentId: string;
};

export type GetCommercePaymentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    commercePayment?: components.CommercePayment | null | undefined;
};

/** @internal */
export namespace GetCommercePaymentRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        paymentId: string;
    };

    export const inboundSchema: z.ZodType<GetCommercePaymentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            paymentId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                paymentId: v.paymentId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        paymentId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCommercePaymentRequest> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            paymentId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                paymentId: v.paymentId,
            };
        });
}

/** @internal */
export namespace GetCommercePaymentResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        CommercePayment?: components.CommercePayment$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetCommercePaymentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            CommercePayment: z.nullable(components.CommercePayment$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.CommercePayment === undefined
                    ? null
                    : { commercePayment: v.CommercePayment }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        CommercePayment?: components.CommercePayment$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCommercePaymentResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            commercePayment: z.nullable(components.CommercePayment$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.commercePayment === undefined
                    ? null
                    : { CommercePayment: v.commercePayment }),
            };
        });
}
