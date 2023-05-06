---
description: >-
  An Angular directive that attaches itself to the main settings portal for IP
  email builder.
---

# IPEmailBuilderSettingsDirective

### Properties

#### `selector`

The selector for the directive is `[ipEmailBuilderSettings]`.

#### `exportAs`

The directive can be exported as `ipSettings`.

### Extends

This directive extends the `CdkPortal` from `@angular/cdk/portal`.

### Usage

Example usage:

```typescript
import { Component } from "@angular/core";
import { IPEmailBuilderSettingsDirective } from "./ipemail-builder-settings.directive";

@Component({
  selector: "app-my-component",
  template: `
    <div [ipEmailBuilderSettings]="mySettings">
      <!-- Content here -->
    </div>
  `
})
export class MyComponent {
  mySettings = {}; // your settings object here
}
```

Then use the `ipEmailBuilderSettings` directive to attach your settings object to the main settings portal.
