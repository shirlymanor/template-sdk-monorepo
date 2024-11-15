/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountingAddress, AccountingAddress$ } from "./accountingaddress";
import { PhoneNumber, PhoneNumber$ } from "./phonenumber";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import { WebLink, WebLink$ } from "./weblink";
import * as z from "zod";

/**
 * > View the coverage for company profile in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=cashFlowStatement" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * Company info provides standard details about a linked company such as their address, phone number, and company registration.
 *
 * > **Company information or companies?**
 * >
 * > Company profile is standard information that is held in the accounting platform about a company. `Companies` is an endpoint that lists businesses in the Codat system that have linked and shared their data sources.
 */
export type AccountingCompanyInfo = {
    /**
     * Name of the linked company.
     */
    companyName?: string | null | undefined;
    /**
     * Identifier or reference for the company in the accounting platform.
     */
    accountingPlatformRef?: string | null | undefined;
    /**
     * Registered legal name of the linked company.
     */
    companyLegalName?: string | null | undefined;
    /**
     * An array of Addresses.
     */
    addresses?: Array<AccountingAddress> | null | undefined;
    /**
     * An array of phone numbers.
     */
    phoneNumbers?: Array<PhoneNumber> | null | undefined;
    /**
     * An array of weblinks.
     */
    webLinks?: Array<WebLink> | null | undefined;
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
    ledgerLockDate?: string | undefined;
    /**
     * Registration number given to the linked company by the companies authority in the country of origin. In the UK this is Companies House.
     */
    registrationNumber?: string | null | undefined;
    /**
     * Company tax number.
     */
    taxNumber?: string | null | undefined;
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
    financialYearStartDate?: string | undefined;
    /**
     * Currency set in the accounting platform of the linked company. Used by the currency rate.
     */
    baseCurrency?: string | null | undefined;
    /**
     * URL addresses for the accounting source.
     *
     * @remarks
     *
     * For example, for Xero integrations two URLs are returned. These have many potential use cases, such as [deep linking](https://developer.xero.com/documentation/api-guides/deep-link-xero).
     */
    sourceUrls?: Record<string, string> | null | undefined;
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
    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    supplementalData?: SupplementalData | undefined;
};

