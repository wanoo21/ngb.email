---
description: >-
  The IPEmailBuilderUiService is a service that provides functionality for
  handling UI-related tasks in the email builder library.
---

# IPEmailBuilderUiService

This service is provided in the root module, so it can be injected into any component.

Example of how to import the UI Service:

```typescript
// using the old Angular syntax
constructor(private emailBuilderUiService: IPEmailBuilderUiService) {}
// or using the inject function
readonly emailBuilderUiService = inject(IPEmailBuilderUiService);
```

### **Properties**

* `columnsDropLists`: A set of `CdkDropList` objects that are used to manage draggable columns in the email builder.
* `structuresDropLists`: A set of `CdkDropList` objects that are used to manage draggable structures in the email builder.
* `currentSettingsPortal$`: An observable that provides the current settings portal.
* `portalOutletHasAttached()`: A method that checks whether a settings portal has been attached to the current email builder instance.

### **Methods**

* `attachSettingsPortal(portal: IPEmailBuilderSettingsDirective | null): void`: Attaches a settings portal to the current email builder instance.
* `setDefaultSettingsPortal(portal: IPEmailBuilderSettingsDirective): void`: Sets the default settings portal to be used in the email builder.
* `setSettingsPortalOutlet(portalOutlet: CdkPortalOutlet): void`: Sets the settings portal outlet for the email builder.
