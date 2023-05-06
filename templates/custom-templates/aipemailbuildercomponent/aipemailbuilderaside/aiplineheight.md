---
description: >-
  The AIPLineHeight abstract class provides functionality for setting the line
  height of text.
---

# AIPLineHeight

### Properties

The `AIPLineHeight` class provides the following properties:

* `value`: An `@Input` property that specifies the line height of the text.
* `units`: An `@Input` property that specifies the available units for setting the line height.

### Usage

To use the `AIPLineHeight` class, you need to create a new class that extends `AIPLineHeight` and implement the necessary methods and properties.&#x20;

Here's an example:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPLineHeight } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "line-height",
  templateUrl: "./line-height.component.html",
  styleUrls: ["./line-height.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineHeightComponent extends AIPLineHeight {
  // Implement any additional properties or methods here
}
```

```html
<div class="grid grid-cols-3 gap-2">
  <div class="flex flex-col col-span-1">
    <label i18n="@@line_height">Line Height</label>
    <input type="number" [(ngModel)]="value.value">
  </div>
  <div class="flex flex-col col-span-2">
    <label i18n="@@line_height_unit">Unit</label>
    <select [(ngModel)]="value.unit" class="appearance-none">
      <option *ngFor="let unit of units" [value]="unit">{{getUnitLabel(unit)}}</option>
    </select>
  </div>
</div>
```
