---
description: >-
  Creating custom email templates with ease. It provides a user-friendly
  interface that allows you to drag and drop various elements into your email
  template, including text, images, and buttons.
---

# Custom templates

## The main structure of a template

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

In addition to these editing functionalities, by creating your own custom template, you have full control with undo/redo functionality through the [AIPEmailBuilderHistoryService ](../../services/aipemailbuilderhistoryservice.md)and an API for converting email templates through the [AIPEmailBuilderRestService](../../services/aipemailbuilderrestservice.md).

## Custom templates folder structure

The [`AIPEmailBuilderComponent`](aipemailbuildercomponent/) provides a flexible platform for building custom email templates in your Angular application.&#x20;

To get started, you'll need to navigate to `src/lib` in your project, where you'll find the following folders:

![](<../../.gitbook/assets/image (6).png>)

### lib

For our example throughout the folder structure, we used `tailwind-email-builder`.

We'll explore each folder individually in detail.

#### blocks&#x20;

In the blocks folder you'll find the following components:

* `button-block`: Creates a button block in an email.
* `divider-block`: Is creating dividers in an email.
* `html-block`: Provides custom HTML code to an email.
* `image-block`: Creates an image block in an email.
* `navigation-block`: Creates navigation links in an email.
* `social-block`: Displays a list of social network icons and labels.
* `spacer-block`: Allows adding empty space in the email layout.
* `text-block`: Customizable block used for displaying text content.

Each block contains an `html`, `scss`, `spec.ts` and `ts` file.&#x20;

In the `html` file are defined the component's template.

The component's styles are defined in the `scss` file.

A component's definition is specified in its associated `ts` file, while the testing of the component is carried out in the `spec.ts` file.

#### directives

In the blocks folder you'll find the following subfolders:

* form: This folder in the project contains several Angular directives that define and modify form elements such as input fields, buttons, labels, and panels. These directives add class lists, set attributes, and modify styles to achieve a consistent look and feel for the form elements.
* tooltip: In this folder, the directive is responsible for creating a tooltip with the given content when hovering over the element it is applied to. The tooltip component is a simple component that displays the tooltip's content. Listening to mouseenter and mouseout events on the host element, this directive creates or removes the tooltip component as needed.

#### email-aside&#x20;

Contained within the email-aside folder are several files, including HTML and TypeScript files for a component.&#x20;

This component features a stepper, block and structure lists, and settings portal.&#x20;

In the component's HTML file, a horizontal stepper is defined with three labeled steps.&#x20;

The TypeScript file extends the [AIPEmailBuilderAside ](aipemailbuildercomponent/aipemailbuilderaside/)class and imports the CdkStepper and tap operators.&#x20;

By subscribing to the `currentSettingsPortal$` observable, the component updates the stepper's selected index.&#x20;

Testing for the email-aside component is done via the TestBed API within its respective `spec.ts` file.

**email-body**

Included in the email-body folder is an HTML and a TypeScript file.

The component inside the folder showcases an email body and consists of a drop list for structures, a template list, and settings for the template.&#x20;

In the HTML file, ngSwitch is used to alternate between the structure display and the template list display.&#x20;

The TypeScript file imports FormControl and extends the [AIPEmailBody ](aipemailbuildercomponent/aipemailbody/)class. To test the email-body component, the TestBed API is utilized in its `spec.ts` file.

#### ip-email-body

The IP-email-body folder consists of an HTML file and a TypeScript file used to display an email body component.&#x20;

It includes a drop list for structures, a template list, and settings for the template.&#x20;

Using ngSwitch, the HTML file toggles between displaying the structures and the template list.

The TypeScript file extends the [AIPEmailBody ](aipemailbuildercomponent/aipemailbody/)class and imports the FormControl module.&#x20;

To test the email-body component, its spec.ts file uses the TestBed API.&#x20;

The component's layout is implemented using CSS classes, including a grid system for positioning the different elements.&#x20;

Additionally, the component includes a preview feature, which can display the email in different device sizes, such as desktop, tablet, or mobile.&#x20;

Finally, the TailEmailBuilderComponent class extends the [AIPEmailBuilderComponent ](aipemailbuildercomponent/)and adds custom functionality to the email builder component.

#### settings

In the settings folder you'll find the following components:

