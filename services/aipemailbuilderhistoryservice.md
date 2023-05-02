---
description: >-
  The AIPEmailBuilderHistoryService is an Angular service that is responsible
  for managing the undo/redo history of changes made to the email builder.
---

# AIPEmailBuilderHistoryService

This service is abstract and has two implementations: `ProEmailBuilderHistoryService` and `FreeEmailBuilderHistoryService`, based on the user's subscription type.

The `AIPEmailBuilderHistoryService` provides several public methods to control the history of email builder changes, including:

* `addHistory(id: string, diff: rdiffResult[], dirty = false)`: adds a new history record to the manager with the given `id`, `diff` (an array of changes) and `dirty` flag (indicating if the change is clean or not).
* `redo()`: redo the last undone change if there is any, and emit the commit object to `commitPush$`.
* `undo()`: undo the last change if there is any, and emit the commit object to `commitPush$`.
* `clear()`: clears the entire history.

The service also provides properties indicating the history state, including:

* `hasUndo`: a boolean property indicating if there are changes that can be undone.
* `hasRedo`: a boolean property indicating if there are changes that can be redone.
* `hasChanges`: a boolean property indicating if there are changes made to the email builder.

The service uses a third-party library called `js-undo-manager` to manage the undo/redo history. This library provides a Command pattern implementation for recording and undoing/redoing changes.

{% hint style="info" %}
Note that the implementation of the `AIPEmailBuilderHistoryService` service depends on the user's subscription.&#x20;

FreeEmailBuilderHistoryService is used for free subscriptions and does not allow service rewriting, while ProEmailBuilderHistoryService is used for pro subscriptions.
{% endhint %}
