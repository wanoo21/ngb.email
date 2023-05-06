---
description: >-
  The AIPLink abstract class provides functionality for setting the properties
  of a link.
---

# AIPLink

### Properties

The `AIPLink` class provides the following properties:

* `value`: An `@Input` property that specifies the properties of the link.

### Methods

The `AIPLink` class provides the following methods:

* `getTargetLabel(target: TLinkTarget): string`: A method that returns the label for a given link target.

### Usage

To use the `AIPLink` class, you need to create a new class that extends `AIPLink` and implement the necessary methods and properties.&#x20;

Here's an example:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPLink } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent extends AIPLink {
  // Implement any additional properties or methods here
}
```

```html
<div class="grid grid-cols-3 gap-2">
  <div class="flex flex-col col-span-2">
    <label i18n="@@link">Link</label>
    <input type="text" [(ngModel)]="value.href" placeholder="https://..." i18n-placeholder="@@link_placeholder">
  </div>
  <div class="flex flex-col col-span-1">
    <label i18n="@@link_target">Target</label>
    <select class="appearance-none" [(ngModel)]="value.target">
      <option *ngFor="let target of targets" [value]="target">
        {{getTargetLabel(target)}}
      </option>
    </select>
  </div>
</div>
```
