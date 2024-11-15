/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { BillPaymentLineLinkType, BillPaymentLineLinkType$ } from "./billpaymentlinelinktype";
import * as z from "zod";

export type BillPaymentLineLink = {
    /**
     * Types of links to bill payment lines.
     */
    type: BillPaymentLineLinkType;
    /**
     * Unique identifier of the transaction represented by the link.
     */
    id?: string | null | undefined;
    /**
     * Amount by which the balance of the linked entity is altered, in the currency of the linked entity.
     *
     * @remarks
     *
     * - A negative link amount reduces the outstanding amount on the accounts payable account.
     * - A positive link amount increases the outstanding amount on the accounts payable account.
     */
    amount?: Decimal$ | number | null | undefined;
    /**
     * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
     *
     * @remarks
     *
     * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
     *
     * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
     *
     * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
     *
     * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
     *
     * ## Examples with base currency of GBP
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **USD**          | $20            | 0.781         | £15.62                     |
     * | **EUR**          | €20            | 0.885         | £17.70                     |
     * | **RUB**          | ₽20            | 0.011         | £0.22                      |
     *
     * ## Examples with base currency of USD
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **GBP**          | £20            | 1.277         | $25.54                     |
     * | **EUR**          | €20            | 1.134         | $22.68                     |
     * | **RUB**          | ₽20            | 0.015         | $0.30                      |
     *
     *
     * ### Integration-specific details
     *
     * | Integration       | Scenario                                        | System behavior                                                                                                                                                      |
     * |-------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     * | QuickBooks Online | Transaction currency differs from base currency | If currency rate value is left `null`, a rate of 1 will be used by QBO by default. To override this, include the required currency rate in the expense transaction.  |
     */
    currencyRate?: Decimal$ | number | null | undefined;
};

/** @internal */
export namespace BillPaymentLineLink$ {
    export type Inbound = {
        type: BillPaymentLineLinkType;
        id?: string | null | undefined;
        amount?: number | null | undefined;
        currencyRate?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<BillPaymentLineLink, z.ZodTypeDef, Inbound> = z
        .object({
            type: BillPaymentLineLinkType$,
            id: z.nullable(z.string()).optional(),
            amount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            currencyRate: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
            };
        });

    export type Outbound = {
        type: BillPaymentLineLinkType;
        id?: string | null | undefined;
        amount?: number | null | undefined;
        currencyRate?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BillPaymentLineLink> = z
        .object({
            type: BillPaymentLineLinkType$,
            id: z.nullable(z.string()).optional(),
            amount: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            currencyRate: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
            };
        });
}