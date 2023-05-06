---
description: >-
  The AIPFont abstract class provides functionality for setting the font of an
  element.
---

# AIPFont

### Properties

The `AIPFont` class provides the following properties:

* `value`: An `@Input` property that specifies the font of the element.
* `builderService`: An instance of `AIPEmailBuilderService` that provides access to the list of standard fonts.
* `standardFonts`: A read-only property that returns the list of standard fonts.
* `weights`: A read-only property that returns the list of font weights.
* `styles`: A read-only property that returns the list of font styles.

### Usage

To use the `AIPFont` class, you need to create a new class that extends `AIPFont` and implement the necessary methods and properties.&#x20;

Here's an example:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPFont } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "font",
  templateUrl: "./font.component.html",
  styleUrls: ["./font.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontComponent extends AIPFont {
  // Implement any additional properties or methods here
}
```

```html
<div class="flex flex-col">
  <label i18n="@@custom_google_font">Custom Google Font</label>
  <input [(ngModel)]="googleFont" placeholder="Roboto:wght@300;400;700" />
  <p i18n="@@empty_google_font">Leave empty to use standard fonts.</p>
</div>
<div class="flex flex-col pt-2">
  <label *ngIf="!googleFont" i18n="@@standard_font">Standard Font</label>
  <label *ngIf="googleFont" i18n="@@fallback_font">Fallback Font</label>
  <select [(ngModel)]="family" class="appearance-none">
    <option *ngFor="let font of standardFonts" [value]="font">{{font}}</option>
  </select>
  <p *ngIf="googleFont" i18n="@@fallback_font_description">
    Fallback font is used in case custom font is not supported.
  </p>
</div>

<div class="grid grid-cols-3 gap-2 pt-2">
  <div class="flex flex-col">
    <label i18n="@@font_size">Size</label>
    <input [(ngModel)]="value.size" type="number" />
  </div>
  <div class="flex flex-col">
    <label i18n="@@font_weight">Weight</label>
    <select [(ngModel)]="weight" class="appearance-none">
      <option *ngFor="let weight of weights" [value]="weight">{{weight}}</option>
    </select>
  </div>
  <div class="flex flex-col">
    <label i18n="@@font_style">Style</label>
    <select [(ngModel)]="value.style" class="appearance-none">
      <option *ngFor="let style of styles" [value]="style">{{getStyleLabel(style)}}</option>
    </select>
  </div>
</div>
```
