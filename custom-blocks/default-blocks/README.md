---
description: How to configure default email template builder blocks.
---

# Default blocks

Default blocks are a bunch of abstract classes that can be imported into the builder template from `@wlocalhost/ngx-email-builder` package.

They provide a simple way to define a custom block out of the box.

If you check the template code you bought, you'll see something like this inside the main module providers:

```typescript
...addDefaultBlock(TextBlockComponent, $localize`:@@block_text_title:Text`)
```

This means `TextBlockComponent` which is a component inside this template, and is part of default blocks, can be defined by `addDefaultBlock` function.

`addDefaultBlock` provides two parameters, first is the block component, and the second is the block title, we usually include translation, so you'll be able to translate them as you wish.

Here's how `TextBlockComponent` looks like:

```typescript
import { TextBlock } from "@wlocalhost/ngx-email-builder";

@Component({...})
export class TextBlockComponent extends TextBlock {}
```

As you can see `TextBlockComponent` is extended by `TextBlock` abstract class which is imported from `@wlocalhost/ngx-email-builder` .

The abstract `TextBlock` class contains all the logic, so you usually don't need to do anything here, but if you want, you can rewrite the logic or add anything you think makes sense for you.

For more in-depth info on how the builder's predefined blocks work, see the next pages, one by one.
