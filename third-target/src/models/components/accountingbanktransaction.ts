/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { BankTransactionType, BankTransactionType$ } from "./banktransactiontype";
import * as z from "zod";

/**
 * > **Accessing Bank Accounts through Banking API**
 *
 * @remarks
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/lending-api#/operations/list-all-banking-transactions)
 *
 * > View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Transactional banking data for a specific company and account.
 *
 * Bank transactions include the:
 * * Amount of the transaction.
 * * Current account balance.
 * * Transaction type, for example, credit, debit, or transfer.
 */
export type AccountingBankTransaction = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Identifier for the bank transaction, unique to the company in the accounting platform.
     */
    id?: string | undefined;
    /**
     * Unique identifier to the `accountId` the bank transactions originates from.
     */
    accountId?: string | null | undefined;
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
    clearedOnDate?: string | undefined;
    /**
     * Description of the bank transaction.
     */
    description?: string | null | undefined;
    /**
     * `True` if the bank transaction has been [reconciled](https://www.xero.com/uk/guides/what-is-bank-reconciliation/) in the accounting platform.
     */
    reconciled?: boolean | undefined;
    /**
     * The amount transacted in the bank transaction.
     */
    amount?: Decimal$ | number | undefined;
    /**
     * The remaining balance in the account with ID `accountId`.
     */
    balance?: Decimal$ | number | undefined;
    /**
     * Type of transaction for the bank statement line.
     */
    transactionType?: BankTransactionType | undefined;
};

/** @internal */
export namespace AccountingBankTransaction$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id?: string | undefined;
        accountId?: string | null | undefined;
        clearedOnDate?: string | undefined;
        description?: string | null | undefined;
        reconciled?: boolean | undefined;
        amount?: number | undefined;
        balance?: number | undefined;
        transactionType?: BankTransactionType | undefined;
    };

    export const inboundSchema: z.ZodType<AccountingBankTransaction, z.ZodTypeDef, Inbound> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string().optional(),
            accountId: z.nullable(z.string()).optional(),
            clearedOnDate: z.string().optional(),
            description: z.nullable(z.string()).optional(),
            reconciled: z.boolean().optional(),
            amount: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
            balance: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
            transactionType: BankTransactionType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.clearedOnDate === undefined ? null : { clearedOnDate: v.clearedOnDate }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.reconciled === undefined ? null : { reconciled: v.reconciled }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.transactionType === undefined
                    ? null
                    : { transactionType: v.transactionType }),
            };
        });

    export type Outbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id?: string | undefined;
        accountId?: string | null | undefined;
        clearedOnDate?: string | undefined;
        description?: string | null | undefined;
        reconciled?: boolean | undefined;
        amount?: number | undefined;
        balance?: number | undefined;
        transactionType?: BankTransactionType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingBankTransaction> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string().optional(),
            accountId: z.nullable(z.string()).optional(),
            clearedOnDate: z.string().optional(),
            description: z.nullable(z.string()).optional(),
            reconciled: z.boolean().optional(),
            amount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
            balance: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
            transactionType: BankTransactionType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.clearedOnDate === undefined ? null : { clearedOnDate: v.clearedOnDate }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.reconciled === undefined ? null : { reconciled: v.reconciled }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.transactionType === undefined
                    ? null
                    : { transactionType: v.transactionType }),
            };
        });
}