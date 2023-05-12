---
description: >-
  TemplateThumbPathPipe is a pipe that returns the thumbnail image path for a
  given email template. This is particularly useful when you need to dynamically
  generate paths for template thumbnail images.
---

# TemplateThumbPathPipe

## Methods

#### transform()

The `transform()` method returns the thumbnail image path for a given email template.

**Parameters:**

* `template`: The name of the email template.
* `type`: The file type of the thumbnail image (default is "jpg").

**Returns:**

* The path of the thumbnail image for the given email template.

## Usage

```html
<img [src]="templateName | templateThumbPath: 'png'" alt="Template thumbnail">
```

In this example, `templateName` is a variable containing the name of the template, and the `templateThumbPath` pipe is used to generate the URL of the thumbnail image in PNG format.&#x20;

The resulting URL is then bound to the `src` attribute of an `<img>` tag.
