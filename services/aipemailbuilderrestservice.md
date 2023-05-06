---
description: >-
  The AIPEmailBuilderRestService is an abstract service that provides an API to
  interact with the email builder convertor.
---

# AIPEmailBuilderRestService

AIPEmailBuilderRestService is an abstract service with an API to convert emails to MJML, get categories and templates of email templates. It returns an observable with the server's response, and has a property for the converter path.

## Properties

* `#convertorPath`: The path to the email convertor.

## Methods

* `convert(email: IPEmail): Observable<IMjmlServerResponse>`: Converts the given email to MJML.

**Parameters**:`email`: The email to be converted.

**Returns**: An observable that resolves to the server's response.

* `tmplCategories$(): Observable<IUserTemplateCategory[]>`: Gets the categories of email templates.

**Returns**: An observable that resolves to the list of categories.

* `tmplCategories$(category?: string, template?: string): Observable<IIPEmail | IUserTemplateCategory[]>`: Gets the email template.

**Parameters**:

* `category` (`string`, optional): The category of the template.
* `template` (`string`, optional): The name of the template.

**Returns**: An observable that resolves to the email template or list of categories.

## Usage

Here's an example of how you could use the `AIPEmailBuilderRestService`:

```typescript
import { Component } from '@angular/core';
import { AIPEmailBuilderRestService } from 'path/to/email-builder-rest.service';
import { IPEmail } from 'path/to/body';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent {
  email: IPEmail = { /* your email data here */ };

  constructor(private emailBuilderRestService: AIPEmailBuilderRestService) {}

  onConvert() {
    this.emailBuilderRestService.convert(this.email)
      .subscribe(response => {
        // do something with the response
        console.log('MJML:', response.mjml);
        console.log('Template:', response.template);
      });
  }

  onGetTemplates() {
    this.emailBuilderRestService.tmplCategories$()
      .subscribe(categories => {
        // do something with the categories
        console.log(categories);
      });
  }

  onGetTemplate(category: string, template: string) {
    this.emailBuilderRestService.tmplCategories$(category, template)
      .subscribe(email => {
        // do something with the email
        console.log(email);
      });
  }
}
```

In the example above, `MyComponent` injects `AIPEmailBuilderRestService` and uses its `convert()`, `tmplCategories$()`, and `tmplCategories$(category, template)` methods to convert an email to MJML, get the categories of email templates, and get a specific email template, respectively.

The `onConvert()`, `onGetTemplates()`, and `onGetTemplate(category, template)` methods are triggered by some event (e.g. button click) in the component's template.
