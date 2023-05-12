---
description: >-
  The ColumnStylesPipe is an email builder pipe that returns column styles based
  on the index and the structure options.
---

# ColumnStylesPipe

## Methods

#### transform()

This method transforms the `IPEmail` object to a `SafeUrl` object for previewing. It returns an Observable of `SafeUrl` object that can be used for previewing.

**Parameters:**

* `value`: The `IPEmail` object to be previewed.

**Returns:**

* An `Observable<SafeUrl>` that can be used for previewing.

## **Usage**

Here's an example:

```html
<div [ngStyle]="columnIndex | ipColumnStyles: structureOptions"></div>
```

In the above example, `columnIndex` is the index of the column whose styles you want to retrieve, and `structureOptions` is the options of the [Structure ](../blocks/structure.md)that contains the column.&#x20;

The `ColumnStylesPipe` takes two arguments, the first argument is the index of the column, and the second argument is the structure's options.&#x20;

Contained within the structure's options object are details regarding the structure, encompassing elements like the gaps and columns associated with it.

Included in the returned styles are properties like `margin`, `placeSelf`, `wordBreak`, `backgroundColor`, and `borders`, which are determined by the provided index and structure options.

{% hint style="info" %}
**Note**: It is important to note that the `ColumnStylesPipe` is set to be `pure: false` in the `@Pipe` decorator, which means that it will run every time change detection runs.&#x20;

This is because the styles returned by the pipe depend on the structure options, which could change at any time.

See here for more info about [pure and impure pipes in Angular](https://yon.fun/pure-vs-impure-pipes/).
{% endhint %}

