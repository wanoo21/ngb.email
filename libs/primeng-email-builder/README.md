# PrimeNG Email Builder Library

This library provides a set of components and services to build email templates using PrimeNG. It is built on top
of [NGB Email Builder](https://ngb.email) and [PrimeNG](https://www.primefaces.org/primeng/).

The installation instructions provided here are intended for demo purposes only. For more information on how to install
and use the PrimeNG Email Builder, please refer to
the [documentation](https://docs.ngb.email/templates/default-templates/primeng-email-builder).

Before using the PrimeNG Email Builder, you need to:

* Have PrimeNG installed in your project.
* Add `@angular/localize` and `@angular/cdk` to your project.

## Installation

First, install the PrimeNG Email Builder with its dependencies:

```bash
npm install @wlocalhost/ngx-primeng-email-builder @wlocalhost/ngx-email-builder recursive-diff
```

Then, add the PrimeNG Email Builder module to your application:

```typescript
import { PrimengEmailBuilderModule } from "@wlocalhost/ngx-primeng-email-builder";

@NgModule({
  imports: [
    PrimengEmailBuilderModule.forRoot({
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
<prime-email-builder [(value)]="email"></prime-email-builder>
```

Where `email` is an `IPEmail` class:

```typescript
import { IPEmail } from "@wlocalhost/ngx-email-builder";

@Component({ ... })
export class AppComponent {
  email = new IPEmail();
}
```
For more information on how to use the PrimeNG Email Builder, please refer to the [documentation](https://docs.ngb.email/templates/default-templates/primeng-email-builder).
=======
Run `nx test primeng-email-builder` to execute the unit tests.

## Installation

You can install this library using either `npm` or `yarn`.

### Using npm

npm i @wlocalhost/ngx-primeng-email-builder

### Using npm

yarn add @wlocalhost/ngx-primeng-email-builder

### Dependencies

tslib

### Documentation

For more information, please refer to the following documentation:

[ngb.email](https://docs.ngb.email)

[primeng-email-builder](https://docs.ngb.email/templates/default-templates/primeng-email-builder)

### Running Unit Tests

nx test primeng-email-builder
