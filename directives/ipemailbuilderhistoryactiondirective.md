---
description: >-
  This is a directive that enables the Undo/Redo functionality for the email
  builder.
---

# IPEmailBuilderHistoryActionDirective

It binds the "undo" and "redo" actions to the "Ctrl+Z", "Ctrl+Y", and "Ctrl+Shift+Z" hotkeys, allowing the user to easily go back and forth between previous actions.

To use this directive, add it to an element that should trigger the "undo" or "redo" action. Bind the `ipEmailBuilderHistoryAction` input to either "undo" or "redo".&#x20;

Here's an example of how to use this directive:

```html
<button ipEmailBuilderHistoryAction="undo">Undo</button>
<button ipEmailBuilderHistoryAction="redo">Redo</button>
```

Optionally, you can disable the hotkeys by setting the `enableKeybinding` input to false:

```html
<button ipEmailBuilderHistoryAction="undo" enableKeybinding="false">Undo</button>
<button ipEmailBuilderHistoryAction="redo" enableKeybinding="false">Redo</button>
```

In this example, the two buttons allow the user to undo or redo the last action.&#x20;

The `enableKeybinding` attribute is set to `false` to disable the hotkey bindings for undo and redo. This means that the user can only use the buttons to perform these actions.

{% hint style="danger" %}
Note that this directive is not yet ready to use, so use it with caution.
{% endhint %}
