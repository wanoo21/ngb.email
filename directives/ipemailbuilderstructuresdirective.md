---
description: >-
  An Angular directive that connects all structures' drop lists between each
  other in the IP email builder.
---

# IPEmailBuilderStructuresDirective

### Selector

The selector for this directive is:

`[ipEmailBuilderStructures]`

### Properties

* `data: IStructure[]`: An input property to pass an array of `IStructure` objects.
* `minHeight: number`: A readonly property that sets the minimum height of the directive element to 100%.
* `dropListCollection: Map<CdkDropList, string>`: A getter property that returns a map of all the `CdkDropList` instances of the directive element.

### Methods

* `dropListDropped(event: CdkDragDrop<IStructure[], IStructure[], TStructureTypes>): void`: A method that is triggered when a structure is dragged and dropped onto the `CdkDropList`. It moves the item to a new position in the array of structures or creates a new structure if it is not dropped onto an existing one.

### Usage

Usage example:

```html
<div ipEmailBuilderStructures [data]="structures">
  <div *ngFor="let structure of structures">
    ...
  </div>
</div>
```

In the above example, the `ipEmailBuilderStructures` directive is attached to a `div` element and passed an array of `IStructure` objects using the `data` input property.&#x20;

The structures are displayed using an `ngFor` loop. The `dropListDropped` method is called when a structure is dragged and dropped onto the `div` element.
