---
description: >-
  An Angular directive that connects all structures' drop lists between each
  other in the IP email builder.
---

# IPEmailBuilderStructuresDirective

### Properties

#### `selector`

The selector for the directive is `[ipEmailBuilderStructures]`.

#### `exportAs`

The directive can be exported as `ipStructures`.

#### `data`

An input property that accepts an array of `IStructure` objects. It is required for the directive to work properly.

```typescript
@Input("ipEmailBuilderStructures") data!: IStructure[];
```

#### `minHeight`

A readonly host binding property that sets the minimum height of the directive's host element.

```typescript
@HostBinding("style.minHeight.%") readonly minHeight = 100;
```

#### `dropListCollection`

A getter method that returns the collection of all structures' drop lists in the email builder.

```typescript
get dropListCollection() {
  return this.builderUiService.structuresDropLists;
}
```

### Methods

#### `dropListDropped(event: CdkDragDrop<IStructure[], IStructure[], TStructureTypes>)`

A method that handles the drop event of the directive's drop list. It moves the dropped item within the same list or adds it to a new list if it's from a different list.

```typescript
dropListDropped(event: CdkDragDrop<IStructure[], IStructure[], TStructureTypes>) {
  const { container, previousContainer, currentIndex, previousIndex, item } = event;
  if (this.builderUiService.structuresDropLists.has(previousContainer)) {
    moveItemInArray(container.data, previousIndex, currentIndex);
  } else {
    container.data.splice(currentIndex, 0, new Structure(item.data));
  }
}
```

### Extends

This directive extends the `AbstractEmailBuilderDropList` from the IP email builder.

### Usage

Example usage:

```typescript
import { Component } from "@angular/core";
import { IPEmailBuilderStructuresDirective } from "./ipemail-builder-structures.directive";

@Component({
  selector: "app-my-component",
  template: `
    <div [ipEmailBuilderStructures]="myStructures">
      <!-- Content here -->
    </div>
  `
})
export class MyComponent {
  myStructures = []; // your structures array here
}
```

Then use the `ipEmailBuilderStructures` directive to connect all structures' drop lists between each other.
