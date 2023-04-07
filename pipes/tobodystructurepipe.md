# ToBodyStructurePipe

This pipe is used to return the right `TStructureTypes` based on the provided `IStructure`.&#x20;

It is most commonly used for `[cdkDragData]` inside the structure list.

## Usage

In your component's HTML template, you can use the `toBodyStructure` pipe as follows:

```html
<ng-container *ngFor="let structure of structures">
    <div cdkDrag [cdkDragData]="structure | toBodyStructure">
        {{ structure.type }}
    </div>
</ng-container>
```

In the above example, `structures` is an array of `IStructure` objects.

The `toBodyStructure` pipe transforms each `IStructure` object to its corresponding `TStructureTypes`, which is then set as the `[cdkDragData]` attribute of the `div` element.
