---
description: >-
  This page provides a set of utility functions used by the Email Builder
  module. These functions include methods for creating CSS styles based on
  various interface objects such as borders, padding, mar
---

# 🔌 Utility Functions

Additionally, there are functions for merging objects, cloning objects, and debouncing a function.&#x20;

The utility functions also include methods for generating random unique strings and manipulating browser cookies.&#x20;

These utility functions provide a valuable set of tools for developers building email templates with the Email Builder module.

### createBorder

Create CSS border styles based on an [`IBorder`](builder-interfaces.md#iborder) object.

**Parameters**

* `border`: Partial\<IBorder> - The border object containing border color, style, width, and radius.
* `rule` (optional): string - The CSS rule to apply the border styles. The default value is "border".

**Returns**

* An object containing CSS border styles and border-radius.

### createPadding

Create CSS padding styles based on an [`IPadding`](builder-interfaces.md#ipadding) object.

**Parameters**

* `padding`: IPadding - The padding object containing padding values for each side.
* `rule` (optional): `"padding" | "margin"` - The CSS rule to apply the styles. The default value is "padding".

**Returns**

* An object containing CSS padding styles.

### createMargin

Create CSS margin styles based on an [`IMargin`](builder-interfaces.md#imargin) object.

**Parameters**

* `margin`: IMargin - The margin object containing margin values for the top and bottom.

**Returns**

* An object containing CSS margin styles.

### createFont

Create CSS font styles based on an [`IFont`](builder-interfaces.md#ifont) object.

**Parameters**

* `font`: IFont - The font object containing font family, size, style, and weight.

**Returns**

* An object containing CSS font styles.

### createLineHeight

Create CSS line-height styles based on an [`ILineHeight`](builder-interfaces.md#ilineheight) object.

**Parameters**

* `lineHeight`: ILineHeight - The line-height object containing the line-height value and unit.

**Returns**

* An object containing CSS line-height styles.

### createBackground

Create CSS background styles based on an [`IBackground`](builder-interfaces.md#ibackground) object.

**Parameters**

* `background`: Partial\<IBackground> - The background object containing background color, url, and repeat.

**Returns**

* A string containing CSS background styles.

### createWidthHeight

Create CSS width or height styles based on an [`IWidthHeight`](builder-interfaces.md#iwidthheight) object.

**Parameters**

* `widthHeight`: Partial\<IWidthHeight> - The width or height object containing value, unit, and auto boolean.

**Returns**

* A string containing CSS width or height styles.

### mergeObjects

Deep merge two objects. Use it at your own risk.

**Parameters**

* `current`: Record\<string, any> - The original object to merge into.
* `updates`: Record\<string, any> - The new object to merge from.

**Returns**

* The merged object.

### defaultsDeep

An alternative to the lodash `defaultsDeep` function. Use it at your own risk.

**Parameters**

* `to`: Record\<string, any> - The object to apply default properties to.
* `sources`: Record\<string, any>\[] - An array of objects containing default properties.

**Returns**

* The object with default properties is applied.

### cloneDeep

An alternative to the lodash `cloneDeep` function. Use it at your own risk.

**Parameters**

* `obj` (optional): Object - The object to clone. Default is an empty object.

**Returns**

* The cloned object.

### debounce

Debounce a function based on delay.

**Parameters**

* `callback`: (...args: any\[]) => T - The function to debounce.
* `delay` (optional): number - The delay time in milliseconds. The default value is 1000.

**Returns**

* A function that debounces the original function.

### randomString

Generate a random string.

**Parameters**

* `from` (optional): number - The starting index for the random string. The default is 10.
* `to` (optional): number - The length of the random string. The default is 5.

**Returns**

* A random string.

### addToStore

Create a cookie with the provided name and value, which will persist for a specified number of days.

#### Parameters

* `name` - The name of the cookie.
* `value` - The value of the cookie.
* `days` (optional) - The number of days the cookie should persist. The default is 7.

### getFromStore

Read a cookie with the provided name.

#### Parameters

* `name` - The name of the cookie to retrieve.
