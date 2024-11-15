/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Status of the Payment Method.
 */
export enum CommercePaymentMethodStatus {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived",
}

/**
 * A Payment Method represents the payment method(s) used to make payments.
 *
 * @remarks
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-paymentMethods) for this data type.
 */
export type CommercePaymentMethod = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * A unique, persistent identifier for this record
     */
    id: string;
    /**
     * The name of the PaymentMethod
     */
    name?: string | undefined;
    /**
     * Status of the Payment Method.
     */
    status?: CommercePaymentMethodStatus | undefined;
};

/** @internal */
export const CommercePaymentMethodStatus$ = z.nativeEnum(CommercePaymentMethodStatus);

/** @internal */
export namespace CommercePaymentMethod$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id: string;
        name?: string | undefined;
        status?: CommercePaymentMethodStatus | undefined;
    };

    export const inboundSchema: z.ZodType<CommercePaymentMethod, z.ZodTypeDef, Inbound> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string(),
            name: z.string().optional(),
            status: CommercePaymentMethodStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                id: v.id,
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id: string;
        name?: string | undefined;
        status?: CommercePaymentMethodStatus | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CommercePaymentMethod> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string(),
            name: z.string().optional(),
            status: CommercePaymentMethodStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                id: v.id,
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}