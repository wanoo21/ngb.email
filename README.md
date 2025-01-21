# Angular Email Template Builder

This is an application to build email templates using Angular and is part of the [NGX Email Builder](https://ngb.email) project. It uses [MJML](https://mjml.io/) to generate responsive HTML.
My focus was on logic and functionality, so the design is very basic. But **you can customize the look and feel of it as you like**.

This repo contains 2 main libraries:
- [`ngx-email-builder`](./libs/ngx-email-builder) - The library that contains all the logic as abstract classes to build the email template.
- [`tailwind-email-builder`](./libs/tailwind-email-builder) - The main library that uses `ngx-email-builder` and TailwindCSS to build the email template.

With the help of `ngx-email-builder`, you can create your own email builder with different themes like [Bootstrap](https://ngb.email/bootstrap/), [Material](https://ngb.email/material/), etc.
See the [Tailwind Email Builder](./libs/tailwind-email-builder) library for an example.

But probably _you don't want to create a new theme from scratch_, because it's a lot of work. I created a few themes for you to choose from.

**So you can choose a theme from the list below:**
- [Bootstrap Email Builder](https://ngb.email/bootstrap/) - Bootstrap theme.
- [Material Email Builder](https://ngb.email/material/) - Material theme.
- [Tailwind Email Builder](https://ngb.email/tailwind/) - TailwindCSS theme (default) - this [one](./libs/tailwind-email-builder).
- [Bulma Email Builder](https://ngb.email/bulma/) - Bulma theme.
- [PrimeNG Email Builder](https://ngb.email/primeng/) - PrimeNG theme.

Let me know if you want to create a new theme, I can help you with that.

As I mentioned before, it uses MJML to generate responsive HTML, but it doesn't send the request to the MJML API. With the help of the [NGX Email Builder Converter](https://github.com/wanoo21/Angular-mjml-output) library, and SSR, you can convert the output of this email builder to MJML and HTML on the server-side.
See [server.ts](./apps/root/server.ts) for an example, or check the NGX Email Builder Converter library for more details.

For more information, see the [app.config.ts](./apps/root/src/app/app.config.ts) file and the [project.json](./apps/root/project.json) file - (the assets section).

Yes, **you can export the email template to either HTML or MJML**, but you'll always need to save the output of this email builder [IPEmail](./libs/ngx-email-builder/src/lib/body/body.ts) to database or file to import it later, and then you can do whatever you want with it.

PS: make sure you remove `canonical` link from the [`index.html`](./apps/root/src/index.html) file, before you deploy it to the server - it's only for the SEO purpose on the demo site.

## Features

- **Drag and drop** - Drag and drop components to build your email template.
- **Customizable** - Customize the look and feel of your email template.
- **Responsive** - Create responsive email templates that look great on any device.
- **Export** - Export your email template to HTML and MJML.
- **Internationalization** - Support for multiple languages. (Angular official i18n support)
- **Open source** - Free and open source.
- **MIT License** - Free for personal and commercial use.

## Contributing

Contributions are welcome, feel free to submit a [pull request](/pulls) or an [issue](/issues).

## License

Licensed under the MIT license, see [LICENSE](/LICENSE) for details.