* `align`: Defines a template with two select elements, one for horizontal alignment and one for vertical alignment.
* `background`: Allows users to customize the background of an email. It includes options for setting a background color or image with repeat and size settings.
* `border`: Contains files for customizing the border of an element. It includes a color picker, options for adjusting border width and radius and selecting the border style.
* `color`: Allows customizing the appearance of borders. The component template includes options for specifying border color, width, style, and radius.
* `font`: Contains files related to customizing the font style of text. The files include a component for customizing the font size, weight, and style, as well as options for choosing standard or custom Google fonts.
* `image-upload`: Contains an Angular component that allows the user to input a URL for an image and displays a preview of the image if available.&#x20;
* `line-height`: Consists of a form input for specifying the line height value and a dropdown menu for selecting the unit of measurement.
* `link`: Contains files for a component that allows users to add links to their email templates. The component includes an input field for the link URL and a dropdown menu to select the link target, such as opening the link in a new window.
* `margin`: Contains a component that allows users to set margin values for an HTML element. The component template consists of an input field for each of the four margin values: top, right, bottom, and left. The user can enter a numerical value in pixels, which is then stored in the component's `value` object.&#x20;
* `padding`: Allows users to adjust the padding of an HTML element. It consists of a grid layout with four input fields, one for each side (top, right, bottom, left), and an associated label for each field.
* `width-height`: Contains a component that allows users to set the width and height of an element. The component includes an input field for numerical values and a dropdown for selecting units of measurement, as well as a button for setting the dimensions to `auto`.

To locate the [`AIPEmailBody` ](aipemailbuildercomponent/aipemailbody/)component, navigate to the folder for the **email body**.&#x20;

You will find the following files inside the folder:

* `email-body.component.html`
* `email-body.component.scss`
* `email-body.component.spec.ts`
* `email-body.component.ts`

#### `email-body.component.html`

This is an Angular template file for the `AIPEmailBody` component.&#x20;

It contains an `ng-container` that switches between different parts of the email body editor based on the value of the `contentPart$` observable.&#x20;

The default part displays a list of email body structures that can be dragged and dropped, and the templates part displays a list of available templates.

#### `email-body.component.scss`

The `email-body.component.scss` file contains SCSS code that defines the styling for the email body component in an email builder application.

By setting the `display` property to block on the host element, which is the component itself, the component can take up the entire available width of its parent container.

#### `email-body.component.spec.ts`

This file contains the unit test for the `EmailBodyComponent`.&#x20;

The test checks if the component is created successfully using the Angular TestBed and the component fixture.

#### `email-body.component.ts`

An Angular component file that extends the [AIPEmailBody ](aipemailbuildercomponent/aipemailbody/)abstract class from `@wlocalhost/ngx-email-builder`.&#x20;

The `EmailBodyComponent` defines a `control` property as an instance of `FormControl`. This can be used to manage the value of the email body content.

In addition, the component sets the `changeDetection` strategy to OnPush, which improves performance by detecting changes only when needed.

The template for this component is defined in `email-body.component.html`, and the component's styles are defined in `email-body.component.scss`.

#### structure

In the structure folder you'll find the following components:

* `structure.component.html`
* `structure.component.scss`
* `structure.component.spec.ts`
* `structure.component.ts`

#### `structure.component.html`

It contains the structure of an email builder component that allows users to drag and drop blocks and customize the layout and styles of the email.&#x20;

Nested elements such as ng-containers, divs, buttons, and labels with their respective attributes and directives are included in the template.

Custom directives and components are utilized by the template to render dynamic content and apply styles to the email.

The component includes various buttons to perform actions such as duplicating, deleting, and saving the email module. It also provides controls to adjust the background, border, padding, margin, and layout of the email, as well as individual styles for each column in the layout.

#### `structure.component.scss`

It includes styling rules for various elements such as the host, empty column, tool button, overflow, and drag-and-drop elements.&#x20;

Utility classes are used to apply styles like background color, border, opacity, and transitions in this.

#### `structure.component.spec.ts`

This is a test file for the `StructureComponent`.&#x20;

It imports necessary modules for testing and declares the component to be tested.&#x20;

In the `beforeEach` block, it creates a fixture for the component and detects changes.&#x20;

The `it` block tests if the component is successfully created.

#### `structure.component.ts`

