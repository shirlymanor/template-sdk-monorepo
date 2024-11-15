/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PushOptionChoice,
  PushOptionChoice$inboundSchema,
  PushOptionChoice$Outbound,
  PushOptionChoice$outboundSchema,
} from "./pushoptionchoice.js";
import {
  PushOptionProperty,
  PushOptionProperty$inboundSchema,
  PushOptionProperty$Outbound,
  PushOptionProperty$outboundSchema,
} from "./pushoptionproperty.js";
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

export type PushOption = {
  /**
   * A description of the property.
   */
  description?: string | undefined;
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
export const PushOption$inboundSchema: z.ZodType<
  PushOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  displayName: z.string(),
  options: z.nullable(z.array(PushOptionChoice$inboundSchema)).optional(),
  properties: z.nullable(z.record(PushOptionProperty$inboundSchema)).optional(),
  required: z.boolean(),
  type: PushOptionType$inboundSchema,
  validation: PushValidationInfo$inboundSchema.optional(),
});

/** @internal */
export type PushOption$Outbound = {
  description?: string | undefined;
  displayName: string;
  options?: Array<PushOptionChoice$Outbound> | null | undefined;
  properties?: { [k: string]: PushOptionProperty$Outbound } | null | undefined;
  required: boolean;
  type: string;
  validation?: PushValidationInfo$Outbound | undefined;
};

/** @internal */
export const PushOption$outboundSchema: z.ZodType<
  PushOption$Outbound,
  z.ZodTypeDef,
  PushOption
> = z.object({
  description: z.string().optional(),
  displayName: z.string(),
  options: z.nullable(z.array(PushOptionChoice$outboundSchema)).optional(),
  properties: z.nullable(z.record(PushOptionProperty$outboundSchema))
    .optional(),
  required: z.boolean(),
  type: PushOptionType$outboundSchema,
  validation: PushValidationInfo$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushOption$ {
  /** @deprecated use `PushOption$inboundSchema` instead. */
  export const inboundSchema = PushOption$inboundSchema;
  /** @deprecated use `PushOption$outboundSchema` instead. */
  export const outboundSchema = PushOption$outboundSchema;
  /** @deprecated use `PushOption$Outbound` instead. */
  export type Outbound = PushOption$Outbound;
}

export function pushOptionToJSON(pushOption: PushOption): string {
  return JSON.stringify(PushOption$outboundSchema.parse(pushOption));
}

export function pushOptionFromJSON(
  jsonString: string,
): SafeParseResult<PushOption, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PushOption$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PushOption' from JSON`,
  );
}
