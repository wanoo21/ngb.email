# Bootstrap Email Builder Library

This library provides a set of components and services to build email templates using Bootstrap. It is built on top
of [NGB Email Builder](https://ngb.email) and [Bootstrap](https://getbootstrap.com/).

The installation instructions provided here are intended for demo purposes only. For more information on how to install
and use the Bootstrap Email Builder, please refer to
the [documentation](https://docs.ngb.email/templates/default-templates/bootstrap-email-builder).

Before using the Bootstrap Email Builder, you need to:

* Have Bootstrap installed in your project.
* Add `@angular/localize` and `@angular/cdk` to your project.

## Installation

First, install the Bootstrap Email Builder with its dependencies:

```bash
npm install @wlocalhost/ngx-bootstrap-email-builder @wlocalhost/ngx-email-builder recursive-diff
```

Then, add the Bootstrap Email Builder module to your application:

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

For a full list of available options, check out
the [configuration options](https://docs.ngb.email/getting-started/configuration) page.

## Use the Builder in Your Application

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

For more information on how to use the Bootstrap Email Builder, please refer to
the [documentation](https://docs.ngb.email/templates/default-templates/bootstrap-email-builder).
