---
description: >-
  AIPEmailBody is an abstract class that defines the interface for settings to
  interact with the builder. It implements the OnInit and IIPValueChanged
  interfaces and extends the WithSettings class.
---

# AIPEmailBody

### Properties

* `content: string` - The email body content to be displayed.
* `editable: boolean` - A boolean value indicating whether the content of the email body can be edited.
* `editorConfig: object` - An object containing configuration options for the email body editor.
* `onChange: EventEmitter<string>` - An event emitter that emits the updated email body content whenever it is changed.
* `onBlur: EventEmitter<void>` - An event emitter that emits when the email body editor is blurred.
* `onFocus: EventEmitter<void>` - An event emitter that emits when the email body editor is focused.

### Methods

`AIPEmailBody` does not define any additional methods beyond those of the base `AIPEmailBody` component.

### Events

* `onChange(content: string)` - Fired whenever the content of the email body is changed. Emits the updated content as a string parameter.
* `onBlur()` - Fired whenever the email body editor is blurred.
* `onFocus()` - Fired whenever the email body editor is focused.

### Usage

Here's an example:

<pre class="language-typescript"><code class="lang-typescript">import { AIPEmailBody } from '@wlocalhost/ngx-email-builder';

<strong>@Component({
</strong>  selector: 'my-email-body',
  templateUrl: './email-body.component.html',
})
export class EmailBodyComponent extends AIPEmailBody {
  // Define additional properties and methods as needed.
}
</code></pre>

Using your `my-email-body` in your template:

```html
<my-email-body [content]="emailContent"></my-email-body>
```

In this example, the `content` property of the `AIPEmailBody` component is bound to a string property called `emailContent` in the parent component.&#x20;

The email body content can be updated by changing the value of `emailContent`, and any changes made to the email body will be emitted through the `onChange` event.
