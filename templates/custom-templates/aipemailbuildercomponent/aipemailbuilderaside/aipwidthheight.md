---
description: >-
  The AIPWidthHeight is an abstract class that provides a base implementation of
  width and height input fields with units.
---

# AIPWidthHeight

### Properties

* `value`: The current value of the width/height input, which can be a number or an object that contains both value and unit properties.
* `label`: The label for the input field.
* `units`: An array of available units to select from.
* `disableValueField`: A boolean that determines whether the value input field should be disabled based on the currently selected unit.
* `hasAuto`: A boolean that determines whether the `auto` property is defined in the `value` object.
* `isAuto`: A boolean that determines whether the `auto` property is set to `true`.
* `valueAsIWidthHeight`: The `value` property cast as an `IWidthHeight` object.
* `options`: An array of objects that contain the label and value of each available unit.

### Methods

* `getUnitLabel(unit: TUnits): string`: Returns the label of the specified unit.
* `toggleAuto(): void`: Toggles the value of the `auto` property in the `value` object.

### Usage

To use `AIPWidthHeight` class,  you need to create a new class that extends `AIPWidthHeight` and implement the necessary methods and properties.&#x20;

Here's an example:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPWidthHeight } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "width-height",
  templateUrl: "./width-height.component.html",
  styleUrls: ["./width-height.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidthHeightComponent extends AIPWidthHeight {
  // Implement any additional properties or methods here
}
```

```html
<div class="flex gap-2">
  <button (click)="toggleAuto()" [class.active]="isAuto" *ngIf="hasAuto" i18n="@@width_height_auto">Auto</button>
  <input type="number" [(ngModel)]="value.value" [disabled]="disableValueField">
  <select class="appearance-none" [(ngModel)]="value.unit" [disabled]="isAuto">
    <option *ngFor="let unit of units" [value]="unit">
      {{getUnitLabel(unit)}}
    </option>
  </select>
</div>
```
