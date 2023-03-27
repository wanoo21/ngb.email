---
description: >-
  The ApplyMiddlewarePipe is an Email Builder pipe that allows you to apply
  middleware functions to data right in your component's HTML.
---

# ApplyMiddlewarePipe

This is particularly useful when you want to apply some processing logic to your data before rendering it to the user.

To use this pipe, you need to provide the method name of the middleware function that you want to apply to your data as the second argument, and the data that you want to process as the first argument.&#x20;

**The method name must be one of the following: "blocksList", "structuresList", "categoryList", "categoryTemplates", or "templateThumbnail".**

The `ApplyMiddlewarePipe` injects an instance of the `AIPEmailBuilderMiddlewareService` to access the middleware functions that you want to use. **The method that you specify as the second argument must be a valid method of this service.**

Here is an example of how to use the `ApplyMiddlewarePipe` in your component's HTML:

```html
<!-- Apply the "blocksList" middleware function to the "blocks" array -->
<div *ngFor="let block of blocks | applyMiddleware:'blocksList'">
  {{ block.name }}
</div>
```

In this example, the `blocks` array will be processed by the `blocksList` middleware function before being displayed in the template.

The `ApplyMiddlewarePipe` can be used with any type of data that can be processed by the middleware functions provided by the `AIPEmailBuilderMiddlewareService`. These functions can be used to transform, filter, or modify data before it is displayed in the template.

{% hint style="info" %}
It is important to note that the `ApplyMiddlewarePipe` does not modify the original data; it only returns a new, processed version of the data. This means that you can use the `ApplyMiddlewarePipe` multiple times in your template without affecting the original data.
{% endhint %}
