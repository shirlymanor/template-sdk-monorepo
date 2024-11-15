/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Current state of the bill credit note
 */
export enum BillCreditNoteStatus {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    Paid = "Paid",
    Void = "Void",
    PartiallyPaid = "PartiallyPaid",
}

/** @internal */
export const BillCreditNoteStatus$ = z.nativeEnum(BillCreditNoteStatus);
