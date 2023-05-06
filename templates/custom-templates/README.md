---
description: >-
  Creating custom email templates with ease. It provides a user-friendly
  interface that allows you to drag and drop various elements into your email
  template, including text, images, and buttons.
---

# Custom templates

### The main structure of a template

[AIPEmailBuilderComponent ](aipemailbuildercomponent/)is the main component for creating custom templates. It includes two subcomponents, [AIPEmailBody ](aipemailbuildercomponent/aipemailbody/)and [AIPEmailBuilderAside](aipemailbuildercomponent/aipemailbuilderaside/), which provide different editing functionalities.

**AIPEmailBody**&#x20;

The AIPEmailBody component is responsible for creating the structure of the email. It includes two subcomponents:&#x20;

* [AIPStructure](aipemailbuildercomponent/aipemailbody/aipstructure.md): Allows you to add and edit the blocks that make up the email structure
* [AIPTemplateList](aipemailbuildercomponent/aipemailbody/aiptemplatelist.md): Provides a list of pre-built templates that you can choose from.

**AIPEmailBuilderAside**

Provides a variety of editing functionalities for customizing the design of the email. It includes several subcomponents:

* [AIPAlign](aipemailbuildercomponent/aipemailbuilderaside/aipalign.md)
* [AIPBackground](aipemailbuildercomponent/aipemailbuilderaside/aipbackground.md)
* [AIPBorder](aipemailbuildercomponent/aipemailbuilderaside/aipborder.md)
* [AIPColor](aipemailbuildercomponent/aipemailbuilderaside/aipcolor.md)
* [AIPFont](aipemailbuildercomponent/aipemailbuilderaside/aipfont.md)
* [AIPImageUpload](aipemailbuildercomponent/aipemailbuilderaside/aipimageupload.md)
* [AIPLineHeight](aipemailbuildercomponent/aipemailbuilderaside/aiplineheight.md)
* [AIPLink](aipemailbuildercomponent/aipemailbuilderaside/aiplink.md)
* [AIPMargin](aipemailbuildercomponent/aipemailbuilderaside/aipmargin.md)
* [AIPPadding](aipemailbuildercomponent/aipemailbuilderaside/aippadding.md)
* [AIPWidthHeight](aipemailbuildercomponent/aipemailbuilderaside/aipwidthheight.md)

In addition to these editing functionalities, by creating your own custom template, you have full control with undo/redo functionality through the AIPEmailBuilderHistoryService and an API for converting email templates through the AIPEmailBuilderRestService.
