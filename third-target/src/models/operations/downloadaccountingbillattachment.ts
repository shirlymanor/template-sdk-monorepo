/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DownloadAccountingBillAttachmentRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for a bill.
     */
    billId: string;
    /**
     * Unique identifier for an attachment.
     */
    attachmentId: string;
};

export type DownloadAccountingBillAttachmentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    data?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export namespace DownloadAccountingBillAttachmentRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        billId: string;
        attachmentId: string;
    };

    export const inboundSchema: z.ZodType<
        DownloadAccountingBillAttachmentRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            billId: z.string(),
            attachmentId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                billId: v.billId,
                attachmentId: v.attachmentId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        billId: string;
        attachmentId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DownloadAccountingBillAttachmentRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            billId: z.string(),
            attachmentId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                billId: v.billId,
                attachmentId: v.attachmentId,
            };
        });
}

/** @internal */
export namespace DownloadAccountingBillAttachmentResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Data?: ReadableStream<Uint8Array> | undefined;
    };

    export const inboundSchema: z.ZodType<
        DownloadAccountingBillAttachmentResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Data: z.instanceof(ReadableStream<Uint8Array>).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Data === undefined ? null : { data: v.Data }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Data?: ReadableStream<Uint8Array> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DownloadAccountingBillAttachmentResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            data: z.instanceof(ReadableStream<Uint8Array>).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.data === undefined ? null : { Data: v.data }),
            };
        });
}