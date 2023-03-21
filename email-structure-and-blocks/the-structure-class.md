---
description: >-
  The Structure class is used in the AIPEmailBuilder package to create complex
  email layouts using multiple columns with different widths and styles.
---

# The Structure Class

With the Structure class, you can define the number of columns, their widths, and various other styles such as border, background, and padding. You can also add various elements such as text, images, buttons, and other blocks to each column.

In this documentation, we'll go through the various properties and methods of the Structure class, and how to use them to create complex email layouts. We'll also provide some examples to help you understand how to use the class in your own projects.

### Anatomy of a Structure

A Structure consists of several properties and options that define the appearance and layout of the content inside it.&#x20;

Here is the anatomy of a Structure:

1. Type:
   * The type of Structure determines the number of columns and their widths.
   * Possible values for the type are defined in the [`TStructureTypes`](../builder-interfaces.md#tstructuretypes) interface.
2. Options:
   * An object containing the Structure's styling options.
   * The options include `border`, `background`, `padding`, `margin`, `disableResponsive`, `fullWidth`, `gaps`, `columnsWidth`, and `columns`.
   * Each option is defined in its corresponding interface: [`IBorder`](../builder-interfaces.md#iborder), [`IBackground`](../builder-interfaces.md#ibackground), [`IPadding`](../builder-interfaces.md#ipadding), [`IMargin`](../builder-interfaces.md#imargin), and [`IStructureOptions`](the-structure-class.md#istructurecolumnoptions).
3. Elements:
   * An array of arrays that contains the Blocks placed inside the Structure.
   * Each inner array represents a column in the Structure.
   * Each element of the inner array represents a Block inside the corresponding column.

For example, the following code creates a Structure with two columns, where the first column contains a [TextBlock](using-default-blocks/text-block.md), and the second column contains a [ButtonBlock](using-default-blocks/button-block.md):

```javascript
import { Structure, TextBlock, ButtonBlock } from '@wlocalhost/ngx-email-builder';

const myStructure = new Structure('cols_2', [
  [new TextBlock('Hello'), new ButtonBlock('Click me')],
]);
```

In this example, the Structure has two columns because of the 'cols\_2' type.

The first column contains a [TextBlock](using-default-blocks/text-block.md) with the content 'Hello', and the second column contains a [ButtonBlock](using-default-blocks/button-block.md) with the label 'Click me'.

This is just a basic example, and you can customize the Structure further using the various options available.

### Structure Options

Structure options are used to define the styles of a structure.

#### IStructureOptions

The styles of a structure are defined by an object implementing the `IStructureOptions` interface:

```typescript
interface IStructureOptions {
  border: IBorder;
  background: IBackground;
  padding: IPadding;
  margin: IMargin;
  disableResponsive: boolean;
  fullWidth: boolean;
  gaps: [number, number];
  columnsWidth: number[];
  columns: IStructureColumnOptions[];
}
```

Where:

* `border` defines the border of the structure, with `IBorder` being an interface as described above.
* `background` defines the background of the structure, with `IBackground` being an interface with the following properties:
  * `color`: the background color of the structure, with a string value.
  * `url`: an optional URL of an image to be used as the background of the structure.
  * `repeat`: defines how the background image should be repeated within the structure, with possible values of `"repeat"`, `"no-repeat"`, `"repeat-x"`, and `"repeat-y"`.
  * `size`: an object defining the size of the background image, with the following properties:
    * `value`: the size of the image in pixels.
    * `unit`: the unit of the size, with possible values of `"px"` and `"%"`.
    * `auto`: a boolean value indicating whether the image should be resized automatically to fill the structure.
    * `units`: an array of possible unit values.
* `padding` defines the padding of the structure, with `IPadding` being an interface with properties `top`, `right`, `bottom`, and `left` representing the number of pixels of padding in each direction.
* `margin` defines the margin of the structure, with `IMargin` being an interface with properties `top` and `bottom` representing the number of pixels of margin in the top and bottom directions.
* `disableResponsive` is a boolean value indicating whether the structure should be responsive or not. If set to `true`, the structure will not be responsive and will maintain its original size on all devices.
* `fullWidth` is a boolean value indicating whether the structure should be displayed as full width or not.
* `gaps` is an array of numbers, representing the horizontal and vertical gaps between columns in pixels. For example, `[8, 4]` would mean a horizontal gap of 8 pixels and a vertical gap of 4 pixels between columns.

The `columnsWidth` property is an array of numbers that represent the width of each column in the structure. **The length of this array should match the number of `columns` in the structure**.&#x20;

For example, if the structure has 2 `columns`, then `columnsWidth` should be an array of 2 numbers.&#x20;

By default, all columns have equal width, so `columnsWidth` is initialized to an array with equal values.

The `columns` property is an array of [`IStructureColumnOptions`](the-structure-class.md#istructurecolumnoptions) objects that define the styles for each column in the structure.

#### IStructureColumnOptions

The styles of a column in a structure are defined by an object implementing the `IStructureColumnOptions` interface:

<pre class="language-typescript"><code class="lang-typescript"><strong>interface IStructureColumnOptions {
</strong>  background: Pick&#x3C;IBackground, "color">;
  border: IBorder;
  verticalAlign: TVerticalAlign;
}
</code></pre>

Where:

* `background` defines the background color of the column, with `color` being a string value.
* `border` defines the border of the column, with [`IBorder`](../builder-interfaces.md#iborder) being an interface with the following properties:
  * `width`: the width of the border in pixels.
  * `color`: the color of the border in hexadecimal format.
  * `radius`: the radius of the border's corners in pixels.
  * `style`: the style of the border, either `"solid"`, `"dashed"`, or `"dotted"`.
* `verticalAlign` defines the vertical alignment of the column within the structure, with [`TVerticalAlign`](../builder-interfaces.md#tverticalalign) being a string value equal to one of the following:
  * `"top"`: the column is aligned to the top of the structure.
  * `"middle"`: the column is aligned to the middle of the structure.
  * `"bottom"`: the column is aligned to the bottom of the structure.

### Customizing Structure Options

You can customize the options for a structure by passing a partial object of the [`IStructureOptions`](the-structure-class.md#istructureoptions) interface to the `Structure` constructor.&#x20;

Any missing properties will be filled with default values. For example:

```typescript
const myStructure = new Structure("cols_2", [], {
  border: {
    width: 1,
    color: "#000000",
    radius: 4,
    style: "solid"
  },
  background: {
    color: "#ffffff",
    url: "https://example.com/bg.png",
    repeat: "repeat",
    size: {
      value: 100,
      unit: "px",
      auto: true,
      units: ["px", "%", "cover", "contain"]
    }
  },
  padding: {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16
  },
  margin: {
    top: 8,
    bottom: 8
  },
  gaps: [16, 8],
  columnsWidth: [7, 5],
  columns: [
    {
      background: {
        color: "#eeeeee"
      },
      border: {
        width: 1,
        color: "#000000",
        radius: 2,
        style: "dashed"
      },
      verticalAlign: "middle"
    },
    {
      background: {
        color: "#ffffff"
      },
      border: {
        width: 1,
        color: "#cccccc",
        radius: 2,
        style: "dotted"
      },
      verticalAlign: "top"
    }
  ]
});
```

This will create a structure with 2 columns, where the first column has a background color of `#eeeeee`, a dashed border with a width of 1 pixel and a radius of 2 pixels, and its contents vertically centered.&#x20;

The second column has a background color of `#ffffff`, a dotted border with a width of 1 pixel and a radius of 2 pixels, and its contents vertically aligned to the top.&#x20;

The entire structure has a border with a width of 1 pixel, a color of `#000000`, and a radius of 4 pixels, and a background image of `https://example.com/bg.png` repeated in both directions.&#x20;

The padding and margin are also set to specific values.

**Finally, the `gaps` and `columnsWidth` properties control the layout of the columns within the structure.** `gaps` is an array of two numbers, representing the amount of space between columns horizontally and vertically, respectively. `columnsWidth` is an array of numbers that represent the width of each column in the structure, as a percentage of the total width of the structure.

For example, if you have a structure with three columns, and `columnsWidth` is `[3, 4, 3]`, then the first and third columns will be 30% wide, and the second column will be 40% wide. **The sum of the values in `columnsWidth` should always add up to 10.**

### Examples

Example 1: Creating a two-column structure with TextBlocks:

```typescript
import { Structure, TextBlock } from '@wlocalhost/ngx-email-builder';

// Creating a Structure object with two columns and TextBlock objects in each column
const structure = new Structure('cols_2', [
  [new TextBlock('This is column 1'), new TextBlock('This is column 2')],
]);
```

Example 2: Creating a three-column structure with background color and borders

```typescript
import { Structure, TextBlock } from '@wlocalhost/ngx-email-builder';

// Creating a Structure object with three columns, background color, and borders
const structure = new Structure('cols_3', [  
  [new TextBlock('This is column 1'), new TextBlock('This is column 2'), new TextBlock('This is column 3')],
], {
  background: {
    color: '#F0F0F0',
  },
  border: {
    width: 1,
    color: '#CCCCCC',
    radius: 5,
    style: 'solid',
  },
});

```

Example 3: Creating a four-column structure with different column widths

```typescript
import { Structure, TextBlock } from '@wlocalhost/ngx-email-builder';

// Creating a Structure object with four columns and different column widths
const structure = new Structure('cols_4', [
  [new TextBlock('This is column 1'), new TextBlock('This is column 2'), new TextBlock('This is column 3'), new TextBlock('This is column 4')],
], {
  columnsWidth: [2, 2, 3, 3],
});

```

### Conclusion

The Structure is a powerful tool in the NGB Email Builder. It allows you to easily create responsive email templates by defining the structure of the email and the layout of its columns. By using the Structure, you can create complex email designs that look great on any device.

When creating a Structure, it is important to keep in mind the [anatomy of the Structure](the-structure-class.md#anatomy-of-a-structure) and the options available to you. You should also follow best practices such as setting column widths and using padding and margins effectively.
