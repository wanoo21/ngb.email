---
description: >-
  The AIPColor abstract class provides functionality for setting the color of an
  element.
---

# AIPColor

### Properties

The `AIPColor` class provides the following properties:

* `value`: An `@Input` property that specifies the color of the element.
* `disabled`: An `@Input` property that specifies whether is disabled or not.
* `allowTransparent`: An `@Input` property that specifies whether the color input should allow transparency.

### Usage

To use the `AIPColor` class, you need to create a new class that extends `AIPColor` and implement the necessary methods and properties.&#x20;

Here's an example:&#x20;

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPColor } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorComponent extends AIPColor {
  // Implement any additional properties or methods here
}
```

```html
<div class="grid grid-cols-5 gap-2">
  <div class="col-span-4">
    <input type="text" [disabled]="disabled" ipHistoryModel [(ngModel)]="value"
           (ngModelChange)="valueChange.next(i.el.value)"
           placeholder="Color" i18n-placeholder="@@color">
  </div>
 <div class="rounded" [style.background-color]="value" style="overflow: hidden">
   <input class="col-span-1 h-full rounded border py-0" type="color" [(ngModel)]="value" style="width: 119%; margin-left: -6px; margin-top: -6px; height: 150%">
 </div>
</div>
<p i18n="@@leave_empty_for_transparent">Leave empty to make it transparent</p>
```
