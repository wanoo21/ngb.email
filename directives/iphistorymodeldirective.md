---
description: >-
  The IPHistoryModelDirective is a directive that is used to detect changes on a
  form control and then trigger a detection on the root history host element.
---

# IPHistoryModelDirective

It is used when you want to add a record of the form element value to the history manager.

To use this directive, you need to add it to the host element along with any directives that extend the `NgControl` class, such as `ngModel` or `formControl`.

**You also need to add the** [**`ipEmailBuilderHistoryHost`**](ipemailbuilderhistoryhostdirective.md) **directive to the root element.**

When the value of the form control changes, this directive will mark the control as pristine and trigger a detection on the root history host element. This will add a record of the change to the history manager.

Here is an example of how to use the `IPHistoryModelDirective`:

```html
<form [formGroup]="myForm" ipEmailBuilderHistoryHost>
  <input type="text" formControlName="myControl" ipHistoryModel>
</form>
```

In this example, the `ipHistoryModel` directive is added to the `input` element along with the `formControlName` directive.&#x20;

**The** [**`ipEmailBuilderHistoryHost`**](ipemailbuilderhistoryhostdirective.md) **directive is added to the root `form` element.**&#x20;

When the value of the `myControl` form control changes, the `IPHistoryModelDirective` will mark the control as pristine and trigger a detection on the root history host element.
