/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAccountingBankAccountRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for an account.
     */
    accountId: string;
};

export type GetAccountingBankAccountResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    accountingBankAccount?: components.AccountingBankAccount | null | undefined;
};

/** @internal */
export namespace GetAccountingBankAccountRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        accountId: string;
    };

    export const inboundSchema: z.ZodType<GetAccountingBankAccountRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                companyId: z.string(),
                connectionId: z.string(),
                accountId: z.string(),
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    connectionId: v.connectionId,
                    accountId: v.accountId,
                };
            });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        accountId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingBankAccountRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            accountId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                accountId: v.accountId,
            };
        });
}

/** @internal */
export namespace GetAccountingBankAccountResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AccountingBankAccount?: components.AccountingBankAccount$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetAccountingBankAccountResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                AccountingBankAccount: z
                    .nullable(components.AccountingBankAccount$.inboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.AccountingBankAccount === undefined
                        ? null
                        : { accountingBankAccount: v.AccountingBankAccount }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AccountingBankAccount?: components.AccountingBankAccount$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingBankAccountResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            accountingBankAccount: z
                .nullable(components.AccountingBankAccount$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.accountingBankAccount === undefined
                    ? null
                    : { AccountingBankAccount: v.accountingBankAccount }),
            };
        });
}
