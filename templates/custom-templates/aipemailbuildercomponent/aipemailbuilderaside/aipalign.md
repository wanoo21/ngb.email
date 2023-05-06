---
description: >-
  The AIPAlign abstract class provides functionality for aligning elements
  horizontally or vertically. It allows the user to select the alignment mode
  and the desired alignment value.
---

# AIPAlign

### Properties

The `AIPAlign` class provides the following properties:

* `value`: An `@Input` property that specifies the currently selected alignment value.
* `mode`: An `@Input` property that specifies the alignment mode, either "horizontal" or "vertical".
* `disabled`: An `@Input` property that specifies whether is disabled or not.
* `horizontalLabels`: A readonly property that returns an array of horizontal alignment options.
* `verticalLabels`: A readonly property that returns an array of vertical alignment options.
* `horizontalOptions`: A readonly property that returns an array of objects representing the horizontal alignment options with their corresponding labels.
* `verticalOptions`: A readonly property that returns an array of objects representing the vertical alignment options with their corresponding labels.

### Methods

The `AIPAlign` class provides the following methods:

* `getHorizontalAlignLabel(key: TAlign): string`: Returns the label for the specified horizontal alignment value.
* `getVerticalAlignLabel(key: TVerticalAlign): string`: Returns the label for the specified vertical alignment value.

### Usage

To use the `AIPAlign` class, you need to create a new class that extends `AIPAlign` and implement the necessary methods and properties.&#x20;

Here's an example:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPAlign } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "align",
  templateUrl: "./align.component.html",
  styleUrls: ["./align.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlignComponent extends AIPAlign {
  // Implement any additional properties or methods here
}
```

```html
<div class="flex flex-col col-span-1">
  <ng-container *ngIf="mode === 'horizontal'">
    <label i18n="@@horizontal_align">Horizontal Align</label>
    <select [(ngModel)]="value" class="appearance-none" [disabled]="disabled">
      <option *ngFor="let option of horizontalLabels" [value]="option">{{getHorizontalAlignLabel(option)}}</option>
    </select>
  </ng-container>
  <ng-container *ngIf="mode === 'vertical'">
    <label i18n="@@vertical_align">Vertical Align</label>
    <select [(ngModel)]="value" class="appearance-none" [disabled]="disabled">
      <option *ngFor="let option of verticalLabels" [value]="option">{{getVerticalAlignLabel(option)}}</option>
    </select>
  </ng-container>
</div>
```
