/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateCompanyResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  company?: components.Company | undefined;
};

/** @internal */
export const CreateCompanyResponse$inboundSchema: z.ZodType<
  CreateCompanyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  Company: components.Company$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Company": "company",
  });
});

/** @internal */
export type CreateCompanyResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  Company?: components.Company$Outbound | undefined;
};

/** @internal */
export const CreateCompanyResponse$outboundSchema: z.ZodType<
  CreateCompanyResponse$Outbound,
  z.ZodTypeDef,
  CreateCompanyResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  company: components.Company$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    company: "Company",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCompanyResponse$ {
  /** @deprecated use `CreateCompanyResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCompanyResponse$inboundSchema;
  /** @deprecated use `CreateCompanyResponse$outboundSchema` instead. */
  export const outboundSchema = CreateCompanyResponse$outboundSchema;
  /** @deprecated use `CreateCompanyResponse$Outbound` instead. */
  export type Outbound = CreateCompanyResponse$Outbound;
}