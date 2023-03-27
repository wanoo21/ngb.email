---
description: >-
  The ColumnStylesPipe is an email builder pipe that returns column styles based
  on the index and the structure options.
---

# ColumnStylesPipe

It is used to set the styles of each column in a structure. Here's an example usage of the `ColumnStylesPipe`:

```html
<div [ngStyle]="columnIndex | ipColumnStyles: structureOptions"></div>
```

In the above example, `columnIndex` is the index of the column whose styles you want to retrieve, and `structureOptions` is the options of the [structure](../blocks/structure.md) that contains the column.

The `ColumnStylesPipe` takes two arguments, the first argument is the index of the column, and the second argument is the structure's options.&#x20;

The structure's options is an object that contains information about the structure, such as the gaps and columns of the structure.

The returned styles include _margin, placeSelf, wordBreak, backgroundColor, and borders_ based on the index and structure options provided.

{% hint style="info" %}
It is important to note that the `ColumnStylesPipe` is set to be `pure: false` in the `@Pipe` decorator, which means that it will run every time change detection runs.&#x20;

This is because the styles returned by the pipe depend on the structure options, which could change at any time.

See here for more info about [pure and impure pipes in Angular.](https://yon.fun/pure-vs-impure-pipes/)
{% endhint %}
