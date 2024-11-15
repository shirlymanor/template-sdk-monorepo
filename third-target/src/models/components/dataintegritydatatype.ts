/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum DataIntegrityDataType {
    BankingAccounts = "banking-accounts",
    BankingTransactions = "banking-transactions",
    BankAccounts = "bankAccounts",
    AccountTransactions = "accountTransactions",
}

/** @internal */
export const DataIntegrityDataType$ = z.nativeEnum(DataIntegrityDataType);
