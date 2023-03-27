---
description: >-
  The IPEmailBuilderDynamicDirective is used to create and insert a block
  dynamically to the view.
---

# IPEmailBuilderDynamicDirective

To use this directive, add the `*ipEmailBuilderDynamicBlockDirective` attribute to the host or current element, and set the directive's **input value to an instance of** [**`AIPEmailBuilderBlock`**](../blocks/aipemailbuilderblock.md)**.**

```html
<div *ipEmailBuilderDynamicBlockDirective="block; let ins"></div>
```

In the example above, the `block` variable is an instance of `AIPEmailBuilderBlock`, which defines the type and options for the dynamic block.&#x20;

The `let ins` syntax creates a local variable called `ins`, which refers to the instance of the dynamic block that was created.

To edit the block, you can call the `edit()` method on the `ins` variable.

```html
<div *ipEmailBuilderDynamicBlockDirective="block; let ins" (click)="ins.edit()"></div>
```

This will open the block's settings editor aside, where you can modify the block's options.
