/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as retries$ from "../lib/retries";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class SDKTransfers extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get create transfer model
     *
     * @remarks
     * The *Get create transfer model* endpoint returns the expected data for the request payload when creating a [transfer](https://docs.codat.io/lending-api#/schemas/Transfer) for a given company and integration.
     *
     * [Transfers](https://docs.codat.io/lending-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.
     *
     * **Integration-specific behaviour**
     *
     * See the *response examples* for integration-specific indicative models.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating a transfer.
     *
     */
    async getCreateModel(
        companyId: string,
        connectionId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetCreateTransfersModelResponse> {
        const input$: operations.GetCreateTransfersModelRequest = {
            companyId: companyId,
            connectionId: connectionId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetCreateTransfersModelRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/options/transfers"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get-create-transfers-model",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
        };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetCreateTransfersModelResponse$.inboundSchema.parse({
                        ...responseFields$,
                        PushOption: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(response, [401, 402, 403, 404, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ErrorMessage$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Create transfer
     *
     * @remarks
     * The *Create transfer* endpoint creates a new [transfer](https://docs.codat.io/lending-api#/schemas/Transfer) for a given company's connection.
     *
     * [Transfers](https://docs.codat.io/lending-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.
     *
     * **Integration-specific behaviour**
     *
     * Required data may vary by integration. To see what data to post, first call [Get create transfer model](https://docs.codat.io/lending-api#/operations/get-create-transfers-model).
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating an account.
     *
     */
    async create(
        input: operations.CreateTransferRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.CreateTransferResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.CreateTransferRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.AccountingTransfer, { explode: true });

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/push/transfers"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("allowSyncOnPushComplete", payload$.allowSyncOnPushComplete, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("timeoutInMinutes", payload$.timeoutInMinutes, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "create-transfer",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
        };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.CreateTransferResponse$.inboundSchema.parse({
                        ...responseFields$,
                        AccountingCreateTransferResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(
                response,
                [400, 401, 402, 403, 404, 429, 500, 503],
                "application/json"
            )
        ) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ErrorMessage$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }
}
