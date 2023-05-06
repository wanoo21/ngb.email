---
description: >-
  The AIPBorder abstract class provides functionality for setting the border
  properties of an element, including its style, color, width, and radius.
---

# AIPBorder

### Properties

The `AIPBorder` class provides the following properties:

* `value`: An `@Input` property that specifies the border properties.
* `disabled`: An `@Input` property that specifies whether is disabled or not.
* `styleOptions`: A readonly property that returns an array of objects representing the available border styles.
* `ngValue`: A property that returns the value of `value` as an `IBorder` object.
* `hasOwn(key: keyof IBorder): boolean`: A method that returns `true` if the specified property is present in `value`, and `false` otherwise.

### Methods

The `AIPBorder` class provides the following methods:

* `getStyleLabel(style: IBorder["style"]): string`: Returns the label for the specified border style.

### Usage

To use the `AIPBorder` class, you need to create a new class that extends `AIPBorder` and implement the necessary methods and properties.&#x20;

Here's an example:

<pre class="language-typescript"><code class="lang-typescript">import { ChangeDetectionStrategy, Component } from "@angular/core";
<strong>import { AIPBorder } from "@wlocalhost/ngx-email-builder";
</strong>
@Component({
  selector: "border",
  templateUrl: "./border.component.html",
  styleUrls: ["./border.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
<strong>export class BorderComponent extends AIPBorder {
</strong>  // Implement any additional properties or methods here
}
</code></pre>

```html
<border-color-picker [(value)]="value.color" *ngIf="hasOwn('color')" allowTransparent="false"></border-color-picker>

<div class="grid grid-cols-4 gap-2 mt-2" *ngIf="value.sizes; else width">
  <div class="flex flex-col" *ngFor="let key of borderKeys">
    <label>{{getBorderLabels(key)}}</label>
    <input type="number" [(ngModel)]="value.sizes[key]">
  </div>
</div>

<ng-template #width>
  <div class="flex flex-col gap-2 mt-2">
    <label i18n="@@border_width">Border Width</label>
    <input type="number" [(ngModel)]="value.width"  placeholder="Width"
           i18n-placeholder="@@border_width">
  </div>
</ng-template>

<div class="flex flex-col mt-2">
  <h3 i18n="@@border_radius" *ngIf="hasOwn('radius')">Border Radius</h3>
  <input type="number" tailInput [(ngModel)]="ngValue.radius"  placeholder="Radius"
         i18n-placeholder="@@border_radius">
</div>

<ng-container *ngIf="value.width">
  <h3 i18n="@@border_style" class="pt-2">Border style</h3>
  <div class="grid grid-cols-5 gap-2">
    <button size="xs" *ngFor="let style of styleLabels" [class.active]="value.style === style"
            (click)="value.style = style">
      {{getStyleLabel(style)}}
    </button>
  </div>
</ng-container>
```
