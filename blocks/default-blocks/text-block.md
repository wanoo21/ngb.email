---
description: >-
  The Text Block is a block that allows you to display text content in your
  email.
---

# Text Block

The Text Block is a block that allows you to display text content in your email. It supports several options to help you customize the appearance of your text.

## **Options**

* color (string): The color of the text.
* font ([IFont](../../interfaces.md#ifont)): The font of the text.
* lineHeight ([ILineHeight](../../interfaces.md#ilineheight)): The line height of the text.
* padding ([IPadding](../../interfaces.md#ipadding)): The padding around the text.

## **Usage**

To use the Text Block in your email, you can create a new instance of the `TextBlock` class and customize its options. Here's an example:

```typescript
import { TextBlock } from '@wlocalhost/ngx-email-builder';

new TextBlock().toObject({
  color: "#000000",
  font: {
    family: "Arial, Helvetica, sans-serif",
    size: 16,
    style: "normal",
    weight: 400,
    fallback: "Arial, Helvetica, sans-serif"
  },
  lineHeight: {
    value: 1.5,
    unit: "em"
  },
  padding: {
    top: 10,
    right: 20,
    bottom: 10,
    left: 20
  }
}, "This is an example of a Text Block.");
```

In this example, we've customized the color, font, line height, and padding of the Text Block, and provided some text content to display.&#x20;

{% hint style="info" %}
Note that the `toObject()` method is called on the instance of `TextBlock` to convert the block into an object that can be used in an email template.
{% endhint %}
