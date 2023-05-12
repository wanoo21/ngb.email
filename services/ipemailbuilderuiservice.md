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

**Returns:** `true` if the outlet has attached, `false` otherwise.

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
import { IPEmailBuilderUiService } from 'path/to/your/ngx-email-builder/ui/service';

constructor(private emailBuilderUiService: IPEmailBuilderUiService) {}

// Attach a settings portal
this.emailBuilderUiService.attachSettingsPortal(yourSettingsPortalInstance);

// Set the default settings portal
this.emailBuilderUiService.setDefaultSettingsPortal(yourDefaultSettingsPortalInstance);

// Set the settings portal outlet
this.emailBuilderUiService.setSettingsPortalOutlet(yourSettingsPortalOutletInstance);

// Check if the settings portal outlet has attached
const hasAttached = this.emailBuilderUiService.portalOutletHasAttached();

// Subscribe to the currentSettingsPortal$ observable
this.emailBuilderUiService.currentSettingsPortal$.subscribe((currentSettingsPortal) => {
  // Your logic here
});
```

1. Import the IPEmailBuilderUiService and inject it into your component or service using Angular's dependency injection mechanism.
2. Inside your component, define the necessary HTML templates for your settings portal and settings portal outlet. The template should include the `ng-template` tag with a reference variable `settingsPortal` to hold the content of the settings portal. The `cdkPortalOutlet` directive is used to dynamically render the current settings portal inside the `<ng-container>`.
3. Implement the `OnInit` interface in your component and define the necessary logic inside the `ngOnInit` lifecycle hook.
4. Inside the `ngOnInit` method, perform the following tasks using the IPEmailBuilderUiService:

* Attach the settings portal by passing a `CdkPortal` instance created from the `settingsPortal` DOM element using the `attachSettingsPortal()` method of the IPEmailBuilderUiService.
* Set the default settings portal by passing a `CdkPortal` instance created from the `defaultSettingsPortal` DOM element using the `setDefaultSettingsPortal()` method of the IPEmailBuilderUiService.
* Set the settings portal outlet by passing a `CdkPortalOutlet` instance created from the `settingsPortalOutlet` DOM element using the `setSettingsPortalOutlet()` method of the IPEmailBuilderUiService.

You can also use the IPEmailBuilderUiService in other parts of your application. Here are some actions you can perform using its methods:

* Attach a settings portal by passing your settings portal instance to the `attachSettingsPortal()` method.
* Set the default settings portal by passing your default settings portal instance to the `setDefaultSettingsPortal()` method.
* Set the settings portal outlet by passing your settings portal outlet instance to the `setSettingsPortalOutlet()` method.
* Check if the settings portal outlet has been attached by calling the `portalOutletHasAttached()` method. This method returns a boolean value indicating whether the portal outlet has an attached portal.
* Subscribe to the `currentSettingsPortal$` observable to get the currently attached settings portal. Inside the subscription, you can add your custom logic to handle the settings portal as needed. Remember to unsubscribe from the observable when you're done using it to prevent memory leaks.

By following these steps, you can effectively use the IPEmailBuilderUiService in your Angular application to manage the settings portal and settings portal outlet for the email builder.

{% hint style="info" %}
**Note**: There are two concrete implementations of the `IPEmailBuilderUiService`: `ProIPEmailBuilderUiService` the Pro version and `FreeIPEmailBuilderUiService` for the Free version.&#x20;

The appropriate implementation will be provided automatically based on your configuration.
{% endhint %}
