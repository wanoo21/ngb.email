---
description: >-
  EmailBuilderHistoryHostDirective is a directive that watches the options and
  makes sure you don't leave without unsaved changes.
---

# IPEmailBuilderHistoryHostDirective

It works as a root settings element for history logic. To use this directive, add it to your HTML template like this:

```html
<ng-container [ipEmailBuilderHistoryHost]="this | toHistoryOptions"></ng-container>
```

[ToHistoryOptionsPipe](../pipes/tohistoryoptionspipe.md) is a pipe that transforms the current component options and sends them to the `EmailBuilderHistoryHostDirective`. **It is used to pass the options to the directive.**
