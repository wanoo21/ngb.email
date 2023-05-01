---
title: Tailwind Email Builder
description: Tailwind Email Builder
---

# Tailwind Email Builder

[Tailwind](https://tailwindcss.com/) is a utility-first CSS framework for rapidly building custom user interfaces. It's among the popular CSS Frameworks for building responsive, mobile-first websites.

We decided to create a [Tailwind Email Builder](tailwind-email-builder.md) because we love Tailwind and we think it's a great framework for building SaaS products, and not only.

## Dependencies

The Tailwind Email Builder depends on the following libraries:

- [Tailwind CSS](https://tailwindcss.com/) - used for styling the email builder.
- [Angular Localize](https://angular.io/guide/i18n) - used for internationalization.
- [Angular CDK](https://material.angular.io/cdk/categories) - used for drag and drop and other functionality.
- [NGX Email Builder](https://www.npmjs.com/package/@wlocalhost/ngx-email-builder) - used for the core email builder logics.
- [Recursive Diff](https://www.npmjs.com/package/recursive-diff) - used for detecting changes in the email builder.

Before using the Tailwind Email Builder, you need to:
- Have added `@angular/localize` to your project.
- Have added `@angular/cdk` to your project.

## Getting started

First you need to install the Tailwind Email Builder with some dependencies:

```bash
npm install @wlocalhost/ngx-tailwind-email-builder @wlocalhost/ngx-email-builder recursive-diff
```

and then import the module in your application:

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
For the list of all available options, please check the [configuration options](../../getting-started/configuration.md) page.

### Configure the builder in standalone mode

If you want to use the standalone components, you can configure them like this:

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

<ngx-tailwind-email-builder [(value)]="email"></ngx-tailwind-email-builder>
```

Where `email` is an `IPEmail` class:

```typescript
import { IPEmail } from "@wlocalhost/ngx-email-builder";

@Component({ ... })
export class AppComponent {
  email = new IPEmail();
}
```

### Stackblitz Demo

You can find a demo of the Tailwind Email Builder on [Stackblitz](https://stackblitz.com/edit/ngx-tailwind-email-builder).
