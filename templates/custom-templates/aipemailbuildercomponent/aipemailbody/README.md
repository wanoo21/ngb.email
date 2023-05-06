---
description: >-
  AIPEmailBody is an abstract class that defines the interface for settings to
  interact with the builder. It implements the OnInit and IIPValueChanged
  interfaces and extends the WithSettings class.
---

# AIPEmailBody

### Inputs

* `value` - An `IPEmail` object representing the email content to be displayed.

### Outputs

* `valueChange` - An `EventEmitter` that emits the updated `IPEmail` object when its value changes.

### Properties

* `contentPart$` - A `BehaviorSubject` that tracks whether the component is displaying the `templates` content part.
* `direction` - An object representing the directionality of the email content.
* `emailBuilderService` - The service responsible for converting `IPEmail` objects to MJML and HTML.
* `deviceSizes` - A `Map` of device sizes.
* `previewDevice` - The currently selected preview device.

### Methods

* `convert()` - Converts the current `IPEmail` object to MJML and HTML using the `emailBuilderService`.
* `preview()` - Displays a preview of the current email content.
* `changePreviewDevice(device: TPreviewDevice)` - Changes the selected preview device.
* `canDeactivate($event?: Event): Promise<boolean> | boolean` - Determines whether the user can navigate away from the page, based on whether there are unsaved changes to the email content.
* `markForCheck(): boolean` - Overrides the `markForCheck` method of the parent class `WithSettings`.

### Host Listeners

* `window:beforeunload` - Triggers the `canDeactivate` method when the user attempts to navigate away from the page.

### Host Bindings

* `style` - Binds the host styles, including padding, background color, and flex display properties.
* `dir` - Binds the directionality of the email content.

### Additional Methods

* `getDirectionLabel(dir: TDirection): string` - Returns the directionality label for the given direction.

### Additional Methods

* `deleteStructure(structure: Structure): void` - Deletes a structure from the email content.
* `duplicateStructure(structure: Structure): void` - Duplicates a structure in the email content.
* `ngOnInit()` - Initializes the component, including setting default settings and subscribing to changes in the email content.
* `showTemplateList($event: Event): void` - Displays the list of available templates.
* `changeValue(template: IPEmail): void` - Changes the current `IPEmail` object to the selected template.
* `markForCheck():boolean` - Whether to run a change detector or not.
