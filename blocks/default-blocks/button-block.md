---
description: The Button Block is a block that allows you to add a button to your email.
---

# Button Block

The Button Block is a block that allows you to add a button to your email. It supports several options to help you customize the appearance of the button.

## Options

* `backgroundColor`: The background color of the button.
* `border`: The border of the button. This is an instance of the [`IBorder`](../../interfaces.md#iborder) interface.
* `color`: The text color of the button.
* `font`: The font of the text on the button. This is an instance of the [`IFont`](../../interfaces.md#ifont) interface.
* `align`: The alignment of the button. This can be one of the following values:
  * `left`: The button is aligned to the left.
  * `center`: The button is centered.
  * `right`: The button is aligned to the right.
* `fullWidth`: A boolean value indicating whether the button should take up the full width of its container.
* `lineHeight`: The line height of the text on the button. This is an instance of the [`ILineHeight`](../../interfaces.md#ilineheight) interface.
* `link`: The link that the button should open when clicked. This is an instance of the [`ILink`](../../interfaces.md#ilink) interface.
* `innerPadding`: The padding inside the button. This is an instance of the [`IPadding`](../../interfaces.md#ipadding) interface.
* `padding`: The padding around the button. This is an instance of the [`IPadding`](../../interfaces.md#ipadding) interface.

## Usage

To use the Button Block in your email, you can create a new instance of the `ButtonBlock` class and customize its options. Here's an example:

```typescript
import { ButtonBlock } from '@wlocalhost/ngx-email-builder';

new ButtonBlock().toObject({
  backgroundColor: '#007bff',
  border: {
    color: '#007bff',
    style: 'solid',
    width: 1,
    radius: 4,
  },
  color: '#ffffff',
  font: {
    family: 'Arial, sans-serif',
    size: 14,
    weight: 'normal',
    style: 'normal',
  },
  align: 'center',
  fullWidth: false,
  lineHeight: {
    value: 1.5,
    unit: 'em',
  },
  link: {
    url: 'https://www.example.com/',
    target: '_blank',
  },
  innerPadding: {
    top: 8,
    right: 16,
    bottom: 8,
    left: 16,
  },
  padding: {
    top: 8,
    right: 16,
    bottom: 8,
    left: 16,
  },
}, 'Click me!');

```

In this example, we've customized the background color, border, text color, font, alignment, line height, link, and padding of the Button Block, and provided some text content to display on the button.

{% hint style="info" %}
**Note**: The `align` option only affects the horizontal alignment of the button. Vertical alignment is determined by the container in which the button is placed.
{% endhint %}
