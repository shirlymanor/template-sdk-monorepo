/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListCommercePaymentsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    page?: number | undefined;
    /**
     * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    pageSize?: number | undefined;
    /**
     * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
     */
    query?: string | undefined;
    /**
     * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
     */
    orderBy?: string | undefined;
};

export type ListCommercePaymentsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    commercePayments?: components.CommercePayments | undefined;
};

/** @internal */
export namespace ListCommercePaymentsRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        page?: number | undefined;
        pageSize?: number | undefined;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListCommercePaymentsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
            orderBy: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        page: number;
        pageSize: number;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCommercePaymentsRequest> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
            orderBy: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
            };
        });
}

/** @internal */
export namespace ListCommercePaymentsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        CommercePayments?: components.CommercePayments$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListCommercePaymentsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            CommercePayments: components.CommercePayments$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.CommercePayments === undefined
                    ? null
                    : { commercePayments: v.CommercePayments }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        CommercePayments?: components.CommercePayments$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCommercePaymentsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            commercePayments: components.CommercePayments$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.commercePayments === undefined
                    ? null
                    : { CommercePayments: v.commercePayments }),
            };
        });
}