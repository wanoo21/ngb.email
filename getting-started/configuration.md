---
title: How to configure NGX Email Builder
tags:
  - configuration
  - getting started
permalink: /getting-started/configuration
description: This article explains how to configure NGB Email Builder.
---

# Configuration

## Configuration Object

Create a configuration object for the NGB Email Builder that contains the settings and options you want to customize. The configuration object should be of type `TemplateEmailBuilderConfig` (replace `Template` with the name of the template you're using).

Here's a sample configuration object:

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

The `TailwindEmailBuilderModule` provides a `forRoot` method that accepts an optional configuration object of type `IIPEmailBuilderConfig`. You can use this method to customize the behavior of the email builder in your application.

Here's an overview of the available configuration options:

* _`xApiKey`_ (optional): The Wlocalhost converter path API key. Use this if you don't run the converter on your side.
* _`licenseKey`_ (optional): The license key for paid versions of the email builder.
* _`socialIconsPath`_ (optional, paid versions only): A custom path for social icons. Defaults to "[https://www.mailjet.com/images/theme/v1/icons/ico-social](https://www.mailjet.com/images/theme/v1/icons/ico-social)".
* _`convertorPath`_ (optional, paid versions only): A custom converter path. Defaults to "[https://ngb-api.wlocalhost.org](https://ngb-api.wlocalhost.org)".
* _`templatesThumbsPath`_ (optional, paid versions only): A custom path for template thumbnails. Defaults to "[https://ngb-templates.s3.amazonaws.com](https://ngb-templates.s3.amazonaws.com)".
* _`historyRecordLimit`_ (optional, paid versions only): The maximum number of history records the history manager can save. Defaults to 5 for the free version and 20 for paid versions.
* _`providers`_ (optional, paid versions only): An array of types for overriding the default Email Builder services.&#x20;

To configure the `TailwindEmailBuilderModule`, create an `IIPEmailBuilderConfig` object with the desired configuration options, and pass it to the `forRoot` method when importing the module in your `app.module.ts` file.

Example:

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
