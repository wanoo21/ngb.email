---
description: The AIPPadding abstract class is a base class for managing padding values.
---

# AIPPadding

### Properties

* `paddingKeys: string[]` - An array of the padding keys (e.g. `top`, `bottom`, etc.) in the order they are defined in the `IPadding` interface.

### Methods

* `getPaddingLabel(key: keyof IPadding): string` - Returns the label for the specified padding key (e.g. `"Padding Top"`, `"Padding Left"`, etc.).

### Usage

To use the `AIPPadding` class, you need to create a new class that extends `AIPPadding` and implement the necessary methods and properties.&#x20;

Here's an example:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPPadding } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "padding",
  templateUrl: "./padding.component.html",
  styleUrls: ["./padding.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaddingComponent extends AIPPadding {
  // Implement any additional properties or methods here
}
```

```html
<div class="grid grid-cols-4 gap-2">
  <div class="flex flex-col" *ngFor="let key of paddingKeys">
    <label>{{getPaddingLabel(key)}}</label>
    <input type="number" [(ngModel)]="value[key]">
  </div>
</div>
```
