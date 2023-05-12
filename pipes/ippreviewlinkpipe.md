---
description: >-
  The IpPreviewLinkPipe pipe dynamically creates and revokes a URL object link
  for previewing an email.  It is useful when you want to create a preview link
  from an IPEmail object.
---

# IpPreviewLinkPipe

## Methods

#### transform()

This method transforms the `IPEmail` object to a `SafeUrl` object for previewing. It returns an Observable of `SafeUrl` object that can be used for previewing.

**Parameters:**

* `value`: The `IPEmail` object to be previewed.

**Returns:**

* An `Observable<SafeUrl>` that can be used for previewing.

#### ngOnDestroy()

This method revokes the object URL link on component destruction to free memory.

## Usage

Here's an example:

```html
<!-- Preview email -->
<iframe [src]="email | ipPreviewLink" width="100%" height="500"></iframe>
```

It uses an `<iframe>` as a container to display the email preview within the current web page.

The `[src]`attribute binds the email variable to the `<iframe>`'s source URL, enabling the preview generation through the `ipPreviewLink` pipe.

Dynamically loading and presenting the corresponding email content is achieved by the `<iframe>`.

To fit the available space, the `<iframe>` has a width of 100% and a fixed height of 500 pixels.

This code allows the display of an email preview in an based on the email variable.&#x20;

The `<iframe>` occupies full width and has a fixed height of 500 pixels.
