---
description: >-
  The IpCanPipe is a pipe that checks if the end user can or cannot perform an
  action based on the AIPEmailBuilderMiddlewareService.can method.
---

# IpCanPipe

## Methods

#### transform()

This method checks if the end user can or cannot perform an action based on the middleware's `can` method.

**Parameters**:

* `entity` — The email builder entity object. It can be of type `AIPEmailBuilderBlockExtendedOptions`, `IStructure`, or `IPEmail`.
* `action` — The action to be performed. It can be of type `middlewareBlockActions`, `middlewareStructureActions`, or `middlewareEmailActions`.

**Returns**:

* A boolean value that indicates whether the user can perform the specified action on the given entity.

## **Usage**

Here's an example:

```html
<div *ngIf="block | ipCan: 'delete'">
  <button (click)="onDeleteBlock()">Delete Block</button>
</div>
```

In this example, the `*ngIf` directive uses the `IpCanPipe` to check if the current user has permission to delete the `block` component. If the user has permission, the delete button is displayed. If not, the button is hidden.
