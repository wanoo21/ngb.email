---
description: >-
  The AIPEmailBuilderHistoryService is an Angular service that is responsible
  for managing the undo/redo history of changes made to the email builder.
---

# AIPEmailBuilderHistoryService

This service is abstract and has two implementations: `ProEmailBuilderHistoryService` and `FreeEmailBuilderHistoryService`, which are used based on the type of subscription the user has.

The `AIPEmailBuilderHistoryService` provides several public methods that allow for controlling the history of changes made to the email builder, including:

* `addHistory(id: string, diff: rdiffResult[], dirty = false)`: adds a new history record to the manager with the given `id`, `diff` (an array of changes) and `dirty` flag (indicating if the change is clean or not).
* `redo()`: redo the last undone change if there is any, and emit the commit object to `commitPush$`.
* `undo()`: undo the last change if there is any, and emit the commit object to `commitPush$`.
* `clear()`: clears the entire history.

The service also provides some properties that indicate the state of the history, including:

* `hasUndo`: a boolean property that indicates whether there are any changes that can be undone.
* `hasRedo`: a boolean property that indicates whether there are any changes that can be redone.
* `hasChanges`: a boolean property that indicates whether there are any changes that have been made to the email builder.

The service uses a third-party library called `js-undo-manager` to manage the undo/redo history. This library provides an implementation of the Command pattern that can be used to record and undo/redo changes.

{% hint style="info" %}
Note that the implementation of the `AIPEmailBuilderHistoryService` service depends on the user's subscription.&#x20;

If the user has a free subscription, the `FreeEmailBuilderHistoryService` implementation will be used, which does not allow for rewriting the service.&#x20;

If the user has a pro subscription, the `ProEmailBuilderHistoryService` implementation will be used.
{% endhint %}
