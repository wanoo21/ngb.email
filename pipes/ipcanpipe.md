---
description: >-
  The IpCanPipe is a pipe that allows you to check whether an end user can or
  cannot perform an action based on the can method of the
  AIPEmailBuilderMiddlewareService.
---

# IpCanPipe

This pipe is commonly used in the email builder application to determine whether a user has permission to perform an action on a specific email component.

To use this pipe, simply pass the `entity` and `action` as arguments to the `transform` method.

The `entity` argument is the entity that you want to perform an action on, while the `action` argument is the name of the action that you want to perform.

The `entity` argument can be one of three types: `AIPEmailBuilderBlock`, `IStructure`, or `IPEmail`.&#x20;

* The [`AIPEmailBuilderBlock`](../blocks/aipemailbuilderblock.md) type represents the data for an email builder block component.&#x20;
* The [`IStructure`](../blocks/structure.md) type represents the data for an email builder structure component.&#x20;
* The `IPEmail` type represents the data for an email.

The `action` argument can be one of three types as well:

```typescript
type middlewareBlockActions = "delete" | "duplicate" | "edit";
type middlewareStructureActions = middlewareBlockActions | "save";
type middlewareEmailActions = "preview" | "save";
```

* The `middlewareStructureActions` type represents the actions that can be performed on an [email builder structure](../blocks/structure.md) component.&#x20;
* The `middlewareBlockActions` type represents the actions that can be performed on an email [builder block](../blocks/aipemailbuilderblock.md) component.&#x20;
* The `middlewareEmailActions` type represents the actions that can be performed on an email.

This pipe returns a boolean value indicating whether the end-user has permission to perform the specified action on the email component entity.&#x20;

**If the end-user has permission to perform the action, the pipe returns `true`. Otherwise, it returns `false`.**

Here is an example usage of the `IpCanPipe` in a template:

```html
<div *ngIf="block | ipCan: 'delete'">
  <button (click)="onDeleteBlock()">Delete Block</button>
</div>
```

In this example, the `*ngIf` directive uses the `IpCanPipe` to check if the current user has permission to delete the `block` component. If the user has permission, the delete button is displayed. If not, the button is hidden.
