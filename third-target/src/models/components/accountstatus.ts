/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Status of the account
 */
export enum AccountStatus {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived",
    Pending = "Pending",
}

/** @internal */
export const AccountStatus$ = z.nativeEnum(AccountStatus);