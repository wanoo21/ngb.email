---
description: >-
  The IPEmailBuilderHistoryActionDirective directive implements undo and redo
  actions in the email builder.
---

# IPEmailBuilderHistoryActionDirective

### Selector

The selector for this directive is:&#x20;

`[ipEmailBuilderHistoryAction]`

### Properties

#### `historyService: AIPEmailBuilderHistoryService`

This property is a reference to the `AIPEmailBuilderHistoryService` service.

#### `factory: IPEmailBuilderConfig`

This property is a reference to the `IPEmailBuilderConfig` configuration.

#### `enableKeybinding: boolean`

This property is a boolean that determines whether hotkeys are enabled for undo/redo.

#### `isDisabled: boolean`

This property is a boolean that determines whether the button is disabled.

### Methods

#### `keyDown(e: KeyboardEvent)`

This method is called when a key is pressed. It binds the undo/redo actions to the Ctrl+Z, Ctrl+Y, and Ctrl+Shift+Z hotkeys.

#### `onClick()`

This method is called when the button is clicked. It calls the undo/redo action.

### Usage

To use this directive, add the `ipEmailBuilderHistoryAction` attribute to an HTML element.&#x20;

The value of the attribute should be either "redo" or "undo".&#x20;

You can also use the `enableKeybinding` property to enable or disable the hotkeys for undo/redo.

```html
<button ipEmailBuilderHistoryAction="undo" [enableKeybinding]="true">Undo</button>
<button ipEmailBuilderHistoryAction="redo" [enableKeybinding]="true">Redo</button>
```
