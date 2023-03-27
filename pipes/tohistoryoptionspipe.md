---
description: >-
  The toHistoryOptions pipe is used to transform the current component options
  and send them to the [ipEmailBuilderHistoryHost] directive.
---

# ToHistoryOptionsPipe

It takes in a `AIPEmailBuilderBlock`, `AIPStructure`, or `AIPEmailBody` object as input and returns an object of type `IIPOptionsHistoryContext<Record<string, any>>`.

This pipe is mainly used in conjunction with the [`ipEmailBuilderHistoryHost`](../directives/ipemailbuilderhistoryhostdirective.md) directive to ensure that any changes made to the component options are tracked and can be undone/redone using the [`AIPEmailBuilderHistoryService`](../services/aipemailbuilderhistoryservice.md).

To use the `toHistoryOptions` pipe, simply apply it to your component and bind the output to the `ipEmailBuilderHistoryHost` directive. For example:

```html
<my-component [ipEmailBuilderHistoryHost]="myComponent | toHistoryOptions"></my-component>
```

Where `my-component` is a [`AIPEmailBuilderBlock`](../blocks/aipemailbuilderblock.md), [`AIPStructure`](../templates/custom-templates/aipemailbuildercomponent/aipemailbody/aipstructure.md), or [`AIPEmailBody`](../templates/custom-templates/aipemailbuildercomponent/aipemailbody/) object.
