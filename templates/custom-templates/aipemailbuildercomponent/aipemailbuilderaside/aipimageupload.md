---
description: The AIPImageUpload abstract class provides functionality for uploading images.
---

# AIPImageUpload

### Properties

The `AIPImageUpload` class provides the following properties:

* `value`: An `@Input` property that specifies the path to the uploaded image.
* `isBackgroundImage`: An `@Input` property that specifies whether the uploaded image is a background image or not.

### Usage

To use the `AIPImageUpload` class, you need to create a new class that extends `AIPImageUpload` and implement the necessary methods and properties.&#x20;

Here's an example:

```typescript
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPImageUpload } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploadComponent extends AIPImageUpload {
  // Implement any additional properties or methods here
}
```

```html
<div class="grid grid-cols-5 gap-2">
  <div class="col-span-4 flex flex-col">
    <label i18n="@@image_source">Image source</label>
    <input type="url" [(ngModel)]="value" placeholder="https://...">
  </div>
  <div class="col-span-1 rounded border overflow-hidden bg-white">
    <img [src]="i.el.value" alt="" class="w-full h-full" *ngIf="i.el.value.length">
  </div>
</div>
```
