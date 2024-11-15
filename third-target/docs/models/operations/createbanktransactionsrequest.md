# CreateBankTransactionsRequest


## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for a company.                                                                           | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                       |
| `connectionId`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for a connection.                                                                        | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                                       |
| `accountId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for an account.                                                                          |                                                                                                            |
| `timeoutInMinutes`                                                                                         | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Time limit for the push operation to complete before it is timed out.                                      |                                                                                                            |
| `allowSyncOnPushComplete`                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Allow a sync upon push completion.                                                                         |                                                                                                            |
| `accountingCreateBankTransactions`                                                                         | [components.AccountingCreateBankTransactions](../../models/components/accountingcreatebanktransactions.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |