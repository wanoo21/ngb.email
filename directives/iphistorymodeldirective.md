---
description: >-
  The IPHistoryModelDirective is used to trigger detectChanges on
  EmailBuilderHistoryHostDirective whenever a form control value is changed.
---

# IPHistoryModelDirective

### Selector

The selector for this directive is:

`[ipHistoryModel]`

### **Properties:**

* `ngControl?: NgControl`: The host control element to watch.
* `historyHostDirective?: EmailBuilderHistoryHostDirective`: The history host element.

### **Methods:**

* `ngOnInit(): void`: Angular lifecycle method. Subscribes to changes on the `ngControl` value and triggers the `detectChanges` method on the `historyHostDirective`.
* `ngOnDestroy(): void`: Angular lifecycle method. Cleans up any subscriptions made during the component's lifecycle.

### **Usage:**

The `IPHistoryModelDirective` directive is used to track changes made to a form control and add them to the history manager.&#x20;

To use the directive, add the `[ipHistoryModel]` attribute to the form control element and provide a `EmailBuilderHistoryHostDirective` instance to the `historyHostDirective` property.

Usage example:

```html
<form>
  <input type="text" [(ngModel)]="myValue" [ipHistoryModel]="historyHostDirective" />
</form>

<!-- Add this directive to a parent element of the form -->
<div ipEmailBuilderHistoryHost #historyHostDirective="ipEmailBuilderHistoryHost">
  ...
</div>
```
