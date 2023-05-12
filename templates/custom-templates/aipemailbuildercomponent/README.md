---
description: >-
  AIPEmailBuilderComponent is an abstract component that provides common
  features for creating and editing email templates.
---

# AIPEmailBuilderComponent

It exposes the following public properties and methods:

### Properties

* `value`: The current `IPEmail` object is being edited. This property is both a getter and a setter.
* `previewDevice`: The current preview device being used, either "desktop", "tablet", or "mobile".
* `deviceSizes`: A map of device sizes for the different preview devices.
* `previewDeviceWidth$`: An observable of the width of the preview device.

### Methods

* `convert()`: Converts the current `IPEmail` object to MJML and HTML and emits the result as an `IMjmlServerResponse` object through the `afterSave` output property.
* `preview()`: Shows a preview of the current `IPEmail` object.
* `changePreviewDevice(device: TPreviewDevice)`: Changes the current preview device to the given device.
* `canDeactivate($event?: Event)`: Method to handle the window `beforeunload` event. It checks if there are unsaved changes and returns a confirmation message before navigating away from the page.

### Events

* `valueChange`: An event emitted when the `value` property changes.
* `afterSave`: An event emitted after successfully saving the current `IPEmail` object.

To use this component, create a class that extends `AIPEmailBuilderComponent` and implement the required methods and events. Then, use this class to create the actual component that will be used in the application.

### Usage

Here's an example:

```typescript
import { Component } from "@angular/core";
import { AIPEmailBuilderComponent } from "./aip-email-builder.component";

@Component({
  selector: "app-email-builder",
  templateUrl: "./email-builder.component.html",
  styleUrls: ["./email-builder.component.scss"],
})
export class EmailBuilderComponent extends AIPEmailBuilderComponent {
  // Implement any required methods or events here
}
```
