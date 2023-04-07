---
description: >-
  The TemplateThumbPathPipe is an Angular pipe that returns the full path to a
  template thumbnail image based on the provided template name and image type.
---

# TemplateThumbPathPipe

It is typically used in the UI of the email builder app to display a preview image of each template option available to the user.

Here are some key features of the `TemplateThumbPathPipe`:

* **Name:** The name of the pipe is `templateThumbPath`.
* **Input:** The pipe takes two inputs: the `template` name (required) and the `type` of image (optional, default is `"jpg"`).
* **Output:** The output is a string that represents the full path to the thumbnail image.
* **Usage:** The pipe can be used in HTML templates like this: `{{ templateName | templateThumbPath: "png" }}`.
* **Dependency:** The pipe injects the `IPEmailBuilderConfig` service from the email builder configuration module.

Here is an example of how to use `TemplateThumbPathPipe` in an HTML template:

```html
<img [src]="templateName | templateThumbPath: 'png'" alt="Template thumbnail">
```

In this example, `templateName` is a variable containing the name of the template, and the `templateThumbPath` pipe is used to generate the URL of the thumbnail image in PNG format.&#x20;

The resulting URL is then bound to the `src` attribute of an `<img>` tag.
