# Angular Material Email Builder Library

This library provides a set of components and services to build email templates using Angular Material. It is built on top of [NGB Email Builder](https://ngb.email) and [Angular Material](https://material.angular.io/).

The installation instructions provided here are intended for demo purposes only. For more information on how to install and use the Material Email Builder, please refer to the [documentation](https://docs.ngb.email/templates/default-templates/material-email-builder). 

Before using the Material Email Builder, you need to:
 * Have Angular Material installed in your project.
 * Add `@angular/localize` and `@angular/cdk` to your project.

## Installation

First, install the Material Email Builder with its dependencies:

```bash
npm install @wlocalhost/ngx-md-email-builder @wlocalhost/ngx-email-builder recursive-diff
```

Then, add the Material Email Builder module to your application:

```typescript
import { MaterialEmailBuilderModule } from "@wlocalhost/ngx-md-email-builder";

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

For a full list of available options, check out the [configuration options](https://docs.ngb.email/getting-started/configuration) page.

## Use the Builder in Your Application

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
For more information on how to use the Material Email Builder, please refer to the [documentation](https://docs.ngb.email/templates/default-templates/material-email-builder).
