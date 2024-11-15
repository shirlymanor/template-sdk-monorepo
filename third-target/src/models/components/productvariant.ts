/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { ProductInventory, ProductInventory$ } from "./productinventory";
import { ProductPrice, ProductPrice$ } from "./productprice";
import { ProductVariantStatus, ProductVariantStatus$ } from "./productvariantstatus";
import * as z from "zod";

/**
 * Represents a variation of a product available for sale, for example an item of clothing that may be available for sale in multiple sizes and colors.
 *
 * @remarks
 *
 */
export type ProductVariant = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * A unique, persistent identifier for this record
     */
    id: string;
    /**
     * Name of the product recorded in the commerce or point of sale platform.
     */
    name?: string | undefined;
    /**
     * Whether sales taxes are enabled for this product variant.
     */
    isTaxEnabled?: boolean | undefined;
    /**
     * SKU (stock keeping unit) of the variant, as defined by the merchant.
     */
    sku?: string | undefined;
    /**
     * Unique product number of the variant. This might be a barcode, UPC, ISBN, etc.
     */
    barcode?: string | undefined;
    /**
     * Unit of measure for the variant, such as `kg` or `meters`.
     */
    unitOfMeasure?: string | undefined;
    /**
     * VAT rate for the product variant if sales taxes are enabled.
     */
    vatPercentage?: Decimal$ | number | undefined;
    /**
     * Prices for the product variants in different currencies.
     */
    prices?: Array<ProductPrice> | undefined;
    /**
     * Information about the total inventory as well as the locations inventory is in.
     */
    inventory?: ProductInventory | undefined;
    /**
     * Indicates whether or not the product requires physical delivery.
     */
    shippingRequired?: boolean | undefined;
    /**
     * The status of the product variant.
     */
    status?: ProductVariantStatus | undefined;
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
    createdDate?: string | undefined;
};

/** @internal */
export namespace ProductVariant$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id: string;
        name?: string | undefined;
        isTaxEnabled?: boolean | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        unitOfMeasure?: string | undefined;
        vatPercentage?: number | undefined;
        prices?: Array<ProductPrice$.Inbound> | undefined;
        inventory?: ProductInventory$.Inbound | undefined;
        shippingRequired?: boolean | undefined;
        status?: ProductVariantStatus | undefined;
        createdDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ProductVariant, z.ZodTypeDef, Inbound> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string(),
            name: z.string().optional(),
            isTaxEnabled: z.boolean().optional(),
            sku: z.string().optional(),
            barcode: z.string().optional(),
            unitOfMeasure: z.string().optional(),
            vatPercentage: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
            prices: z.array(ProductPrice$.inboundSchema).optional(),
            inventory: ProductInventory$.inboundSchema.optional(),
            shippingRequired: z.boolean().optional(),
            status: ProductVariantStatus$.optional(),
            createdDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                id: v.id,
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.isTaxEnabled === undefined ? null : { isTaxEnabled: v.isTaxEnabled }),
                ...(v.sku === undefined ? null : { sku: v.sku }),
                ...(v.barcode === undefined ? null : { barcode: v.barcode }),
                ...(v.unitOfMeasure === undefined ? null : { unitOfMeasure: v.unitOfMeasure }),
                ...(v.vatPercentage === undefined ? null : { vatPercentage: v.vatPercentage }),
                ...(v.prices === undefined ? null : { prices: v.prices }),
                ...(v.inventory === undefined ? null : { inventory: v.inventory }),
                ...(v.shippingRequired === undefined
                    ? null
                    : { shippingRequired: v.shippingRequired }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.createdDate === undefined ? null : { createdDate: v.createdDate }),
            };
        });

    export type Outbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id: string;
        name?: string | undefined;
        isTaxEnabled?: boolean | undefined;
        sku?: string | undefined;
        barcode?: string | undefined;
        unitOfMeasure?: string | undefined;
        vatPercentage?: number | undefined;
        prices?: Array<ProductPrice$.Outbound> | undefined;
        inventory?: ProductInventory$.Outbound | undefined;
        shippingRequired?: boolean | undefined;
        status?: ProductVariantStatus | undefined;
        createdDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProductVariant> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string(),
            name: z.string().optional(),
            isTaxEnabled: z.boolean().optional(),
            sku: z.string().optional(),
            barcode: z.string().optional(),
            unitOfMeasure: z.string().optional(),
            vatPercentage: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
            prices: z.array(ProductPrice$.outboundSchema).optional(),
            inventory: ProductInventory$.outboundSchema.optional(),
            shippingRequired: z.boolean().optional(),
            status: ProductVariantStatus$.optional(),
            createdDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                id: v.id,
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.isTaxEnabled === undefined ? null : { isTaxEnabled: v.isTaxEnabled }),
                ...(v.sku === undefined ? null : { sku: v.sku }),
                ...(v.barcode === undefined ? null : { barcode: v.barcode }),
                ...(v.unitOfMeasure === undefined ? null : { unitOfMeasure: v.unitOfMeasure }),
                ...(v.vatPercentage === undefined ? null : { vatPercentage: v.vatPercentage }),
                ...(v.prices === undefined ? null : { prices: v.prices }),
                ...(v.inventory === undefined ? null : { inventory: v.inventory }),
                ...(v.shippingRequired === undefined
                    ? null
                    : { shippingRequired: v.shippingRequired }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.createdDate === undefined ? null : { createdDate: v.createdDate }),
            };
        });
}
