/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type HalRef = {
  /**
   * Uri hypertext reference.
   */
  href?: string | undefined;
};

/** @internal */
export const HalRef$inboundSchema: z.ZodType<HalRef, z.ZodTypeDef, unknown> = z
  .object({
    href: z.string().optional(),
  });

/** @internal */
export type HalRef$Outbound = {
  href?: string | undefined;
};

/** @internal */
export const HalRef$outboundSchema: z.ZodType<
  HalRef$Outbound,
  z.ZodTypeDef,
  HalRef
> = z.object({
  href: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HalRef$ {
  /** @deprecated use `HalRef$inboundSchema` instead. */
  export const inboundSchema = HalRef$inboundSchema;
  /** @deprecated use `HalRef$outboundSchema` instead. */
  export const outboundSchema = HalRef$outboundSchema;
  /** @deprecated use `HalRef$Outbound` instead. */
  export type Outbound = HalRef$Outbound;
}