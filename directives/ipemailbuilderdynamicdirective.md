---
description: >-
  The IPEmailBuilderDynamicDirective creates and inserts email builder blocks
  dynamically in the view and requires the cdkDrag directive.
---

# IPEmailBuilderDynamicDirective

### Selector

The selector for this directive is:&#x20;

`[ipEmailBuilderDynamicBlockDirective]`

### Properties

#### `context: IPEmailBuilderDynamicDirectiveContext`

This property is an object that defines the default context for the dynamic block.

#### `blocksData: IIPEmailBuilderBlockData[]`

This property is an array of `IIPEmailBuilderBlockData` objects that define the available blocks.

#### `viewContainerRef: ViewContainerRef`

This property is a reference to the view container of the host element.

#### `templateRef: TemplateRef<IPEmailBuilderDynamicDirectiveContext>`

This property is a reference to the template that will be used to create the dynamic block.

#### `differs: KeyValueDiffers`

This property is a reference to the `KeyValueDiffers` service.

#### `cdkDrag: CdkDrag | undefined`

This property is a reference to the `CdkDrag` directive that is attached to the host element.

### Methods

#### `ngDoCheck()`

This method is called whenever the data in the dynamic block is checked.&#x20;

It updates the incoming context with updated details.

### Usage

To use this directive, add the `ipEmailBuilderDynamicBlockDirective` attribute to an HTML element that has the `cdkDrag` directive.&#x20;

The value of the attribute should be an `AIPEmailBuilderBlockExtendedOptions` object.

Usage example:

```html
<div cdkDrag ipEmailBuilderDynamicBlockDirective [options]="blockOptions"></d
```
