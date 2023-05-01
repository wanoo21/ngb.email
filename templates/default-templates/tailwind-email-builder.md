# Tailwind Email Builder

[Tailwind](https://tailwindcss.com/) is a utility-first CSS framework for rapidly building custom user interfaces. It's among the popular CSS Frameworks for building responsive, mobile-first websites.

We decided to create a [Tailwind Email Builder](tailwind-email-builder.md) because we love Tailwind and we think it's a great framework for building SaaS products, and not only.

## Getting Started

## Dependencies

The Tailwind Email Builder depends on the following libraries:

- [Tailwind CSS](https://tailwindcss.com/)

### Installation

```bash
npm install @wlocalhost/ngx-tailwind-email-builder
```

### Import the module from NPM

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

### Import the module from source code

TODO

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

## Configure the builder in standalone mode

If you want to use the standalone components, you can configure them like this:

```typescript
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(TailwindEmailBuilderModule.forRoot({ ... })),
  ]
});
```

### Stackblitz Demo

TODO
