---
description: Bootstrap Email Builder
---

# Bootstrap Email Builder

[Bootstrap](https://getbootstrap.com/) is a popular CSS framework for building responsive, mobile-first web designs with pre-built components, streamlining custom user interface development.

We chose the[ Bootstrap Email Builder ](bootstrap-email-builder.md)due to our affinity for Bootstrap and its effectiveness in crafting responsive email templates and a wide range of applications. This versatile solution simplifies email template design while maintaining the quality and consistency expected from the Bootstrap framework.

## Dependencies

The Bootstrap Email Builder depends on the following libraries:

* [Angular Localize](https://angular.io/guide/i18n) - used for internationalization.
* [Angular CDK](https://material.angular.io/cdk/categories) - used for drag and drop and other functionality.
* [NGX Email Builder](https://www.npmjs.com/package/@wlocalhost/ngx-email-builder) - used for the core email builder logic.
* [Recursive Diff](https://www.npmjs.com/package/recursive-diff) - used for detecting changes in the email builder.

Before using the Bootstrap Email Builder, you need to:

* Have added Bootstrap to your project. Please visit the [official documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
* Have added `@angular/localize` to your project.
* Have added `@angular/cdk` to your project.

## Getting started

First, you need to install the Bootstrap Email Builder with some dependencies:

```bash
npm install @wlocalhost/ngx-bootstrap-email-builder @wlocalhost/ngx-email-builder recursive-diff
```

and then import the module in your application:

```typescript
import { BootstrapEmailBuilderModule } from "@wlocalhost/ngx-bootstrap-email-builder";

@NgModule({
  imports: [
    BootstrapEmailBuilderModule.forRoot({
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
import { BootstrapEmailBuilderModule} from "@wlocalhost/ngx-bootstrap-email-builder";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BootstrapEmailBuilderModule.forRoot({ ... })),
  ]
})
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

