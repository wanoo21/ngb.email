---
description: >-
  The AIPTemplateList component is part of the @wlocalhost/ngx-email-builder
  library. It provides an Angular component interface for building and managing
  email templates.
---

# AIPTemplateList

### Component Decorator

The `AIPTemplateList` component is decorated with the `@Component` decorator, which provides configuration metadata for the component. The decorator takes an object with the following properties:

* `selector` - a string representing the selector for the component.
* `templateUrl` - a string representing the URL to the component template file.
* `styleUrls` - an array of strings representing the URLs to the component style files.
* `changeDetection` - an enum value representing the change detection strategy for the component. In this case, it is set to `ChangeDetectionStrategy.OnPush`.

<pre class="language-typescript"><code class="lang-typescript">import { AIPTemplateList } from "@wlocalhost/ngx-email-builder";
<strong>
</strong><strong>@Component({
</strong>  selector: "tail-template-list",
  templateUrl: "./template-list.component.html",
  styleUrls: ["./template-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
</code></pre>

### Class Definition

The `TemplateListComponent` class extends the `AIPTemplateList` class, which provides the email template functionality. It is a custom implementation of the `AIPTemplateList` class, and can be used to create custom email templates.

```typescript
export class TemplateListComponent extends AIPTemplateList {
  // Implement any additional properties or methods here
}
```

### Usage

To use the `TemplateListComponent` in your Angular application, you can include it in the template of another component using the selector defined in the `@Component` decorator:

```html
<tail-template-list></tail-template-list>
```
