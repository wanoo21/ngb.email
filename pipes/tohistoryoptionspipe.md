---
description: >-
  The toHistoryOptions pipe is used to transform the current component options
  and send them to the [ipEmailBuilderHistoryHost] directive.
---

# ToHistoryOptionsPipe

## Methods

#### transform()

This method transforms a given component into an object with a `cmp` property and a `watch` property.

**Parameters**:

* `cmp` — The component to transform. It can be of type `AIPEmailBuilderBlock`, `AIPStructure`, or `AIPEmailBody`.

**Returns**:

* An object of type `IIPOptionsHistoryContext<Record<string, any>>` with the `cmp` property set to the given component and the `watch` property set to an empty object.

## **Usage**

Here's an example:

```html
<my-component [ipEmailBuilderHistoryHost]="myComponent | toHistoryOptions"></my-component>
```

To use the `toHistoryOptions` pipe, simply apply it to your component and bind the output to the `ipEmailBuilderHistoryHost` directive.

Where `my-component` is a [`AIPEmailBuilderBlock`](../blocks/aipemailbuilderblock.md), [`AIPStructure` ](../templates/custom-templates/aipemailbuildercomponent/aipemailbody/aipstructure.md)or [`AIPEmailBody`](../templates/custom-templates/aipemailbuildercomponent/aipemailbody/).

