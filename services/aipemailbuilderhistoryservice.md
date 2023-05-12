---
description: >-
  The AIPEmailBuilderHistoryService is an abstract service that provides an
  undo/redo functionality for the email builder.
---

# AIPEmailBuilderHistoryService

The AIPEmailBuilderMiddlewareService provides middleware functions for email builder, allowing users to perform actions and prompts confirmation dialogs.

## Properties

* `hasUndo`: A getter that indicates whether the undo action is available.
* `hasRedo`: A getter that indicates whether the redo action is available.
* `hasChanges`: A getter that indicates whether changes have been made to the undo manager.
* `commitPush$`: An observable that emits the commits made to the undo manager.

## Methods

* `addHistory(id: string, diff: rdiffResult[], dirty = false): void`: Adds an entry to the undo/redo history.
* `redo(): void`: Redoes the last undo action.
* `undo(): void`: Undoes the last action.
* `clear(): void`: Clears the undo/redo history.

**Parameters**:

* `id`: The id of the entry to add.
* `diff`: The difference between the previous state and the current state.
* `dirty` (optional): A boolean indicating whether the entry should be marked as dirty.

## Usage

To use the `AIPEmailBuilderHistoryService` service, you need to inject it into your component, and then use its methods and properties to manage the undo/redo history of the email builder.

Here's an example of how you can use the `AIPEmailBuilderHistoryService`:

```typescript
import { Component } from '@angular/core';
import { AIPEmailBuilderHistoryService } from 'path/to/email-builder-history.service';
import { rdiffResult } from 'recursive-diff';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent {
  private structureId: string = 'structure-1';
  private structureDiff: rdiffResult[] = [{ /* your diff data here */ }];
​
  constructor(private emailBuilderHistoryService: AIPEmailBuilderHistoryService) {}
​
  onUndo() {
    if (this.emailBuilderHistoryService.hasUndo) {
      this.emailBuilderHistoryService.undo();
      // undo the last action
      console.log('Undo successful!');
    } else {
      console.log('No more undo actions available.');
    }
  }
​
  onRedo() {
    if (this.emailBuilderHistoryService.hasRedo) {
      this.emailBuilderHistoryService.redo();
      // redo the last undone action
      console.log('Redo successful!');
    } else {
      console.log('No more redo actions available.');
    }
  }
​
  onClear() {
    this.emailBuilderHistoryService.clear();
    // clear the history
    console.log('History cleared!');
  }
}
```

This example demonstrates how to use the `AIPEmailBuilderHistoryService` in your Angular application:

1. Import the `AIPEmailBuilderHistoryService` and inject it into your component or service using Angular's dependency injection mechanism.
2. To add an entry to the undo/redo history, call the `addHistory()` method on the `historyService`, passing in the entry's ID and the difference (`rdiffResult`) between the previous state and the current state.
3. To undo the last action, check if the hasUndo property is true and then call the undo() method on the historyService.
4. To redo the last undone action, check if the `hasRedo` property is `true` and then call the `redo()` method on the `historyService`.
5. To clear the undo/redo history, call the `clear()` method on the `historyService`.
6. To react to commits made to the undo manager, subscribe to the `commitPush$` observable and handle the commit changes within the subscription.

Make sure to replace `'path/to/email-builder-history.service'`, with the actual paths to the `AIPEmailBuilderHistoryService` files.

By following these steps, you can effectively use the `AIPEmailBuilderHistoryService` in your Angular application to manage undo/redo functionality, clear the history, and react to commit changes in the undo manager.

{% hint style="info" %}
**Note**: There are two concrete implementations of the `AIPEmailBuilderHistoryService`: `ProEmailBuilderHistoryService` for the Pro version and `FreeEmailBuilderHistoryService` for the Free version.&#x20;

The appropriate implementation will be provided automatically based on your configuration.
{% endhint %}
