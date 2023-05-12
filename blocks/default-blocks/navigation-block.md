---
description: >-
  The Navigation Block is a block that allows you to display a navigation menu
  in your email.
---

# Navigation Block

The Navigation Block is a block that allows you to display a navigation menu in your email. It supports several options to help you customize the appearance of your navigation menu.

## Options&#x20;

The Navigation Block supports the following options:

* `align`: The alignment of the navigation menu. It supports the [`TAlign`](../../interfaces.md#talign) interface.
* `hamburger`: Boolean value indicating whether to display the hamburger menu icon for mobile devices.
* `color`: The color of the navigation menu text.
* `font`: The font settings for the navigation menu. It supports the [`IFont`](../../interfaces.md#ifont) interface.
* `lineHeight`: The line height of the navigation menu text. It supports the [`ILineHeight`](../../interfaces.md#ilineheight) interface.
* `letterSpacing`: The letter spacing of the navigation menu text.
* `padding`: The padding around the navigation menu. It supports the [`IPadding`](../../interfaces.md#ipadding) interface.
* `target`: The default link target for navigation menu links.
* `textDecoration`: The text-decoration for navigation menu links. This can be `underline`, `overline`, or `none`.
* `elements`: An array of objects representing the individual navigation menu items. Each object has a `label` property for the text and a `href` property for the link URL.

## Usage&#x20;

To use the Navigation Block in your email, you can create a new instance of the `NavigationBlock` class and customize its options. Here's an example:

```typescript
import { NavigationBlock } from "@wlocalhost/ngx-email-builder";

new NavigationBlock().toObject({
  align: "center",
  hamburger: true,
  color: "#000000",
  font: {
    family: "Arial",
    size: {
      value: 14,
      unit: "px"
    },
    style: "normal",
    weight: "normal"
  },
  lineHeight: {
    value: 1.5,
    unit: "em"
  },
  letterSpacing: 1,
  padding: {
    top: 10,
    right: 20,
    bottom: 10,
    left: 20
  },
  target: "_blank",
  textDecoration: "none",
  elements: [
    {
      label: "Home",
      href: "https://example.com"
    },
    {
      label: "About",
      href: "https://example.com/about"
    },
    {
      label: "Contact",
      href: "https://example.com/contact"
    }
  ]
});

```

In this example, we've customized the alignment, hamburger menu display, color, font, line height, letter spacing, padding, link target, text decoration, and navigation menu items of the Navigation Block.

{% hint style="info" %}
**Note**: that the `label` and `href` properties of each element in the `elements` array are required.
{% endhint %}
