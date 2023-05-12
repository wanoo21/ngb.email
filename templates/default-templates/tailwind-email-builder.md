---
title: Tailwind Email Builder
description: Tailwind Email Builder
---

# Tailwind Email Builder

[Tailwind](https://tailwindcss.com/) is a popular utility-first CSS framework for building custom user interfaces. We created the Tailwind Email Builder because we love Tailwind and think it's a great framework for building SaaS products.

## Dependencies

The Tailwind Email Builder depends on the following libraries:

* [Tailwind CSS](https://tailwindcss.com/) for styling the email builder.
* [Angular Localize](https://angular.io/guide/i18n) for internationalization.
* [Angular CDK](https://material.angular.io/cdk/categories) for drag and drop and other functionality.
* [NGX Email Builder](https://www.npmjs.com/package/@wlocalhost/ngx-email-builder) for the core email builder logic.
* [Recursive Diff](https://www.npmjs.com/package/recursive-diff) for detecting changes in the email builder.

Before using the Tailwind Email Builder, you need to:

* Add `@angular/localize` and `@angular/cdk` to your project.

## Getting Started

First, install the Tailwind Email Builder with its dependencies:

```bash
npm install @wlocalhost/ngx-tailwind-email-builder @wlocalhost/ngx-email-builder recursive-diff
```

Then, import the module in your application:

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

For a full list of available options, check out the [configuration options](../../getting-started/configuration.md) page.

### Configure the Builder in Standalone Mode

If you want to use standalone components, you can configure them like this:

```typescript
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(TailwindEmailBuilderModule.forRoot({ ... })),
  ]
});
```

### Use it in your application

```html
<tail-email-builder [(value)]="email"></tail-email-builder>
```

Where `email` is an `IPEmail` class:

```typescript
import { IPEmail } from "@wlocalhost/ngx-email-builder";

@Component({ ... })
export class AppComponent {
  email = new IPEmail();
}
```
