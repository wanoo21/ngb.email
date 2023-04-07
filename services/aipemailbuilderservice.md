---
description: >-
  The AIPEmailBuilderService is an abstract service that provides functionality
  for converting an IPEmail object into a ready-to-use MJML and HTML template.
---

# AIPEmailBuilderService

This service also exposes a list of standard fonts that can be used in an email template.

The service has two implementations: `ProIPEmailBuilderService` for the Pro version of the library, and `FreeIPEmailBuilderService` for the free version of the library.

Here are some key features of the `AIPEmailBuilderService`:

*   **convert(value: IPEmail): Promise\<IMjmlServerResponse>**: This method accepts an `IPEmail` object and returns a `Promise` that resolves to an object with `mjml` and `html` properties containing the MJML and HTML versions of the email.

    Example usage:

    ```typescript
    const email = {
      subject: "Welcome to our Newsletter!",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      sender: "John Doe <johndoe@example.com>",
      recipients: [
        "jane@example.com",
        "jim@example.com"
      ],
      attachments: []
    };

    const response = await this.emailBuilderService.convert(email);
    console.log(response.mjml);
    console.log(response.html);
    ```
*   **standardFonts**: This property is an array of standard fonts that can be used in an email template.

    Example usage:

    ```typescript
    console.log(this.emailBuilderService.standardFonts);
    // Output: 
    // ["Palatino Linotype, Book Antiqua, Palatino, serif", 
    //  "Times New Roman, Times, serif",
    //  "Arial, Helvetica, sans-serif",
    //  "Arial Black, Gadget, sans-serif",
    //  "Comic Sans MS, cursive, sans-serif",
    //  "Impact, Charcoal, sans-serif",
    //  "Lucida Sans Unicode, Lucida Grande, sans-serif",
    //  "Tahoma, Geneva, sans-serif",
    //  "Trebuchet MS, Helvetica, sans-serif",
    //  "Verdana, Geneva, sans-serif",
    //  "Courier New, Courier, monospace",
    //  "Lucida Console, Monaco, monospace"]
    ```

The `AIPEmailBuilderService` is injected as a dependency in other components and services to enable email-building functionalities. For example, here's how to use `AIPEmailBuilderService` in a component:

```typescript
import { Component } from '@angular/core';
import { AIPEmailBuilderService } from 'ngx-email-builder';

@Component({
  selector: 'app-email-builder',
  templateUrl: './email-builder.component.html'
})
export class EmailBuilderComponent {
  constructor(private emailBuilderService: AIPEmailBuilderService) {}
  
  // Use the emailBuilderService to convert an email object
  async convertEmail(email: IPEmail) {
    const response = await this.emailBuilderService.convert(email);
    console.log(response.mjml);
    console.log(response.html);
  }
}
```
