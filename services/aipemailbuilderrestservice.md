---
description: >-
  The AIPEmailBuilderRestService is a core service in the NGX Email Builder
  library that provides an abstract interface for communicating with the email
  builder's REST API.
---

# AIPEmailBuilderRestService

The service is designed to work with both the free and pro versions of the email builder and includes all the necessary methods for working with email templates and categories.

Here are some key features of the `AIPEmailBuilderRestService`:

* **Convert Email**: The `convert()` method is used to convert an email object into MJML using the email builder's REST API. The method returns an observable that emits the server's response as an `IMjmlServerResponse` object.

Example usage:

```typescript
const email: IPEmail = { /* ... */ };
this.emailBuilderRestService.convert(email).subscribe(response => {
  console.log(response.mjml); // "MJML code goes here"
});
```

* **Get Category Templates**: The getCategoryTemplates() method can be used to retrieve a list of templates within a specific category by passing the category name and optional template name as parameters. The method returns an observable that emits an IIPEmail object containing the selected template's data.

Example usage:

```typescript
const categoryName = "someCategoryName";
const templateName = "someTemplateName"; // optional
this.emailBuilderRestService.getCategoryTemplates(categoryName, templateName).subscribe(templates => {
  console.log(templates); // array of IIPEmail objects
});
```

