---
description: >-
  The EmailBuilderHistoryHostDirective in @wlocalhost/ngx-email-builder library.
  Watches for option changes and prevents loss of unsaved changes. Used as root
  settings element.
---

# IPEmailBuilderHistoryHostDirective

### Selector

The selector for this directive is:

`[ipEmailBuilderHistoryHost]`

### Properties

#### `ipEmailBuilderHistoryHost: IIPOptionsHistoryContext | undefined`

Input property that defines the context of the history host element, including the host class and object with elements to watch.

#### Methods

**`ngOnInit(): void`**

OnInit lifecycle hook that initializes the directive and calls `detectChanges` with the `isAction` flag set to `false`.

**`detectChanges(isAction: boolean): void`**

Detects differences in options if the user made any changes.&#x20;

If differences are detected, it adds a new history record using `addHistory()` method of `AIPEmailBuilderHistoryService`.

* `isAction`: A boolean flag to specify if the change is an action (i.e., undo or redo).

### Usage

To use the `EmailBuilderHistoryHostDirective`, add the directive to the element that should be treated as the root settings element for the history.&#x20;

Bind the `ipEmailBuilderHistoryHost` input property to an object that defines the context for the history host element.

Here's an example of using the `EmailBuilderHistoryHostDirective` to track changes made to a block's options.

Usage example:

```html
<div ipEmailBuilderHistoryHost [ipEmailBuilderHistoryHost]="{ cmp: block, watch: block.options }">
  <div class="block" [ipEmailBuilderBlock]="block"></div>
</div>
```

In this example, the `ipEmailBuilderHistoryHost` directive is added to a wrapper `div` element that contains a block component.

The `ipEmailBuilderHistoryHost` input property is bound to an object that specifies the `block` component as the host class and the `block.options` object as the elements to watch for changes.&#x20;

Any changes made to the `block.options` object will be detected by the directive and tracked by the `AIPEmailBuilderHistoryService`.
