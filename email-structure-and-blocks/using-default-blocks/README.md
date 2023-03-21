---
description: How to configure default email template builder blocks.
---

# Using Default Blocks

Default blocks are a set of abstract classes that can be imported into the builder template from the `@wlocalhost/ngx-email-builder` package. They provide a simple way to define a custom block out of the box.

In the main module providers of the template you purchased, you will find code like the following:

```typescript
...addDefaultBlock(TextBlockComponent, $localize`:@@block_text_title:Text`)
```

This code indicates that the `TextBlockComponent`, which is a component within the template and is part of the default blocks, can be defined using the `addDefaultBlock` function.&#x20;

The `addDefaultBlock` function takes two parameters: **the first is the block component, and the second is the block title.**

We usually include a translation for the block title so that you can translate it as you wish. For example, in the above code, the translation is `Text`.

Here's how `TextBlockComponent` looks:

```typescript
import { TextBlock } from "@wlocalhost/ngx-email-builder"; 

@Component({...}) 
export class TextBlockComponent extends TextBlock {}
```

As you can see, `TextBlockComponent` extends the [`TextBlock`](text-block.md) class, which is imported from `@wlocalhost/ngx-email-builder`.

The `TextBlock` class contains all the logic, so you usually don't need to modify it. However, if you want, you can rewrite the logic or add anything that makes sense to you.

To use other default blocks, you can simply follow the same pattern as above by importing the appropriate class and extending it in your custom component.
