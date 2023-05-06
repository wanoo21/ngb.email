---
description: >-
  In NGX Email Builder, the providers option in the IIPEmailBuilderConfig
  configuration object allows you to override the default Email Builder services
  with your own custom implementations.
---

# Rewrite Default Services

There are five Email Builder services you can override:

1. `AIPEmailBuilderService`: The core email builder service responsible for managing the email structure, blocks, and content.
2. `AIPEmailBuilderStorageService`: The service responsible for managing the storage of email templates, history records, and other data.
3. `AIPEmailBuilderMiddlewareService`: The service responsible for handling middleware logic, such as allowing or disallowing certain actions (e.g., adding a new block).
4. `AIPEmailBuilderRestService`: The service responsible for making RESTful API calls to convert email templates and perform other server-side operations.
5. `AIPEmailBuilderHistoryService`: The service responsible for managing the history of actions performed in the email builder, allowing for undo and redo functionality.

To override these services, create custom classes that extend the default service classes and implement the desired functionality. Then, include the custom service classes in the `providers` array of the `IIPEmailBuilderConfig` object.

Here's an example of how you might override the `AIPEmailBuilderService`:

Create a custom email builder service:

```typescript
import { AIPEmailBuilderService } from "@wlocalhost/ngx-email-builder";

export class CustomEmailBuilderService extends AIPEmailBuilderService {
  // Add your custom logic and methods here
}
```

Include the custom service class in the `providers` array of the `IIPEmailBuilderConfig` object:

```typescript
import { CustomEmailBuilderService } from "./custom-email-builder.service";

const emailBuilderConfig: IIPEmailBuilderConfig = {
  // Other configurations...
  providers: [
    CustomEmailBuilderService,
    null, // AIPEmailBuilderStorageService - use the default
    null, // AIPEmailBuilderMiddlewareService - use the default
    null, // AIPEmailBuilderRestService - use the default
    null, // AIPEmailBuilderHistoryService - use the default
  ],
};
```

Pass the `emailBuilderConfig` object to the `forRoot` method when importing the email builder module:

```typescript
@NgModule({
  imports: [
    // Other imports...
    TailwindEmailBuilderModule.forRoot(emailBuilderConfig),
  ],
  // Other configurations...
})
export class AppModule {}
```

By following this process, you can override any of the default Email Builder services with your custom implementations to better suit your application's requirements.
