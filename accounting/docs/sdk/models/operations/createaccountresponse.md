# CreateAccountResponse

## Example Usage

```typescript
import { CreateAccountResponse } from "@speakeasy-sdks/accounting/sdk/models/operations";
import { DataType, PushOperationStatus } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: CreateAccountResponse = {
  contentType: "<value>",
  createAccountResponse: {
    changes: [
      {
        recordRef: {
          dataType: DataType.Invoices,
        },
      },
    ],
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    completedOnUtc: "2022-10-23T00:00:00Z",
    dataConnectionKey: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    dataType: DataType.Invoices,
    pushOperationKey: "10dcdfc7-c1a2-4f86-a4c7-90999fa56b0a",
    requestedOnUtc: "2022-10-23T00:00:00Z",
    status: PushOperationStatus.Pending,
    statusCode: 203,
  },
  statusCode: 303,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `createAccountResponse`                                                             | [shared.CreateAccountResponse](../../../sdk/models/shared/createaccountresponse.md) | :heavy_minus_sign:                                                                  | Success                                                                             |
| `errorMessage`                                                                      | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md)                   | :heavy_minus_sign:                                                                  | The request made is not valid.                                                      |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |