/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListAccountsRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
   */
  orderBy?: string | undefined;
  /**
   * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  page?: number | undefined;
  /**
   * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  pageSize?: number | undefined;
  /**
   * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
   */
  query?: string | undefined;
};

export type ListAccountsResponse = {
  /**
   * Success
   */
  accounts?: shared.Accounts | undefined;
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Your `query` parameter was not correctly formed
   */
  errorMessage?: shared.ErrorMessage | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const ListAccountsRequest$inboundSchema: z.ZodType<
  ListAccountsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  orderBy: z.string().optional(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
});

/** @internal */
export type ListAccountsRequest$Outbound = {
  companyId: string;
  orderBy?: string | undefined;
  page: number;
  pageSize: number;
  query?: string | undefined;
};

/** @internal */
export const ListAccountsRequest$outboundSchema: z.ZodType<
  ListAccountsRequest$Outbound,
  z.ZodTypeDef,
  ListAccountsRequest
> = z.object({
  companyId: z.string(),
  orderBy: z.string().optional(),
  page: z.number().int().default(1),
  pageSize: z.number().int().default(100),
  query: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountsRequest$ {
  /** @deprecated use `ListAccountsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountsRequest$inboundSchema;
  /** @deprecated use `ListAccountsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccountsRequest$outboundSchema;
  /** @deprecated use `ListAccountsRequest$Outbound` instead. */
  export type Outbound = ListAccountsRequest$Outbound;
}

export function listAccountsRequestToJSON(
  listAccountsRequest: ListAccountsRequest,
): string {
  return JSON.stringify(
    ListAccountsRequest$outboundSchema.parse(listAccountsRequest),
  );
}

export function listAccountsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountsRequest' from JSON`,
  );
}

/** @internal */
export const ListAccountsResponse$inboundSchema: z.ZodType<
  ListAccountsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Accounts: shared.Accounts$inboundSchema.optional(),
  ContentType: z.string(),
  ErrorMessage: shared.ErrorMessage$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "Accounts": "accounts",
    "ContentType": "contentType",
    "ErrorMessage": "errorMessage",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListAccountsResponse$Outbound = {
  Accounts?: shared.Accounts$Outbound | undefined;
  ContentType: string;
  ErrorMessage?: shared.ErrorMessage$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListAccountsResponse$outboundSchema: z.ZodType<
  ListAccountsResponse$Outbound,
  z.ZodTypeDef,
  ListAccountsResponse
> = z.object({
  accounts: shared.Accounts$outboundSchema.optional(),
  contentType: z.string(),
  errorMessage: shared.ErrorMessage$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    accounts: "Accounts",
    contentType: "ContentType",
    errorMessage: "ErrorMessage",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountsResponse$ {
  /** @deprecated use `ListAccountsResponse$inboundSchema` instead. */
  export const inboundSchema = ListAccountsResponse$inboundSchema;
  /** @deprecated use `ListAccountsResponse$outboundSchema` instead. */
  export const outboundSchema = ListAccountsResponse$outboundSchema;
  /** @deprecated use `ListAccountsResponse$Outbound` instead. */
  export type Outbound = ListAccountsResponse$Outbound;
}

export function listAccountsResponseToJSON(
  listAccountsResponse: ListAccountsResponse,
): string {
  return JSON.stringify(
    ListAccountsResponse$outboundSchema.parse(listAccountsResponse),
  );
}

export function listAccountsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountsResponse' from JSON`,
  );
}
