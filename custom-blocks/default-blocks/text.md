# Text Block

The Text Block is a block that allows you to display text content in your email. It supports several options to help you customize the appearance of your text.

#### Options

* `color`: The color of the text.
* `font`: The font of the text. It supports the following properties:
  * `family`: The font family to use. This can be a comma-separated list of font names, in order of preference.
  * `fallback`: The fallback font family to use if the primary font is not available.
  * `size`: The font size, in pixels.
  * `style`: The font style. This can be `normal`, `italic`, or `oblique`.
  * `weight`: The font-weight. This can be a numeric value (e.g. `400` for normal weight) or a string value (e.g. `bold`).
* `lineHeight`: The line height of the text. It supports the following properties:
  * `value`: The line-height value. This can be a numeric value (e.g. `1.5`) or a percentage (e.g. `150%`).
  * `unit`: The unit of measurement for the line height. This can be `px`, `%`, or `none`.
* `padding`: The padding around the text. It supports the following properties:
  * `top`: The padding at the top of the text.
  * `right`: The padding at the right of the text.
  * `bottom`: The padding at the bottom of the text.
  * `left`: The padding at the left of the text.

#### Usage

To use the Text Block in your email, you can create a new instance of the `TextBlock` class and customize its options. Here's an example:

```typescript
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

In this example, we've customized the color, font, line height, and padding of the Text Block, and provided some text content to display.
