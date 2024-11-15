/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountingBill, AccountingBill$ } from "./accountingbill";
import { Links, Links$ } from "./links";
import * as z from "zod";

export type AccountingBills = {
    results?: Array<AccountingBill> | undefined;
    /**
     * Current page number.
     */
    pageNumber: number;
    /**
     * Number of items to return in results array.
     */
    pageSize: number;
    /**
     * Total number of items.
     */
    totalResults: number;
    links: Links;
};

/** @internal */
export namespace AccountingBills$ {
    export type Inbound = {
        results?: Array<AccountingBill$.Inbound> | undefined;
        pageNumber: number;
        pageSize: number;
        totalResults: number;
        _links: Links$.Inbound;
    };

    export const inboundSchema: z.ZodType<AccountingBills, z.ZodTypeDef, Inbound> = z
        .object({
            results: z.array(AccountingBill$.inboundSchema).optional(),
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            totalResults: z.number().int(),
            _links: Links$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.results === undefined ? null : { results: v.results }),
                pageNumber: v.pageNumber,
                pageSize: v.pageSize,
                totalResults: v.totalResults,
                links: v._links,
            };
        });

    export type Outbound = {
        results?: Array<AccountingBill$.Outbound> | undefined;
        pageNumber: number;
        pageSize: number;
        totalResults: number;
        _links: Links$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingBills> = z
        .object({
            results: z.array(AccountingBill$.outboundSchema).optional(),
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            totalResults: z.number().int(),
            links: Links$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.results === undefined ? null : { results: v.results }),
                pageNumber: v.pageNumber,
                pageSize: v.pageSize,
                totalResults: v.totalResults,
                _links: v.links,
            };
        });
}
