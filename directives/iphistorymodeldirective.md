---
description: >-
  The IPHistoryModelDirective is used to trigger detectChanges on
  EmailBuilderHistoryHostDirective whenever a form control value is changed.
---

# IPHistoryModelDirective

### Import

To use the `IPHistoryModelDirective`, you need to import it from the `@wlocalhost/ngx-email-builder` library:

```typescript
import { IPHistoryModelDirective } from "@wlocalhost/ngx-email-builder";
```

### Selector

The `IPHistoryModelDirective` is a structural directive that can be applied to any element with an `ngModel` or `formControl` directive:

```html
<input type="text" ngModel ipHistoryModel>
```

### Export As

The directive exports itself as `ipHistoryModel`.

### Usage

The `IPHistoryModelDirective` requires the host element to have an `ngModel`, `formControl` or any other directives that extends an `NgControl` class, as well as an `EmailBuilderHistoryHostDirective`. Once these dependencies are provided, the directive listens for changes to the form control value and triggers the `detectChanges` method on the `EmailBuilderHistoryHostDirective`.

Example usage:

```html
<input type="text" ngModel ipHistoryModel [formControl]="formControl">
```

```typescript
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EmailBuilderHistoryHostDirective, IPHistoryModelDirective } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "my-component",
  templateUrl: "./my-component.component.html",
})
export class MyComponent {
  formControl = new FormControl("");

  constructor(private historyHostDirective: EmailBuilderHistoryHostDirective) {}

  toHistoryOptions(): IIPOptionsHistoryContext {
    return {
      cmp: this.historyHostDirective.value,
      watch: { options: this.formControl.value }
    };
  }
}
```
