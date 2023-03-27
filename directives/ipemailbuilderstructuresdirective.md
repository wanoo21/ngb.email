---
description: >-
  The IPEmailBuilderStructuresDirective is a directive that connects all
  structures' drop lists between each other.
---

# IPEmailBuilderStructuresDirective

This directive is used in the email builder to allow users to drag and drop structures within and between columns.

To use this directive, simply add the `ipEmailBuilderStructures` attribute to a container element that will hold the structures.&#x20;

Bind the value of the `ipEmailBuilderStructures` attribute to an array of structures that you want to display.

```html
<div cdkDropList [ipEmailBuilderStructures]="structures"></div>
```

Where `structures` is an array of [`IStructure`](../blocks/structure.md) objects.

In order to use this directive, the host element must also have the `cdkDropList` directive. This allows the `IPEmailBuilderStructuresDirective` to connect all structures' drop lists between each other, enabling them to be moved and reordered within the email builder.

The directive provides a drop list collection of all the structures' drop lists that is used to connect them with each other.&#x20;

When an item is dropped, the `dropListDropped` method is called to handle the change. This method is responsible for updating the structure's data array to reflect the new position of the item within the list.
