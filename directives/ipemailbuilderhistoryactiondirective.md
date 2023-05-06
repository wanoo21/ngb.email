---
description: >-
  The IPEmailBuilderHistoryActionDirective directive implements undo and redo
  actions in the email builder.
---

# IPEmailBuilderHistoryActionDirective

It can be used by adding it as an attribute to the corresponding HTML element, for example:

```html
<button ipEmailBuilderHistoryAction="undo">Undo</button>
```

### Inputs

* `ipEmailBuilderHistoryAction` (`"redo" | "undo"`, required): Determines whether the action performed by the directive is redo or undo.
* `enableKeybinding` (`boolean`, optional): Determines whether the `Ctrl+Z`/`Ctrl+Y`/`Ctrl+Shift+Z` hotkeys are enabled for the action. Default value is `true`.

### Usage

Example usage:

```typescript
import { Component } from "@angular/core";
import { IPEmailBuilderHistoryActionDirective } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "my-component",
  template: `
    <button ipEmailBuilderHistoryAction="undo">Undo</button>
    <button ipEmailBuilderHistoryAction="redo">Redo</button>
  `,
})
export class MyComponent {
  constructor(private historyAction: IPEmailBuilderHistoryActionDirective) {
    historyAction.enableKeybinding = false;
  }
}
```
