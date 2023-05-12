---
description: >-
  An Angular directive that attaches itself to the main settings portal for IP
  email builder.
---

# IPEmailBuilderSettingsDirective

### Selector

The selector for this directive is:

`[ipEmailBuilderSettings]`

### Properties

* None

### Methods

* None

### Usage

Import the `IPEmailBuilderSettingsDirective` in your component and add it to the component's HTML template.

Usage example:

```html
<ng-container *cdkPortalHost="emailBuilderSettingsPortal">
  <div ipEmailBuilderSettings></div>
</ng-container>
```

{% hint style="info" %}
Note: The `emailBuilderSettingsPortal` is a portal that should be defined in your component.
{% endhint %}
