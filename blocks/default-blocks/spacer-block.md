---
description: >-
  The Spacer Block is a block that adds empty space between other blocks in your
  email.
---

# Spacer Block

The Spacer Block is a block that adds empty space between other blocks in your email. It is useful for adding whitespaces to create a visual separation between other blocks.

## Options

* `height` (type: [`IWidthHeight`](../../interfaces.md#iwidthheight)): The height of the spacer block. This can be set using either pixels or percentage values. The `auto` value is not supported.

## Usage

To use the Spacer Block in your email, you can create a new instance of the `SpacerBlock` class and customize its options. Here's an example:

```typescript
new SpacerBlock().toObject({
  height: {
    value: 20,
    unit: "px"
  }
});
```

In this example, we've set the height of the spacer block to 20 pixels.
