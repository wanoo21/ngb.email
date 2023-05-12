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

`AIPEmailBuilderService` is an abstract service that provides conversion of `IPEmail` object to ready-to-use MJML and HTML. It also includes an array of standard fonts used in email building. Here is an example usage of the `convert` method:

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

This example demonstrates how to use the `AIPEmailBuilderService` in your Angular application:

1. Import the AIPEmailBuilderService and inject it into your component or service using Angular's dependency injection mechanism.
2. Create an asynchronous function, such as myConvertFunction(), to convert an IPEmail object into ready-to-use MJML and HTML. Call the convert() method of the emailBuilderService and pass the IPEmail object. The method returns a promise with an object containing the mjml and html properties. Use the await keyword to wait for the promise to resolve.
3. Access the array of standard fonts provided by the AIPEmailBuilderService using the `standardFonts` property.

By following these steps, you can integrate the AIPEmailBuilderService into your Angular application and utilize its functionalities for converting IPEmail objects into MJML and HTML formats.

{% hint style="info" %}
**Note**: There are two concrete implementations of the `AIPEmailBuilderService`: `ProAIPEmailBuilderServicefor` the Pro version and `FreeAIPEmailBuilderServicefor` for the Free version.&#x20;

The appropriate implementation will be provided automatically based on your configuration.
{% endhint %}
