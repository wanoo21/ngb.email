---
description: >-
  The AIPEmailBuilderAside is an abstract class that provides functionality for
  displaying and managing the settings portal in the email builder component.
---

# AIPEmailBuilderAside

### Properties

* `readonly`: An input property that specifies whether the settings portal is in read-only mode.
* `asideSettingsPortal`: A ViewChild property that provides a reference to the `CdkPortalOutlet` directive where the settings portal should be attached.
* `blocks`: A property that contains a list of draggable and droppable blocks for use in the settings portal.
* `structures`: A property that contains a list of draggable and droppable structures for use in the settings portal.
* `activeSettings$`: A property that contains an Observable for the currently active settings portal.
* `columnsDropLists`: A property that returns an array of `CdkDropList` objects representing the columns where blocks can be dragged and dropped.
* `structuresDropLists`: A property that returns an array of `CdkDropList` objects representing the structures where blocks can be dragged and dropped.

### Methods

* `ngOnInit()`: A method that sets the `CdkPortalOutlet` directive for the settings portal and displays a warning message if the directive is missing from the component's HTML.

Usage To use the AIPEmailBuilderAside class, you need to create a new component that extends AIPEmailBuilderAside and implement the necessary methods and properties. In the HTML template for the component, you must include the `CdkPortalOutlet` directive with the `activeSettings$` Observable.

### Usage

Example usage:

```typescript
import { AIPEmailBuilderAside } from "@wlocalhost/ngx-email-builder";
import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkPortalOutlet } from "@angular/cdk/portal";

@Component({
  selector: "app-email-builder-settings",
  template: `
    <ng-container [cdkPortalOutlet]="activeSettings$ | async"></ng-container>
  `,
})
export class EmailBuilderSettingsComponent extends AIPEmailBuilderAside implements OnInit {
  @ViewChild(CdkPortalOutlet, { static: true })
  readonly asideSettingsPortal?: CdkPortalOutlet;
}
```
