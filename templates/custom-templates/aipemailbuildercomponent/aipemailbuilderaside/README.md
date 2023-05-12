---
description: >-
  The AIPEmailBuilderAside is an abstract class that provides functionality for
  displaying and managing the settings portal in the email builder component.
---

# AIPEmailBuilderAside

### Properties

* `readonly: boolean` - A boolean value indicating whether the email builder is in read-only mode.
* `isOpen: boolean` - A boolean value indicating whether the settings panel is open.
* `builderUiService: BuilderUiService` - A service that provides access to the current settings and other builder UI state.
* `currentSettingsPortal$: Observable<any>` - An observable that emits the current settings for the email builder.

### Methods

`AIPEmailBuilderAside` does not define any additional methods beyond those of the base `AIPEmailBuilderAside` component.

### Events

`AIPEmailBuilderAside` does not define any additional events beyond those of the base `AIPEmailBuilderAside` component.

### Usage

Here's an example:

```typescript
import { AIPEmailBuilderAside } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "my-email-aside",
  templateUrl: "./email-aside.component.html",
})
export class EmailAsideComponent extends AIPEmailBuilderAside implements OnInit {
  // Define additional properties and methods as needed.
}
```

Using `my-email-aside` selector in your template:

```html
<my-email-aside></my-email-aside>
```

In this example, the `AIPEmailBuilderAside` component is displayed as a standalone component.&#x20;

The component automatically retrieves the current settings from the `builderUiService` provided by the `AIPEmailBuilder` component, and displays them in the settings panel.&#x20;

If the email builder is in read-only mode, the component will display the settings panel as read-only.&#x20;

The `isOpen` property can be used to toggle the visibility of the settings panel, and any changes made to the settings will be emitted through the `currentSettingsPortal$` observable.
