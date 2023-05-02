---
description: PrimeNg Email Builder
---

# PrimeNg Email Builder

[PrimeNG ](https://primeng.org/)is a rich UI component library for Angular, offering a diverse collection of customizable components to create elegant and responsive web applications with ease.

Our[ PrimeNG Email Builder](primeng-email-builder.md) is a powerful tool for creating responsive and visually appealing email templates, leveraging the extensive PrimeNG UI component library for Angular applications.

## Dependencies

* [Angular Localize](https://angular.io/guide/i18n) - used for internationalization.
* [Angular CDK](https://material.angular.io/cdk/categories) - used for drag and drop and other functionality.
* [NGX Email Builder](https://www.npmjs.com/package/@wlocalhost/ngx-email-builder) - used for the core email builder logics.
* [Recursive Diff](https://www.npmjs.com/package/recursive-diff) - used for detecting changes in the email builder.

Before using the PrimeNG Email Builder, you need to:

* Have PrimeNG installed in your project.
* Have added `@angular/localize` to your project.
* Have added `@angular/cdk` to your project.

## Getting started

```bash
npm install @wlocalhost/ngx-primeng-email-builder @wlocalhost/ngx-email-builder recursive-diff
```

and then import the module in your application:

```typescript
import { PrimengEmailBuilderModule } from "@wlocalhost/ngx-primeng-email-builder";

@NgModule({
  imports: [
    PrimengEmailBuilderModule.forRoot({
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
import { PrimengEmailBuilderModule } from "@wlocalhost/ngx-primeng-email-builder";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(PrimengEmailBuilderModule .forRoot({ ... })),
  ]
});
```

### Use it in your application

```html
<bt-email-builder [(value)]="email"></bt-email-builder>
```

Where `email` is an `IPEmail` class:

```typescript
import { IPEmail } from "@wlocalhost/ngx-email-builder";

@Component({ ... })
export class AppComponent {
  email = new IPEmail();
}
```
