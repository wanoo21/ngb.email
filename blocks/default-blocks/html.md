---
description: >-
  The HTML Block is a block in your email builder that enables direct insertion
  of custom HTML code into your email, enhancing the builder's flexibility.
---

# HTML

## Options

The HTML Block supports the following options:

* `innerHTML`: A string that contains the HTML content you want to insert.

## Usage

To use the HTML Block in your email, you can create a new instance of the `HtmlBlock` class and set its `innerHTML` option. Here's an example:

```typescript
import { HtmlBlock } from "@wlocalhost/ngx-email-builder";

const myHtmlBlock = new HtmlBlock();
myHtmlBlock.innerHTML = "<p>This is my custom HTML content.</p>";

// You can now add myHtmlBlock to your email content.
```

In this example, we've created a new `HtmlBlock` instance and set its `innerHTML` option to include a paragraph of text. You can replace this with your custom HTML code.

{% hint style="info" %}
**Note**: When adding custom HTML code, make sure that the code is safe and does not contain any malicious scripts.
{% endhint %}
