---
description: >-
  The AIPBackground abstract class provides functionality for setting the
  background image, size, position, and repeat of an element.
---

# AIPBackground

### Properties

The `AIPBackground` class provides the following properties:

* `value`: An `@Input` property that specifies the background image, size, position, and repeat.
* `disabled`: An `@Input` property that specifies whether is disabled or not.
* `unitsOptions`: A readonly property that returns an array of objects representing the available units for the size of the background image.
* `repeatOptions`: A readonly property that returns an array of objects representing the available repeat options for the background image.
* `repeatKeys`: A readonly property that returns an array of the available repeat options for the background image.

### Methods

The `AIPBackground` class provides the following methods:

* `getRepeatLabel(repeat: TBackgroundRepeat): string`: Returns the label for the specified repeat option.
* `getUnitLabel(unit: TUnits): string`: Returns the label for the specified unit.

### Usage

To use the `AIPBackground` class, you need to create a new class that extends `AIPBackground` and implement the necessary methods and properties.&#x20;

Here's an example:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPBackground } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundComponent extends AIPBackground {
  // Implement any additional properties or methods here
}
```

```html
<background-color-picker [(value)]="value.color"></background-color-picker>
<background-image-upload class="pt-2" [(value)]="value.url"></background-image-upload>
<p variant="red-500" i18n="@@value_image_outlook_support">
  Background image has limited support in some Outlook versions.
</p>

<ng-container *ngIf="value.url.length">
  <h3 i18n="@@value_image_repeat" class="pt-2">Background image repeat</h3>
  <div class="grid grid-cols-4 gap-2">
    <button *ngFor="let repeat of repeatKeys" size="xs"
            [class.active]="value.repeat === repeat"
            (click)="value.repeat = repeat"
    >
      {{getRepeatLabel(repeat)}}
    </button>
  </div>
  <h3 i18n="@@value_image_size" class="pt-2">Background image size</h3>
  <div class="grid grid-cols-5 gap-2">
    <button size="xs" [class.active]="value.size.auto"
            (click)="value.size.auto = !value.size.auto" i18n="@@value_image_size_auto">
      Auto
    </button>
    <button *ngFor="let unit of value.size.units" size="xs"
            [class.active]="value.size.unit === unit && !value.size.auto"
            (click)="value.size.unit = unit"
            [disabled]="value.size.auto"
    >
      {{getUnitLabel(unit)}}
    </button>
  </div>

  <div class="mt-1" *ngIf="['%', 'px'].includes(value.size.unit) && !value.size.auto">
    <input type="number" [(ngModel)]="value.size.value">
  </div>
</ng-container>
```
