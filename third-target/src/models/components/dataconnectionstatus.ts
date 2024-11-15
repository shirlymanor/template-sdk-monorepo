/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The current authorization status of the data connection.
 */
export enum DataConnectionStatus {
    PendingAuth = "PendingAuth",
    Linked = "Linked",
    Unlinked = "Unlinked",
    Deauthorized = "Deauthorized",
}

/** @internal */
export const DataConnectionStatus$ = z.nativeEnum(DataConnectionStatus);