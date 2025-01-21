# Tailwind Email Builder Library

This library provides a set of components and services to build email templates using Tailwind CSS. It is built on top
of [NGB Email Builder](https://ngb.email) and [Tailwind CSS](https://tailwindcss.com/).

The installation instructions provided here are intended for demo purposes only. For more information on how to install
and use the Tailwind Email Builder, please refer to
the [documentation](https://docs.ngb.email/templates/default-templates/tailwind-email-builder).

Before using the Tailwind Email Builder, you need to:

* Have Tailwind CSS installed in your project.
* Add `@angular/localize` and `@angular/cdk` to your project.

## Installation

First, install the Tailwind Email Builder with its dependencies:

```bash
npm install @wlocalhost/ngx-tailwind-email-builder @wlocalhost/ngx-email-builder recursive-diff
```

Then, add the Tailwind Email Builder module to your application:

```typescript
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

@NgModule({
  imports: [
    TailwindEmailBuilderModule.forRoot({
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

<tail-email-builder [(value)]="email" />
```

Where `email` is an `IPEmail` class:

```typescript
import { IPEmail } from "@wlocalhost/ngx-email-builder";

@Component({ ... })
export class AppComponent {
  email = new IPEmail();
}
```

For more information on how to use the Tailwind Email Builder, please refer to
the [documentation](https://docs.ngb.email/templates/default-templates/tailwind-email-builder).