/** @internal */
export namespace AccountingCompanyInfo$ {
    export type Inbound = {
        companyName?: string | null | undefined;
        accountingPlatformRef?: string | null | undefined;
        companyLegalName?: string | null | undefined;
        addresses?: Array<AccountingAddress$.Inbound> | null | undefined;
        phoneNumbers?: Array<PhoneNumber$.Inbound> | null | undefined;
        webLinks?: Array<WebLink$.Inbound> | null | undefined;
        ledgerLockDate?: string | undefined;
        registrationNumber?: string | null | undefined;
        taxNumber?: string | null | undefined;
        financialYearStartDate?: string | undefined;
        baseCurrency?: string | null | undefined;
        sourceUrls?: Record<string, string> | null | undefined;
        createdDate?: string | undefined;
        supplementalData?: SupplementalData$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AccountingCompanyInfo, z.ZodTypeDef, Inbound> = z
        .object({
            companyName: z.nullable(z.string()).optional(),
            accountingPlatformRef: z.nullable(z.string()).optional(),
            companyLegalName: z.nullable(z.string()).optional(),
            addresses: z.nullable(z.array(AccountingAddress$.inboundSchema)).optional(),
            phoneNumbers: z.nullable(z.array(PhoneNumber$.inboundSchema)).optional(),
            webLinks: z.nullable(z.array(WebLink$.inboundSchema)).optional(),
            ledgerLockDate: z.string().optional(),
            registrationNumber: z.nullable(z.string()).optional(),
            taxNumber: z.nullable(z.string()).optional(),
            financialYearStartDate: z.string().optional(),
            baseCurrency: z.nullable(z.string()).optional(),
            sourceUrls: z.nullable(z.record(z.string())).optional(),
            createdDate: z.string().optional(),
            supplementalData: SupplementalData$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.accountingPlatformRef === undefined
                    ? null
                    : { accountingPlatformRef: v.accountingPlatformRef }),
                ...(v.companyLegalName === undefined
                    ? null
                    : { companyLegalName: v.companyLegalName }),
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.phoneNumbers === undefined ? null : { phoneNumbers: v.phoneNumbers }),
                ...(v.webLinks === undefined ? null : { webLinks: v.webLinks }),
                ...(v.ledgerLockDate === undefined ? null : { ledgerLockDate: v.ledgerLockDate }),
                ...(v.registrationNumber === undefined
                    ? null
                    : { registrationNumber: v.registrationNumber }),
                ...(v.taxNumber === undefined ? null : { taxNumber: v.taxNumber }),
                ...(v.financialYearStartDate === undefined
                    ? null
                    : { financialYearStartDate: v.financialYearStartDate }),
                ...(v.baseCurrency === undefined ? null : { baseCurrency: v.baseCurrency }),
                ...(v.sourceUrls === undefined ? null : { sourceUrls: v.sourceUrls }),
                ...(v.createdDate === undefined ? null : { createdDate: v.createdDate }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
            };
        });

    export type Outbound = {
        companyName?: string | null | undefined;
        accountingPlatformRef?: string | null | undefined;
        companyLegalName?: string | null | undefined;
        addresses?: Array<AccountingAddress$.Outbound> | null | undefined;
        phoneNumbers?: Array<PhoneNumber$.Outbound> | null | undefined;
        webLinks?: Array<WebLink$.Outbound> | null | undefined;
        ledgerLockDate?: string | undefined;
        registrationNumber?: string | null | undefined;
        taxNumber?: string | null | undefined;
        financialYearStartDate?: string | undefined;
        baseCurrency?: string | null | undefined;
        sourceUrls?: Record<string, string> | null | undefined;
        createdDate?: string | undefined;
        supplementalData?: SupplementalData$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingCompanyInfo> = z
        .object({
            companyName: z.nullable(z.string()).optional(),
            accountingPlatformRef: z.nullable(z.string()).optional(),
            companyLegalName: z.nullable(z.string()).optional(),
            addresses: z.nullable(z.array(AccountingAddress$.outboundSchema)).optional(),
            phoneNumbers: z.nullable(z.array(PhoneNumber$.outboundSchema)).optional(),
            webLinks: z.nullable(z.array(WebLink$.outboundSchema)).optional(),
            ledgerLockDate: z.string().optional(),
            registrationNumber: z.nullable(z.string()).optional(),
            taxNumber: z.nullable(z.string()).optional(),
            financialYearStartDate: z.string().optional(),
            baseCurrency: z.nullable(z.string()).optional(),
            sourceUrls: z.nullable(z.record(z.string())).optional(),
            createdDate: z.string().optional(),
            supplementalData: SupplementalData$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.accountingPlatformRef === undefined
                    ? null
                    : { accountingPlatformRef: v.accountingPlatformRef }),
                ...(v.companyLegalName === undefined
                    ? null
                    : { companyLegalName: v.companyLegalName }),
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.phoneNumbers === undefined ? null : { phoneNumbers: v.phoneNumbers }),
                ...(v.webLinks === undefined ? null : { webLinks: v.webLinks }),
                ...(v.ledgerLockDate === undefined ? null : { ledgerLockDate: v.ledgerLockDate }),
                ...(v.registrationNumber === undefined
                    ? null
                    : { registrationNumber: v.registrationNumber }),
                ...(v.taxNumber === undefined ? null : { taxNumber: v.taxNumber }),
                ...(v.financialYearStartDate === undefined
                    ? null
                    : { financialYearStartDate: v.financialYearStartDate }),
                ...(v.baseCurrency === undefined ? null : { baseCurrency: v.baseCurrency }),
                ...(v.sourceUrls === undefined ? null : { sourceUrls: v.sourceUrls }),
                ...(v.createdDate === undefined ? null : { createdDate: v.createdDate }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
            };
        });
}
