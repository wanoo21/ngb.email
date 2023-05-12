---
description: >-
  ToBodyStructurePipe is a pipe that returns the appropriate TStructureTypes
  based on the given IStructure.
---

# ToBodyStructurePipe

## Methods

#### transform()

The `transform()` method takes an `IStructure` object as input and returns its type (`TStructureTypes`).

**Parameters:**

* `structure`: The `IStructure` object to transform.

**Returns:**

* The type of the structure (`TStructureTypes`).

## Usage

```html
<ng-container *ngFor="let structure of structures">
    <div cdkDrag [cdkDragData]="structure | toBodyStructure">
        {{ structure.type }}
    </div>
</ng-container>
```

In the above example, `structures` is an array of `IStructure` objects.

The `toBodyStructure` pipe transforms each `IStructure` object to its corresponding `TStructureTypes`, which is then set as the `[cdkDragData]` attribute of the `div` element.
