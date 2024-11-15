/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { CreditNotes } from "./creditnotes";
import { Customers } from "./customers";
import { DirectIncomes } from "./directincomes";
import { Invoices } from "./invoices";
import { Payments } from "./payments";
import { SDKReports } from "./sdkreports";

export class AccountsReceivable extends ClientSDK {
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

    private _invoices?: Invoices;
    get invoices() {
        return (this._invoices ??= new Invoices(this.options$));
    }

    private _creditNotes?: CreditNotes;
    get creditNotes() {
        return (this._creditNotes ??= new CreditNotes(this.options$));
    }

    private _customers?: Customers;
    get customers() {
        return (this._customers ??= new Customers(this.options$));
    }

    private _directIncomes?: DirectIncomes;
    get directIncomes() {
        return (this._directIncomes ??= new DirectIncomes(this.options$));
    }

    private _payments?: Payments;
    get payments() {
        return (this._payments ??= new Payments(this.options$));
    }

    private _reports?: SDKReports;
    get reports() {
        return (this._reports ??= new SDKReports(this.options$));
    }
}