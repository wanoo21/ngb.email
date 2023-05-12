---
description: >-
  The ApplyMiddlewarePipe is an Email Builder pipe that allows you to apply
  middleware functions to data right in your component's HTML.
---

# ApplyMiddlewarePipe

## Methods

#### transform()

This method applies a middleware method to the given value.

**Parameters**:

* `value` — The data to apply the middleware to. It is of type `Parameters<M>`, where `M` is the type of the middleware method to use.
* `method` — The name of the middleware method to use. It is of type `K`, where `K` is the key of the middleware method to use.

**Returns**:

* The result of the middleware method, of type `ReturnType<M>`, where `M` is the type of the middleware method to use.

## **Usage**

Here's an example:

```html
<!-- Apply the "blocksList" middleware function to the "blocks" array -->
<div *ngFor="let block of blocks | applyMiddleware:'blocksList'">
  {{ block.name }}
</div>
```

In this example, the `blocks` array will be processed by the `blocksList` middleware function before being displayed in the template.

The `ApplyMiddlewarePipe` can be used with any type of data that can be processed by the middleware functions provided by the `AIPEmailBuilderMiddlewareService`. These functions can be used to transform, filter, or modify data before it is displayed in the template.

{% hint style="info" %}
**Note**: It is important to note that the `ApplyMiddlewarePipe` does not modify the original data; it only returns a new, processed version of the data. This means that you can use the `ApplyMiddlewarePipe` multiple times in your template without affecting the original data.
{% endhint %}
