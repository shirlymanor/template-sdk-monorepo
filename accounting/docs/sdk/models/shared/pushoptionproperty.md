# PushOptionProperty

## Example Usage

```typescript
import { PushOptionProperty, PushOptionType } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: PushOptionProperty = {
  description: "purse salty even as advanced afterwards",
  displayName: "Peggie_Hegmann70",
  required: false,
  type: PushOptionType.Object,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | A description of the property.                                                                |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The property's display name.                                                                  |
| `options`                                                                                     | [shared.PushOptionChoice](../../../sdk/models/shared/pushoptionchoice.md)[]                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | Record<string, [shared.PushOptionProperty](../../../sdk/models/shared/pushoptionproperty.md)> | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `required`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | The property is required if `True`.                                                           |
| `type`                                                                                        | [shared.PushOptionType](../../../sdk/models/shared/pushoptiontype.md)                         | :heavy_check_mark:                                                                            | The option type.                                                                              |
| `validation`                                                                                  | [shared.PushValidationInfo](../../../sdk/models/shared/pushvalidationinfo.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |