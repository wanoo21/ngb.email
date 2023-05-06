---
description: This service provides utilities for the UI of the ngx-email-builder library.
---

# IPEmailBuilderUiService

IPEmailBuilderUiService provides UI utilities for ngx-email-builder, with methods to manage settings and drop lists for columns/structures. It uses `CdkPortal` and `CdkPortalOutlet` and has an observable for the current settings portal.

## Properties

* `columnsDropLists`: A set of drop lists for columns in the email builder UI.
* `structuresDropLists`: A set of drop lists for structures in the email builder UI.
* `currentSettingsPortal`_`$`_: An observable for the currently attached settings portal.

## Methods

* `attachSettingsPortal(portal: IPEmailBuilderSettingsDirective | null): void:`Attaches a settings portal to the email builder UI.

**Parameters:**`portal`: The settings portal to attach.

* `setDefaultSettingsPortal(portal: IPEmailBuilderSettingsDirective): void:`Sets the default settings portal for the email builder UI.

**Parameters:**`portal`: The default settings portal to set.

* `setSettingsPortalOutlet(portalOutlet: CdkPortalOutlet): void:`Sets the settings portal outlet for the email builder UI.

**Parameters:**`portalOutlet`: The settings portal outlet to set.

* portalOutletHasAttached(): boolean: Checks if the settings portal outlet has attached.

**Returns:**`true` if the outlet has attached, `false` otherwise.

## Usage

Here's an example of how you might use the IPEmailBuilderUiService:

```typescript
import { Component, OnInit } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { IPEmailBuilderUiService } from '@wlocalhost/ngx-email-builder';

@Component({
  selector: 'app-email-builder',
  template: `
    <ng-template #settingsPortal>
      <div>Settings Portal Content</div>
    </ng-template>

    <ng-container *cdkPortalOutlet="uiService.currentSettingsPortal$ | async"></ng-container>
  `,
})
export class EmailBuilderComponent implements OnInit {
  constructor(public uiService: IPEmailBuilderUiService) {}

  ngOnInit() {
    // Attach settings portal
    const settingsPortal = document.querySelector('#settingsPortal');
    if (settingsPortal) {
      this.uiService.attachSettingsPortal(new CdkPortal(settingsPortal));
    }

    // Set default settings portal
    const defaultSettingsPortal = document.querySelector('#defaultSettingsPortal');
    if (defaultSettingsPortal) {
      this.uiService.setDefaultSettingsPortal(new CdkPortal(defaultSettingsPortal));
    }

    // Set settings portal outlet
    const settingsPortalOutlet = document.querySelector('#settingsPortalOutlet');
    if (settingsPortalOutlet) {
      this.uiService.setSettingsPortalOutlet(new CdkPortalOutlet(settingsPortalOutlet));
    }
  }
}
```

In the above example, we use the `IPEmailBuilderUiService` to manage the settings portal for the email builder UI.

We create a ng-template with the `#settingsPortal` identifier to be used as the settings portal. Then, we attach this portal to the service using the `attachSettingsPortal()` method.

We also set the default settings portal using the `setDefaultSettingsPortal()` method, and the settings portal outlet using the `setSettingsPortalOutlet()` method.

Finally, we use the `currentSettingsPortal$` observable to bind the current settings portal to the `cdkPortalOutlet` directive in the email builder UI.
