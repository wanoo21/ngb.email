---
description: >-
  This page provides documentation for the interfaces used in the Email Builder
  project.
---

# 🏢 Builder Interfaces

These interfaces define the structure and styling of various blocks and elements that can be used to create responsive email templates.&#x20;

Each interface has its own set of properties that can be customized to achieve the desired design.

Understanding these interfaces is essential for creating custom email templates using the Email Builder project. With these interfaces, you can customize the look and feel of each block or element in your email template to achieve your desired design.

### `IMjmlServerResponseErrors`

The `IMjmlServerResponseErrors` interface describes the error response returned by the MJML server when converting an email template. It has the following properties:

* `message` (string): The error message returned by the server.
* `tagName` (string): The name of the MJML tag that caused the error.

### `IMjmlServerResponse`

The `IMjmlServerResponse` interface describes the response returned by the MJML server when converting an email template. It has the following properties:

* `html` (string): The converted HTML template is based on the `IIPEmail` interface.
* `mjml` (string): The converted MJML template is based on the `IIPEmail` interface.
* `errors` (array of `IMjmlServerResponseErrors`): An array of error objects returned by the server.

### `TStructureTypes`

The `TStructureTypes` type defines the available structure types that can be used with the `Structure` class. It has the following possible values:

* `"cols_1"`
* `"cols_2"`
* `"cols_3"`
* `"cols_4"`
* `"cols_5"`
* `"cols_6"`
* `"cols_12"`
* `"cols_21"`

### `TDirection`

The `TDirection` type defines the available text direction options that can be used in the `IGeneralOptions` interface. It has the following possible values:

* `"ltr"`
* `"rtl"`

### `TUnits`

The `TUnits` type defines the available units that can be used for width and height values in the various block options. It has the following possible values:

* `"%"`
* `"px"`
* `"cover"`
* `"contain"`

### `TAlign`

The `TAlign` type defines the available horizontal alignment options that can be used in the various block options. It has the following possible values:

* `"left"`
* `"center"`
* `"right"`

### `TVerticalAlign`

The `TVerticalAlign` type defines the available vertical alignment options that can be used in the `SocialBlock` options. It has the following possible values:

* `"top"`
* `"middle"`
* `"bottom"`

### `TLineHeight`

The `TLineHeight` type defines the available line height options that can be used in the various block options. It has the following possible values:

* `"%"`
* `"px"`
* `"none"`

### `TLinkTarget`

The `TLinkTarget` type defines the available link target options that can be used in the `ButtonBlock` and `LinkBlock` options. It has the following possible values:

* `"_blank"`
* `"_self"`
* `"_parent"`
* `"_top"`

### `TFontStyle`

The `TFontStyle` type defines the available font style options that can be used in the `Font` options. It has the following possible values:

* `"italic"`
* `"normal"`
* `"oblique"`

### `TFontWeight`

The `TFontWeight` type defines the available font weight options that can be used in the `Font` options. It has the following possible values:

* A numeric value representing the font-weight.
* `"normal"`
* `"bold"`
* `"bolder"`
* `"lighter"`
* A custom font-weight value.

### `TBackgroundRepeat`

The `TBackgroundRepeat` type defines the available background repeat options that can be used in the `Background` options. It has the following possible values:

* `"no-repeat"`
* `"repeat"`
* `"repeat-x"`
* `"repeat-y"`

### `IBorder`

Builder border styles interface.

#### Properties

* `color: string`: Border color.
* `style: "solid" | "dotted" | "dashed" | "double" | "groove"`: Border style.
* `width: number`: Border width.
* `radius: number`: Border radius.

### `IUserModule`

The `IUserModule` interface defines a user module object that can be used to store user-defined modules. A user module consists of a name and an instance of the `IStructure` interface.

Properties:

* `name`: A string representing the name of the user module.
* `module`: An instance of the `IStructure` interface that represents the module structure.

### `IUserTemplateCategory`

The `IUserTemplateCategory` interface defines a user template category that can be used to group templates in the Template Gallery. A user template category consists of a category name and an array of template names.

Properties:

* `category`: A string representing the name of the template category.
* `templates`: An array of strings representing the names of the templates in the category.

### `TIPEmailBuilderStyles`

The `TIPEmailBuilderStyles` type is a record that can hold any style property. This type can be used to define custom styles for various elements in an email template.
