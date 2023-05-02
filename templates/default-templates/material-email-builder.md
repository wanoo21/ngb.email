---
description: Material Email Builder
---

# Material Email Builder

[Angular Material](https://material.angular.io/) is a modern UI component library for Angular applications, featuring Material Design principles to create visually appealing, responsive, and user-friendly interfaces.

We opted to develop the [Material Email Builder](material-email-builder.md) for being a powerful tool utilizing Angular Material's components to create responsive, visually striking email templates with ease.

## Dependencies

* [Angular Localize](https://angular.io/guide/i18n) - used for internationalization.
* [Angular CDK](https://material.angular.io/cdk/categories) - used for drag and drop and other functionality.
* [NGX Email Builder](https://www.npmjs.com/package/@wlocalhost/ngx-email-builder) - used for the core email builder logic.
* [Recursive Diff](https://www.npmjs.com/package/recursive-diff) - used for detecting changes in the email builder.

Before using the PrimeNG Email Builder, you need to:

* Have Angular Material installed in your project.
* Have added `@angular/localize` to your project.
* Have added `@angular/flex-layout` to your project - (Yes still depends on it for the grid).
* Have added `@angular/cdk` to your project.

## Getting started

```bash
npm install @wlocalhost/ngx-md-email-builder @wlocalhost/ngx-email-builder recursive-diffMaterialEmailBuilderModule 
```

and then import the module into your application:

```typescript
import { MaterialEmailBuilderModule} from "@wlocalhost/ngx-md-email-builder";

@NgModule({
  imports: [
    MaterialEmailBuilderModule.forRoot({
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
import { MaterialEmailBuilderModule} from "@wlocalhost/ngx-md-email-builder";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(MaterialEmailBuilderModule.forRoot({ ... })),
  ]
});
```

### Use it in your application

```html
<md-email-builder [(value)]="email"></md-email-builder>
```

Where `email` is an `IPEmail` class:

```typescript
import { IPEmail } from "@wlocalhost/ngx-email-builder";

@Component({ ... })
export class AppComponent {
  email = new IPEmail();
}
```
