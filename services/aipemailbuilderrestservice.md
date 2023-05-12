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

This example demonstrates how to use the `AIPEmailBuilderRestService` in your Angular application:

1. Import the AIPEmailBuilderRestService and inject it into your component or service using Angular's dependency injection mechanism.
2. Inside your component, define the necessary methods and properties to handle the email conversion and template retrieval. In our example, we have a component called MyComponent that includes the necessary methods: `onConvert()`, `onGetTemplates()`, and `onGetTemplate()`.
3. The `onConvert()` method calls the `convert()` method of the `emailBuilderRestService` to convert the email to MJML format. It subscribes to the observable that it returns and adds custom logic inside the subscription to handle the response.
4. The `onGetTemplates()` method calls the `tmplCategories$()` method of the `emailBuilderRestService` to retrieve the categories of email templates. It subscribes to the observable that it returns and adds custom logic inside the subscription to handle the categories.
5. The `onGetTemplate(category: string, template: string)` method calls the `tmplCategories$()` method of the `emailBuilderRestService` with the category and template parameters to retrieve a specific email template. It subscribes to the observable that it returns and adds custom logic inside the subscription to handle the email template.
6. You can also use the AIPEmailBuilderRestService in other parts of your application by following similar steps as mentioned above. Inject the AIPEmailBuilderRestService in the desired component or service and utilize its methods to perform various actions.

Make sure to replace `'path/to/email-builder-rest.service'` and `'path/to/body'` with the actual paths to the AIPEmailBuilderRestService and IPEmail files, respectively.

By following these steps, you can effectively use the AIPEmailBuilderRestService in your Angular application to convert emails to MJML format and retrieve email templates.

{% hint style="info" %}
**Note**: There are two concrete implementations of the `AIPEmailBuilderRestService`: `ProIPEmailBuilderRestService` for the Pro version and `FreeIPEmailBuilderRestService` for the Free version.&#x20;

The appropriate implementation will be provided automatically based on your configuration.
{% endhint %}
