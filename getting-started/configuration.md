---
title: How to configure NGB Email Builder
tags:
  - configuration
  - getting started
permalink: /getting-started/configuration
description: This article explains how to configure NGB Email Builder.
---

# Configuration

To configure the NGB Email Builder is pretty straightforward. All you need to do is to add configuration options to the `forRoot` method.

For example, if you bought [Tailwind Email Builder](../templates/default-templates/tailwind-email-builder.md), you can configure it like this:

```typescript
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

@NgModule({
  imports: [
    TailwindEmailBuilderModule.forRoot({
      licenseKey: "your-license-key", // use your own license key for paid versions
      convertorPath: "https://your-custom-path.com", // use your own converter
      historyRecordLimit: 10 // save 10 history records
    })
  ]
})
export class AppModule {
}
```

No matter of the template you did choose, they contain the same `IIPEmailBuilderConfig` configuration options, here's how it looks:

```typescript
export interface IIPEmailBuilderConfig {
  xApiKey?: string;
  licenseKey?: string;
  socialIconsPath?: string;
  convertorPath?: string;
  templatesThumbsPath?: string;
  historyRecordLimit?: number;
  providers?: [
      Type<AIPEmailBuilderService> | null,
      Type<AIPEmailBuilderStorageService> | null,
      Type<AIPEmailBuilderMiddlewareService> | null,
      Type<AIPEmailBuilderRestService> | null,
      Type<AIPEmailBuilderHistoryService> | null,
  ];
}
```

Now let's go one by one and explain each configuration option:

* `xApiKey` (optional): The Wlocalhost converter path API key. Use this if you don't run the converter on your side.
* `licenseKey` (optional): The license key for paid versions of the email builder.
* `socialIconsPath` (optional, paid versions only): A custom path for social icons. Defaults to "[https://www.mailjet.com/images/theme/v1/icons/ico-social](https://www.mailjet.com/images/theme/v1/icons/ico-social)".
* `convertorPath` (optional, paid versions only): A custom converter path. Defaults to "[https://ngb-api.wlocalhost.org](https://ngb-api.wlocalhost.org)".
* `templatesThumbsPath` (optional, paid versions only): A custom path for template thumbnails. Defaults to "[https://ngb-templates.s3.amazonaws.com](https://ngb-templates.s3.amazonaws.com)".
* `historyRecordLimit` (optional, paid versions only): The maximum number of history records the history manager can save. Defaults to 5 for the free version and 20 for paid versions.
* `providers` (optional, paid versions only): An array of types for overriding the default Email Builder services.

For more information about the `providers`, and how to override the services, check the [override default services](../services/rewrite-default-services.md) section.

## Configure the builder in standalone mode

If you want to use the standalone components, you can configure them like this:

```typescript
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(TailwindEmailBuilderModule.forRoot({ ... })),
  ]
});
```

For more information about how to add configurations to standalone components, check the [official documentation page](https://angular.io/guide/standalone-components) or ask us in our [Discord channel](https://discord.gg/S6Yx6yNZSG) for more.
