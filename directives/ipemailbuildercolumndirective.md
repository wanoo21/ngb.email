---
description: >-
  A directive that connects columns between each other. This directive is used
  in conjunction with the cdkDropList directive to enable the drag and drop
  functionality within the email builder.
---

# IPEmailBuilderColumnDirective

### Selector

`[ipEmailBuilderColumn]`

### Inputs

* `data: AIPEmailBuilderBlockExtendedOptions[]` - An array of block options for the column.

### Host Binding

* `withClass: boolean` - A class binding that applies the "column" class to the host element.

### Methods

* `connectedTo(): CdkDropList[]` - A method that returns an array of connected columns drop lists.
* `dropListCollection(): CdkDropList[]` - A method that returns an array of all columns drop lists.
* `dropListDropped(drop: CdkDragDrop<AIPEmailBuilderBlockExtendedOptions[]>): void` - A method that is called when an item is dropped on the column drop list. It adds a new block inside the current column.
* `ngDoCheck(): void` - A method that is called during every change detection cycle. It updates the connected columns drop lists.

### Usage

Example usage:

```html
<div
  cdkDropList
  class="column-drop-list"
  [cdkDropListData]="columnOptions.elements"
  (cdkDropListDropped)="columnDropListDropped($event)"
  ipEmailBuilderColumn
  [data]="columnOptions.elements"
></div>
```
