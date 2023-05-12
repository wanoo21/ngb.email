---
description: >-
  The IPEmailBuilderColumnDirective is an Angular directive that connects
  columns between each other, allowing users to drag and drop blocks between
  them.
---

# IPEmailBuilderColumnDirective

### Selector

The selector for this directive is:

`[ipEmailBuilderColumn]`

### Properties

#### `data: AIPEmailBuilderBlockExtendedOptions[]`

This input property is an array of `AIPEmailBuilderBlockExtendedOptions` objects that will be used to create the blocks in the column.

#### `withClass: boolean`

This property is used to set the `column` class on the host element.

#### `connectedTo: CdkDropList[]`

This property is a list of connected columns drop lists.

#### `dropListCollection: CdkDropList[]`

This property is a list of all columns drop lists.

### Methods

#### `dropListDropped(drop: CdkDragDrop<AIPEmailBuilderBlockExtendedOptions[]>)`

This method is called when a block is dropped into the column.&#x20;

It transfers the block from its previous container to the current container.

### Usage

To use this directive, add the `ipEmailBuilderColumn` attribute to an HTML element that has the `cdkDropList` directive.&#x20;

The value of the attribute should be an array of `AIPEmailBuilderBlockExtendedOptions` objects.

Usage example:

```html
<div cdkDropList ipEmailBuilderColumn [data]="columnBlocks">
  <ip-email-builder-block *ngFor="let block of columnBlocks" [options]="block"></ip-email-builder-block>
</div>
```
