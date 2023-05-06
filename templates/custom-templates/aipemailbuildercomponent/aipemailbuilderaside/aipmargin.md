---
description: >-
  The AIPMargin abstract class is used for managing margin values in an email
  builder application.
---

# AIPMargin

### Properties

* `value: IMargin`: The current margin value, with top and bottom margin values in pixels.
* `disabled: boolean`: Whether the margin input is disabled.
* `marginKeys: Array<keyof IMargin>`: An array of margin keys, which include `top` and `bottom`.
* `marginLabels: Map<keyof IMargin, string>`: A map of margin key to label translation strings.

### Usage

To use the `AIPMargin` class, apply the class to a host element and provide the `value`, `disabled`, `marginKeys`, and `marginLabels` inputs.&#x20;

Here's an example:&#x20;

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPMargin } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "margin",
  templateUrl: "./margin.component.html",
  styleUrls: ["./margin.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarginComponent extends AIPMargin {
  // Implement any additional properties or methods here
}
```

```html
<div class="grid grid-cols-2 gap-2">
  <div class="flex flex-col" *ngFor="let key of marginKeys">
    <label>{{getMarginLabel(key)}}</label>
    <input type="number" [(ngModel)]="value[key]">
  </div>
</div>
```
