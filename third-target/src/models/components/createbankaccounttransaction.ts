/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import * as z from "zod";

export type CreateBankAccountTransaction = {
    /**
     * Identifier for the bank account transaction, unique for the company in the accounting platform.
     */
    id?: string | undefined;
    /**
     * The amount transacted in the bank transaction.
     */
    amount?: Decimal$ | number | undefined;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    date?: string | undefined;
    /**
     * Description of the bank transaction.
     */
    description?: string | undefined;
    /**
     * The remaining balance in the account with ID `accountId`.
     */
    balance?: Decimal$ | number | undefined;
};

/** @internal */
export namespace CreateBankAccountTransaction$ {
    export type Inbound = {
        id?: string | undefined;
        amount?: number | undefined;
        date?: string | undefined;
        description?: string | undefined;
        balance?: number | undefined;
    };

    export const inboundSchema: z.ZodType<CreateBankAccountTransaction, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            amount: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
            date: z.string().optional(),
            description: z.string().optional(),
            balance: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        amount?: number | undefined;
        date?: string | undefined;
        description?: string | undefined;
        balance?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateBankAccountTransaction> = z
        .object({
            id: z.string().optional(),
            amount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
            date: z.string().optional(),
            description: z.string().optional(),
            balance: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
            };
        });
}
