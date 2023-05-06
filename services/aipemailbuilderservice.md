---
description: >-
  The AIPEmailBuilderService is an abstract service that provides conversion of
  IPEmail object to ready-to-use MJML and HTML. It also includes an array of
  standard fonts used in email building.
---

# AIPEmailBuilderService

By utilizing the AIPEmailBuilderRestService instance, the AIPEmailBuilderService is able to carry out various server-side operations, such as email template conversions, through the execution of RESTful API calls.

## Properties

* `restService: AIPEmailBuilderRestService`: An instance of the `AIPEmailBuilderRestService` used to make RESTful API calls to convert email templates and perform other server-side operations.
* `standardFonts: string[]`: An array of standard fonts used in email building.

## Methods

* `convert(value: IPEmail): Promise<IMjmlServerResponse>:`Converts `IPEmail` object to ready-to-use MJML and HTML.

**Parameters**:`value`: The `IPEmail` object to convert.

**Returns**: A `Promise` that resolves to an `IMjmlServerResponse` object with the MJML and HTML templates.

## Usage

Here's an example of how you might use the `AIPEmailBuilderService`:

```typescript
import { Component } from '@angular/core';
import { AIPEmailBuilderService, IPEmail } from '@wlocalhost/ngx-email-builder';

@Component({
  selector: 'app-email-builder',
  template: `
    <div>{{ mjml }}</div>
    <div>{{ html }}</div>
  `,
})
export class EmailBuilderComponent {
  constructor(private emailBuilderService: AIPEmailBuilderService) {}

  async convertEmail(email: IPEmail) {
    const { mjml, html } = await this.emailBuilderService.convert(email);
    this.mjml = mjml;
    this.html = html;
  }
}
```

In the above example, we use the `AIPEmailBuilderService` to convert an `IPEmail` object to MJML and HTML templates.&#x20;

We call the `convert` method on the service with the `IPEmail` object and await the `Promise` that is returned.&#x20;

The `IMjmlServerResponse` object that is returned contains the MJML and HTML templates, which we then display in the template using interpolation.
