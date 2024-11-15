/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { BillCreditNotes } from "./billcreditnotes";
import { BillPayments } from "./billpayments";
import { Bills } from "./bills";
import { Suppliers } from "./suppliers";

export class AccountsPayable extends ClientSDK {
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

    private _billCreditNotes?: BillCreditNotes;
    get billCreditNotes() {
        return (this._billCreditNotes ??= new BillCreditNotes(this.options$));
    }

    private _billPayments?: BillPayments;
    get billPayments() {
        return (this._billPayments ??= new BillPayments(this.options$));
    }

    private _bills?: Bills;
    get bills() {
        return (this._bills ??= new Bills(this.options$));
    }

    private _suppliers?: Suppliers;
    get suppliers() {
        return (this._suppliers ??= new Suppliers(this.options$));
    }
}