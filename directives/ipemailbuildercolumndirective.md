---
description: >-
  The IPEmailBuilderColumnDirective is a directive that enables you to connect
  columns between each other in your email builder application.
---

# IPEmailBuilderColumnDirective

This directive requires that you have the `[cdkDropList]` directive on your host or current element.

To use it, add the `[ipEmailBuilderColumn]` attribute to the host element and pass in an array of `AIPEmailBuilderBlockExtendedOptions` objects via the input property of the same name.

```html
<div cdkDropList [ipEmailBuilderColumn]="column">
  <!-- Your column content here -->
</div>
```

In the example above, the `cdkDropList` directive is required as well to enable drag and drop functionality.
