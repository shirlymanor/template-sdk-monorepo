/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type PushFieldValidation = {
  /**
   * Details on the validation issue.
   */
  details: string;
  /**
   * Field name that resulted in the validation issue.
   */
  field?: string | undefined;
  /**
   * Unique reference identifier for the validation issue.
   */
  ref?: string | null | undefined;
};

/** @internal */
export const PushFieldValidation$inboundSchema: z.ZodType<
  PushFieldValidation,
  z.ZodTypeDef,
  unknown
> = z.object({
  details: z.string(),
  field: z.string().optional(),
  ref: z.nullable(z.string()).optional(),
});

/** @internal */
export type PushFieldValidation$Outbound = {
  details: string;
  field?: string | undefined;
  ref?: string | null | undefined;
};

/** @internal */
export const PushFieldValidation$outboundSchema: z.ZodType<
  PushFieldValidation$Outbound,
  z.ZodTypeDef,
  PushFieldValidation
> = z.object({
  details: z.string(),
  field: z.string().optional(),
  ref: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushFieldValidation$ {
  /** @deprecated use `PushFieldValidation$inboundSchema` instead. */
  export const inboundSchema = PushFieldValidation$inboundSchema;
  /** @deprecated use `PushFieldValidation$outboundSchema` instead. */
  export const outboundSchema = PushFieldValidation$outboundSchema;
  /** @deprecated use `PushFieldValidation$Outbound` instead. */
  export type Outbound = PushFieldValidation$Outbound;
}
