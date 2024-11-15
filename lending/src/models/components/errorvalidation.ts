/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ErrorValidationItem,
  ErrorValidationItem$inboundSchema,
  ErrorValidationItem$Outbound,
  ErrorValidationItem$outboundSchema,
} from "./errorvalidationitem.js";

/**
 * A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.
 */
export type ErrorValidation = {
  errors?: Array<ErrorValidationItem> | null | undefined;
  warnings?: Array<ErrorValidationItem> | null | undefined;
};

/** @internal */
export const ErrorValidation$inboundSchema: z.ZodType<
  ErrorValidation,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.nullable(z.array(ErrorValidationItem$inboundSchema)).optional(),
  warnings: z.nullable(z.array(ErrorValidationItem$inboundSchema)).optional(),
});

/** @internal */
export type ErrorValidation$Outbound = {
  errors?: Array<ErrorValidationItem$Outbound> | null | undefined;
  warnings?: Array<ErrorValidationItem$Outbound> | null | undefined;
};

/** @internal */
export const ErrorValidation$outboundSchema: z.ZodType<
  ErrorValidation$Outbound,
  z.ZodTypeDef,
  ErrorValidation
> = z.object({
  errors: z.nullable(z.array(ErrorValidationItem$outboundSchema)).optional(),
  warnings: z.nullable(z.array(ErrorValidationItem$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorValidation$ {
  /** @deprecated use `ErrorValidation$inboundSchema` instead. */
  export const inboundSchema = ErrorValidation$inboundSchema;
  /** @deprecated use `ErrorValidation$outboundSchema` instead. */
  export const outboundSchema = ErrorValidation$outboundSchema;
  /** @deprecated use `ErrorValidation$Outbound` instead. */
  export type Outbound = ErrorValidation$Outbound;
}

export function errorValidationToJSON(
  errorValidation: ErrorValidation,
): string {
  return JSON.stringify(ErrorValidation$outboundSchema.parse(errorValidation));
}

export function errorValidationFromJSON(
  jsonString: string,
): SafeParseResult<ErrorValidation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorValidation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorValidation' from JSON`,
  );
}
