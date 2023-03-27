---
description: >-
  The IPEmailBuilderSettingsDirective is an important directive that attaches
  itself to the main settings portal.
---

# IPEmailBuilderSettingsDirective

It provides a way to dynamically add the settings portal to an aside where all settings belong.

```html
<ng-container *ipEmailBuilderSettings>
 <!-- Your settings components here -->
</ng-container>
```

This directive has an export name of `ipSettings` which can be used in your component or template to refer to this directive.
