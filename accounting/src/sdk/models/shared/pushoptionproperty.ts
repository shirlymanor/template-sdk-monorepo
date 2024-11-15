/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  PushOptionChoice,
  PushOptionChoice$inboundSchema,
  PushOptionChoice$Outbound,
  PushOptionChoice$outboundSchema,
} from "./pushoptionchoice.js";
import {
  PushOptionType,
  PushOptionType$inboundSchema,
  PushOptionType$outboundSchema,
} from "./pushoptiontype.js";
import {
  PushValidationInfo,
  PushValidationInfo$inboundSchema,
  PushValidationInfo$Outbound,
  PushValidationInfo$outboundSchema,
} from "./pushvalidationinfo.js";

export type PushOptionProperty = {
  /**
   * A description of the property.
   */
  description: string;
  /**
   * The property's display name.
   */
  displayName: string;
  options?: Array<PushOptionChoice> | null | undefined;
  properties?: { [k: string]: PushOptionProperty } | null | undefined;
  /**
   * The property is required if `True`.
   */
  required: boolean;
  /**
   * The option type.
   */
  type: PushOptionType;
  validation?: PushValidationInfo | undefined;
};

/** @internal */
export const PushOptionProperty$inboundSchema: z.ZodType<
  PushOptionProperty,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string(),
  displayName: z.string(),
  options: z.nullable(z.array(PushOptionChoice$inboundSchema)).optional(),
  properties: z.nullable(
    z.record(z.lazy(() => PushOptionProperty$inboundSchema)),
  ).optional(),
  required: z.boolean(),
  type: PushOptionType$inboundSchema,
  validation: PushValidationInfo$inboundSchema.optional(),
});

/** @internal */
export type PushOptionProperty$Outbound = {
  description: string;
  displayName: string;
  options?: Array<PushOptionChoice$Outbound> | null | undefined;
  properties?: { [k: string]: PushOptionProperty$Outbound } | null | undefined;
  required: boolean;
  type: string;
  validation?: PushValidationInfo$Outbound | undefined;
};

/** @internal */
export const PushOptionProperty$outboundSchema: z.ZodType<
  PushOptionProperty$Outbound,
  z.ZodTypeDef,
  PushOptionProperty
> = z.object({
  description: z.string(),
  displayName: z.string(),
  options: z.nullable(z.array(PushOptionChoice$outboundSchema)).optional(),
  properties: z.nullable(
    z.record(z.lazy(() => PushOptionProperty$outboundSchema)),
  ).optional(),
  required: z.boolean(),
  type: PushOptionType$outboundSchema,
  validation: PushValidationInfo$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushOptionProperty$ {
  /** @deprecated use `PushOptionProperty$inboundSchema` instead. */
  export const inboundSchema = PushOptionProperty$inboundSchema;
  /** @deprecated use `PushOptionProperty$outboundSchema` instead. */
  export const outboundSchema = PushOptionProperty$outboundSchema;
  /** @deprecated use `PushOptionProperty$Outbound` instead. */
  export type Outbound = PushOptionProperty$Outbound;
}