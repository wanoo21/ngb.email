---
description: How to configure default email template builder blocks.
---

# Default blocks

Default blocks are a set of abstract classes that can be imported into the builder template from the `@wlocalhost/ngx-email-builder` package.&#x20;

They provide a simple way to define a custom block out of the box. If you check the code of the template you purchased, you will see something like the following inside the main module providers:

```typescript
...addDefaultBlock(TextBlockComponent, $localize`:@@block_text_title:Text`)
```

This means that the `TextBlockComponent`, which is a component within this template and is part of the default blocks, can be defined using the `addDefaultBlock` function.&#x20;

`addDefaultBlock` takes two parameters: the first is the block component, and the second is the block title. We usually include a translation so that you can translate them as you wish.

Here's how `TextBlockComponent` looks:

```typescript
import { TextBlock } from "@wlocalhost/ngx-email-builder"; 

@Component({...}) 
export classTextBlockComponent extends TextBlock {}
```

As you can see, `TextBlockComponent` extends the `TextBlock` abstract class, which is imported from `@wlocalhost/ngx-email-builder`.&#x20;

The abstract `TextBlock` class contains all the logic, so you usually don't need to modify it. However, if you want, you can rewrite the logic or add anything that makes sense to you.

For more in-depth information on how the builder's predefined blocks work, please see the next pages, one by one.
