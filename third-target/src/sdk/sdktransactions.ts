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

export class SDKTransactions extends ClientSDK {
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
     * List transactions
     *
     * @remarks
     * The *List transactions* endpoint returns a list of [transactions](https://docs.codat.io/lending-api#/schemas/Transaction) for a given company's connection.
     *
     * [Transactions](https://docs.codat.io/lending-api#/schemas/Transaction) provide an immutable source of up-to-date information on income and expenditure.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
     *
     */
    async list(
        input: operations.ListBankingTransactionsRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ListBankingTransactionsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.ListBankingTransactionsRequest$.outboundSchema.parse(value$),
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
            "/companies/{companyId}/connections/{connectionId}/data/banking-transactions"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("orderBy", payload$.orderBy, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("pageSize", payload$.pageSize, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("query", payload$.query, { explode: true, charEncoding: "percent" }),
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
            operationID: "list-banking-transactions",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: [
                "400",
                "401",
                "402",
                "403",
                "404",
                "409",
                "429",
                "4XX",
                "500",
                "503",
                "5XX",
            ],
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
                    return operations.ListBankingTransactionsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        BankingTransactions: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(
                response,
                [400, 401, 402, 403, 404, 409, 429, 500, 503],
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

    /**
     * Get bank transaction
     *
     * @remarks
     * The *Get transaction* endpoint returns a single transaction for a given transactionId.
     *
     * [Transactions](https://docs.codat.io/lending-api#/schemas/Transaction) provide an immutable source of up-to-date information on income and expenditure.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions) for integrations that support getting a specific transaction.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
     *
     */
    async get(
        companyId: string,
        connectionId: string,
        transactionId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetBankingTransactionResponse> {
        const input$: operations.GetBankingTransactionRequest = {
            companyId: companyId,
            connectionId: connectionId,
            transactionId: transactionId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetBankingTransactionRequest$.outboundSchema.parse(value$),
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
            transactionId: enc$.encodeSimple("transactionId", payload$.transactionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/data/banking-transactions/{transactionId}"
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
            operationID: "get-banking-transaction",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["401", "402", "403", "404", "409", "429", "4XX", "500", "503", "5XX"],
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
                    return operations.GetBankingTransactionResponse$.inboundSchema.parse({
                        ...responseFields$,
                        BankingTransaction: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(
                response,
                [401, 402, 403, 404, 409, 429, 500, 503],
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
