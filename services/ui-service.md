# UI Service

Service for managing the UI of the email builder, such as the **settings portal outlet and the Structures and Columns drop lists.**

This service is provided in the root module, so it can be injected into any component.

Example of how to import the UI Service:

```typescript
// using the old Angular syntax
constructor(private emailBuilderUiService: IPEmailBuilderUiService) {}
// or using the inject function
readonly emailBuilderUiService = inject(IPEmailBuilderUiService);
```

The following properties are available:

* `columnsDropLists` - Contains all columns drop lists that are currently available.
* `structuresDropLists` - Contains all structures drop lists that are currently available.
* `currentSettingsPortal$` - Current settings portal that is attached to the settings portal outlet.

The following methods are available:

```typescript
// Attach a portal to the settings portal outlet
attachSettingsPortal(portal: IPEmailBuilderSettingsDirective | null): void
```

```typescript
// Set the default settings portal to use when no other portal is attached
setDefaultSettingsPortal(portal: IPEmailBuilderSettingsDirective): void
```

<pre class="language-typescript"><code class="lang-typescript"><strong>// Set the settings portal outlet
</strong><strong>setSettingsPortalOutlet(portalOutlet: CdkPortalOutlet): void
</strong></code></pre>

```typescript
// Check if the settings portal outlet has a portal attached
portalOutletHasAttached(): boolean
```
