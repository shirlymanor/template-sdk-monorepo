/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Name of underlying data type.
 */
export enum TrackingRecordRefDataType {
    Customers = "customers",
    Suppliers = "suppliers",
    TrackingCategories = "trackingCategories",
}

/**
 * Links to the customer or tracking category.
 */
export type TrackingRecordRef = {
    /**
     * 'id' of the underlying record or data type.
     */
    id?: string | undefined;
    /**
     * Name of underlying data type.
     */
    dataType?: TrackingRecordRefDataType | undefined;
};

/** @internal */
export const TrackingRecordRefDataType$ = z.nativeEnum(TrackingRecordRefDataType);

/** @internal */
export namespace TrackingRecordRef$ {
    export type Inbound = {
        id?: string | undefined;
        dataType?: TrackingRecordRefDataType | undefined;
    };

    export const inboundSchema: z.ZodType<TrackingRecordRef, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            dataType: TrackingRecordRefDataType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        dataType?: TrackingRecordRefDataType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackingRecordRef> = z
        .object({
            id: z.string().optional(),
            dataType: TrackingRecordRefDataType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
            };
        });
}
