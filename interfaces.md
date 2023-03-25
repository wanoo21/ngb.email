---
description: >-
  This page provides documentation for the interfaces used in the Email Builder
  project.
---

# 🏢 Interfaces

These interfaces define the structure and styling of various blocks and elements that can be used to create responsive email templates.&#x20;

Each interface has its own set of properties that can be customized to achieve the desired design.

Understanding these interfaces is essential for creating custom email templates using the Email Builder project. With these interfaces, you can customize the look and feel of each block or element in your email template to achieve your desired design.

## `IMjmlServerResponseErrors`

The `IMjmlServerResponseErrors` interface describes the error response returned by the MJML server when converting an email template. It has the following properties:

* `message` (string): The error message returned by the server.
* `tagName` (string): The name of the MJML tag that caused the error.

## `IMjmlServerResponse`

The `IMjmlServerResponse` interface describes the response returned by the MJML server when converting an email template. It has the following properties:

* `html` (string): The converted HTML template is based on the `IIPEmail` interface.
* `mjml` (string): The converted MJML template is based on the `IIPEmail` interface.
* `errors` (array of `IMjmlServerResponseErrors`): An array of error objects returned by the server.

## `TStructureTypes`

The `TStructureTypes` type defines the available structure types that can be used with the `Structure` class. It has the following possible values:

* `"cols_1"`
* `"cols_2"`
* `"cols_3"`
* `"cols_4"`
* `"cols_5"`
* `"cols_6"`
* `"cols_12"`
* `"cols_21"`

## `TDirection`

The `TDirection` type defines the available text direction options that can be used in the `IGeneralOptions` interface. It has the following possible values:

* `"ltr"`
* `"rtl"`

## `TUnits`

The `TUnits` type defines the available units that can be used for width and height values in the various block options. It has the following possible values:

* `"%"`
* `"px"`
* `"cover"`
* `"contain"`

## `TAlign`

The `TAlign` type defines the available horizontal alignment options that can be used in the various block options. It has the following possible values:

* `"left"`
* `"center"`
* `"right"`

## `TVerticalAlign`

The `TVerticalAlign` type defines the available vertical alignment options that can be used in the `SocialBlock` options. It has the following possible values:

* `"top"`
* `"middle"`
* `"bottom"`

## `TLineHeight`

The `TLineHeight` type defines the available line height options that can be used in the various block options. It has the following possible values:

* `"%"`
* `"px"`
* `"none"`

## `TLinkTarget`

The `TLinkTarget` type defines the available link target options that can be used in the `ButtonBlock` and `LinkBlock` options. It has the following possible values:

* `"_blank"`
* `"_self"`
* `"_parent"`
* `"_top"`

## `TFontStyle`

The `TFontStyle` type defines the available font style options that can be used in the `Font` options. It has the following possible values:

* `"italic"`
* `"normal"`
* `"oblique"`

## `TFontWeight`

The `TFontWeight` type defines the available font weight options that can be used in the `Font` options. It has the following possible values:

* A numeric value representing the font-weight.
* `"normal"`
* `"bold"`
* `"bolder"`
* `"lighter"`
* A custom font-weight value.

## `TBackgroundRepeat`

The `TBackgroundRepeat` type defines the available background repeat options that can be used in the `Background` options. It has the following possible values:

* `"no-repeat"`
* `"repeat"`
* `"repeat-x"`
* `"repeat-y"`

## `IBorder`

Builder border styles interface.

Properties:

* `color: string`: Border color.
* `style: "solid" | "dotted" | "dashed" | "double" | "groove"`: Border style.
* `width: number`: Border width.
* `radius: number`: Border radius.

## **`IFont`**

The `IFont` interface describes the font style of a block. It has the following properties:

* `family` (string): Font family name.
* `fallback` (string): Fallback font family name.
* `size` (number): Font size in pixels.
* `style` ([TFontStyle](interfaces.md#tfontstyle)): Font style, can be `italic`, `normal`, or `oblique`.
* `weight` ([TFontWeight](interfaces.md#tfontweight)): Font weight in number.

## **`IPadding`**

The `IPadding` interface describes the padding of a block. It has the following optional properties:

* `top` (number): Padding size for the top side of the block.
* `right` (number): Padding size for the right side of the block.
* `bottom` (number): Padding size for the bottom side of the block.
* `left` (number): Padding size for the left side of the block.

## `ILink`

The `ILink` interface defines the properties that can be used to customize the behavior and appearance of links in email blocks. It has the following properties:

* `url`: The URL that the link should point to.
* `title`: The title attribute of the link element.
* `target`: The target attribute of the link element. This can be one of "\_self", "\_blank", "\_parent", or "\_top".

## **`IMargin`**

The `IMargin` interface describes the margin of a block. It has the following optional properties:

* `top` (number): Margin size for the top side of the block.
* `bottom` (number): Margin size for the bottom side of the block.

## `ILineHeight`

The `ILineHeight` interface represents the line-height CSS property, which sets the height of a line box.

Properties:

* `value`: The numeric value of the line height. Default is `22`.
* `unit`: The unit of measurement for the line height. Possible values are `px`, `%`, or `none`. Default is `px`.

## `IBackground`

The `IBackground` interface represents the CSS background style.

Properties:

* `color`: The color of the background. Default is `white`.
* `url`: The URL of the background image.
* `repeat`: The repeat style of the background image. Possible values are `no-repeat`, `repeat`, `repeat-x`, or `repeat-y`. Default is `no-repeat`.
* `size`: An object that defines the width and height of the background image. See [IWidthHeight](interfaces.md#iwidthheight).

## `IWidthHeight`

The `IWidthHeight` interface represents the width and height CSS properties.

Properties:

* `value`: The numeric value of the width or height. Default is `100`.
* `unit`: The unit of measurement for the width or height. Possible values are `px`, `%`, `cover`, or `contain`. Default is `%`.
* `auto`: If `true`, the width or height is set to `auto`. Default is `false`.
* `units`: An array of possible unit values.

## `IUserModule`

The `IUserModule` interface defines a user module object that can be used to store user-defined modules. A user module consists of a name and an instance of the `IStructure` interface.

Properties:

* `name`: A string representing the name of the user module.
* `module`: An instance of the `IStructure` interface that represents the module structure.

## `IUserTemplateCategory`

The `IUserTemplateCategory` interface defines a user template category that can be used to group templates in the Template Gallery. A user template category consists of a category name and an array of template names.

Properties:

* `category`: A string representing the name of the template category.
* `templates`: An array of strings representing the names of the templates in the category.

## `TIPEmailBuilderStyles`

The `TIPEmailBuilderStyles` type is a record that can hold any style property. This type can be used to define custom styles for various elements in an email template.
