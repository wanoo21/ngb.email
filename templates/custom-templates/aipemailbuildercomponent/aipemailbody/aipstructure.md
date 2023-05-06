---
description: >-
  The AIPStructure component is part of the @wlocalhost/ngx-email-builder
  library. It extends the Structure class and provides an Angular component
  interface for building email structures.
---

# AIPStructure

### Import

To use the `AIPStructure` component, you need to import it from the `@wlocalhost/ngx-email-builder` library:

```typescript
import { AIPStructure } from "@wlocalhost/ngx-email-builder";
```

### Component Decorator

The `AIPStructure` component is decorated with the `@Component` decorator, which provides configuration metadata for the component. The decorator takes an object with the following properties:

* `selector` - a string representing the selector for the component.
* `templateUrl` - a string representing the URL to the component template file.
* `styleUrls` - an array of strings representing the URLs to the component style files.
* `changeDetection` - an enum value representing the change detection strategy for the component. In this case, it is set to `ChangeDetectionStrategy.OnPush`.

```typescript
@Component({
  selector: "tail-structure",
  templateUrl: 'structure.component.html',
  styleUrls: ['structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

### Class Definition

The `StructureComponent` class extends the `AIPStructure` class, which provides the email structure functionality. It is a custom implementation of the `Structure` class, and can be used to create custom email structures.

```typescript
export class StructureComponent extends AIPStructure {
  // Implement any additional properties or methods here
}
```

### Usage

To use the `StructureComponent` in your Angular application, you can include it in the template of another component using the selector defined in the `@Component` decorator:

```html
<tail-structure></tail-structure>
```

The `StructureComponent` can also be used in a parent component's TypeScript file to create and manipulate email structures:

