---
description: How to create a custom email template builder block.
---

# Create a new block

Creating a new block in our template builder is pretty straightforward. In this documentation, you'll find a step-by-step guide on how to create your custom block.&#x20;

Before we dive in, make sure you have access to the source code of the [builder converter](broken-reference); otherwise, you won't be able to add your custom block to it.

In this example, we'll create a custom HTML block, define it in the builder, and drag and drop it into the email body.

## Step 1. Generate the block component

You can generate the block component inside the template you bought or at the application level; it's not an issue. However, we recommend having all your blocks inside the builder's template folder.

Let's open the console and generate a new block under `src/lib/blocks` using [Angular CLI](https://yon.fun/angular-cli/).

```bash
ng g c myHtmlBlock --display-block --change-detection=OnPush
```

Cool, now let's go to the second step.

## Step 2. Define the component as a builder block

Before marking this component as a block, let's create an empty interface that will contain the block's options.

```typescript
export interface MyHTMLBlockOptions {}
```

Great! Now that we have the component and its options interface, let's convert it to a builder block.

```typescript
@Component({...})
export class MyHtmlBlockComponent extends AIPEmailBuilderBlock<MyHTMLBlockOptions> {
}
```

`AIPEmailBuilderBlock` is a base class for implementing email blocks in the email builder application.

The class has [lifecycle hooks](https://yon.fun/angular-lifecycle-hooks/) for initializing, cleaning up resources, listening to changes in the block, and updating its properties accordingly.

**The `AIPEmailBuilderBlock` requires some properties to be defined:**

* `type`: This is the type of the block. It's very important to be unique because this is the identification key for the builder and converter.
* `options`: This object contains all default options. We'll see an example later.
* `hostStyles`: This is a getter property that returns styles that should be applied to the component host.

Now it's time to add some options to our interface. Let's assume we want to add just the padding.

```typescript
export interface MyHTMLBlockOptions {
  padding: IPadding;
}
```

`IPadding` is a `@wlocalhost/ngx-email-builder` interface, see [this page for all interfaces provided by the builder](../builder-interfaces.md).

And this is our updated component.

```typescript
@Component({...})
export class MyHtmlBlockComponent extends AIPEmailBuilderBlock<MyHTMLBlockOptions> {
  override type = "my-html-block";
  
  // Default options for the block
  options: MyHTMLBlockOptions = {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };

  // Add padding styles to host
  get hostStyles(): TIPEmailBuilderStyles {
    const { padding } = this.options;
    return {
      padding: createPadding(padding)
    };
  }
}
```

`createPadding` function is also part of `@wlocalhost/ngx-email-builder`. See [this page for the full list of all utils functions](../utility-functions.md).

Now you can say you already have a custom block, but we are not done yet :sunglasses:.

It's time to make the builder **see** it.

## Step 3. Add the block to the builder module