The `StructureComponent` extends the [`AIPStructure` ](./#aipstructure)class from the `@wlocalhost/ngx-email-builder` library.&#x20;

It defines the structure of an email and includes a template and a stylesheet.&#x20;

The component has a selector of `tail-structure`, uses the `OnPush` change detection strategy, and is used to render dynamic content and apply styles to the email.

#### template-list

In the template-list folder you'll find the following components:

* `template-list.component.html`
* `template-list.component.scss`
* `template-list.component.spec.ts`
* `template-list.component.ts`

#### `template-list.component.html`

It consists of two main sections:

* The first section is a horizontally-aligned row of buttons, each representing a category of email templates. When a button is clicked, the corresponding category is selected and its associated templates are displayed in the second section.
* The second section is a grid of template cards, each displaying a thumbnail image of the template and a "Use in editor" button. Clicking the button allows the user to select the template and use it in the email editor.

If there are no templates available in the selected category, a message is displayed instead.&#x20;

Additionally, while the templates are being loaded, a loading message is displayed.

#### `template-list.component.scss`

It contains the styling for the `TemplateListComponent` component.&#x20;

The `:host` selector is used to target the host element and set it to `display: block`.

#### `template-list.component.spec.ts`

It defines a `describe` block that contains a series of tests for the `TemplateListComponent`.&#x20;

The `beforeEach` block uses the `TestBed.configureTestingModule` method to create a testing module and compile the `TemplateListComponent`.&#x20;

To determine if the component was created successfully, the test in the `it` block checks for its existence, and the test passes if the component is found.

#### `template-list.component.ts`

This is the TypeScript file for the Template List component.&#x20;

It imports the necessary modules and extends the [AIPTemplateList ](./#aiptemplatelist)class to implement the functionality of displaying a list of email templates.&#x20;

The component uses the OnPush change detection strategy to optimize performance.

#### tailwind-email-builder.module.spec.ts

Contains a single test that checks if the `TailwindEmailBuilderModule` is defined.&#x20;

This is done by importing the module and setting it up in a testing module using `TestBed.configureTestingModule`, then calling `expect` to verify that `TailwindEmailBuilderModule` is defined.

#### tailwind-email-builder.module.ts

The [Tailwind Email Builder](../default-templates/tailwind-email-builder.md) module is an Angular module that provides components and directives for building email templates.&#x20;

It is built on top of the Ngx Email Builder module and uses the Tailwind CSS framework for styling.

The module provides a set of customizable building blocks for creating email templates, including text blocks, button blocks, image blocks, and more.&#x20;

It also includes settings components for customizing email styles such as background, color, and font.&#x20;

Additionally, the module provides a template list component for browsing and selecting pre-built email templates.

## index.ts

It is the entry file of the `TailwindEmailBuilderModule`. It is an Angular module that provides a set of reusable components and directives for building HTML email templates with TailwindCSS classes.

This module imports and uses components and directives from the `NgxEmailBuilderModule` and `IpFormUIModule`, as well as several Angular CDK modules. It also declares its own components and directives, such as `TailEmailBuilderComponent`, `StructureComponent`, `EmailBodyComponent`, `TooltipDirective`, and `TooltipComponent`, among others.

Additionally, this module provides a set of default blocks, such as `TextBlockComponent`, `ButtonBlockComponent`, `ImageBlockComponent`, and more, that can be used to quickly assemble an email template.

Finally, `TailwindEmailBuilderModule` exports `TailEmailBuilderComponent` and provides a static method `forRoot()` that accepts an optional `IIPEmailBuilderConfig` object and returns a `ModuleWithProviders` instance of `TailwindEmailBuilderModule`. This allows the module to be easily imported and configured in an Angular application.

## test-setup.ts

`test-setup.ts` is a setup file for Jest testing framework that is used in combination with `jest-preset-angular` to provide pre-configured setup for Angular applications. This file imports `setup-jest` from `jest-preset-angular` which initializes the Jest environment to work with Angular testing.

The `setup-jest` file does a number of things such as configuring TestBed, providing mocks for common Angular dependencies, and configuring common testing utilities such as Jasmine Matchers.

By importing `setup-jest` in `test-setup.ts`, this setup file is automatically run before all Jest tests in the project, ensuring that the necessary setup is done before each test is executed.&#x20;

This helps to reduce boilerplate code and ensure a consistent testing environment across the project.

