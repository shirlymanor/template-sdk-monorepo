/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushFieldValidation, PushFieldValidation$ } from "./pushfieldvalidation";
import * as z from "zod";

export type PushValidationInfo = {
    warnings?: Array<PushFieldValidation> | null | undefined;
    information?: Array<PushFieldValidation> | null | undefined;
};

/** @internal */
export namespace PushValidationInfo$ {
    export type Inbound = {
        warnings?: Array<PushFieldValidation$.Inbound> | null | undefined;
        information?: Array<PushFieldValidation$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<PushValidationInfo, z.ZodTypeDef, Inbound> = z
        .object({
            warnings: z.nullable(z.array(PushFieldValidation$.inboundSchema)).optional(),
            information: z.nullable(z.array(PushFieldValidation$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.warnings === undefined ? null : { warnings: v.warnings }),
                ...(v.information === undefined ? null : { information: v.information }),
            };
        });

    export type Outbound = {
        warnings?: Array<PushFieldValidation$.Outbound> | null | undefined;
        information?: Array<PushFieldValidation$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushValidationInfo> = z
        .object({
            warnings: z.nullable(z.array(PushFieldValidation$.outboundSchema)).optional(),
            information: z.nullable(z.array(PushFieldValidation$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.warnings === undefined ? null : { warnings: v.warnings }),
                ...(v.information === undefined ? null : { information: v.information }),
            };
        });
}