/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  HalRef,
  HalRef$inboundSchema,
  HalRef$Outbound,
  HalRef$outboundSchema,
} from "./halref.js";

export type Links = {
  self: HalRef;
  current: HalRef;
  next?: HalRef | undefined;
  previous?: HalRef | undefined;
};

/** @internal */
export const Links$inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown> = z
  .object({
    self: HalRef$inboundSchema,
    current: HalRef$inboundSchema,
    next: HalRef$inboundSchema.optional(),
    previous: HalRef$inboundSchema.optional(),
  });

/** @internal */
export type Links$Outbound = {
  self: HalRef$Outbound;
  current: HalRef$Outbound;
  next?: HalRef$Outbound | undefined;
  previous?: HalRef$Outbound | undefined;
};

/** @internal */
export const Links$outboundSchema: z.ZodType<
  Links$Outbound,
  z.ZodTypeDef,
  Links
> = z.object({
  self: HalRef$outboundSchema,
  current: HalRef$outboundSchema,
  next: HalRef$outboundSchema.optional(),
  previous: HalRef$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Links$ {
  /** @deprecated use `Links$inboundSchema` instead. */
  export const inboundSchema = Links$inboundSchema;
  /** @deprecated use `Links$outboundSchema` instead. */
  export const outboundSchema = Links$outboundSchema;
  /** @deprecated use `Links$Outbound` instead. */
  export type Outbound = Links$Outbound;
}

export function linksToJSON(links: Links): string {
  return JSON.stringify(Links$outboundSchema.parse(links));
}

export function linksFromJSON(
  jsonString: string,
): SafeParseResult<Links, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Links$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Links' from JSON`,
  );
}
