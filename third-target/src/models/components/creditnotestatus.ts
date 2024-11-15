/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Current state of the credit note.
 */
export enum CreditNoteStatus {
    Unknown = "Unknown",
    Draft = "Draft",
    Submitted = "Submitted",
    Paid = "Paid",
    Void = "Void",
    PartiallyPaid = "PartiallyPaid",
}

/** @internal */
export const CreditNoteStatus$ = z.nativeEnum(CreditNoteStatus);