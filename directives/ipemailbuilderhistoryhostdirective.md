---
description: >-
  The EmailBuilderHistoryHostDirective in @wlocalhost/ngx-email-builder library.
  Watches for option changes and prevents loss of unsaved changes. Used as root
  settings element.
---

# IPEmailBuilderHistoryHostDirective

### Import

To use the `EmailBuilderHistoryHostDirective`, you need to import it from the `@wlocalhost/ngx-email-builder` library:

```typescript
import { EmailBuilderHistoryHostDirective } from "@wlocalhost/ngx-email-builder";
```

### Directive Decorator

The `EmailBuilderHistoryHostDirective` is decorated with the `@Directive` decorator, which provides configuration metadata for the directive. The decorator takes an object with the following properties:

* `selector` - a string representing the selector for the directive.
* `exportAs` - a string representing the exported name for the directive.

```typescript
@Directive({
  selector: "[ipEmailBuilderHistoryHost]",
  exportAs: "ipEmailBuilderHistoryHost"
})
```

### Class Definition

The `EmailBuilderHistoryHostDirective` class implements the `OnInit` interface and watches for changes in the email builder options. It takes an input of type `IIPOptionsHistoryContext`, which provides the context for the history host element.

```typescript
export interface IIPOptionsHistoryContext<T extends TIPEmailBuilderStyles = TIPEmailBuilderStyles> {
  // Current host class
  cmp: AIPEmailBuilderBlock<T> | AIPStructure | AIPEmailBody,
  // Object with elements to watch
  watch: T
}

@Directive({
  selector: "[ipEmailBuilderHistoryHost]",
  exportAs: "ipEmailBuilderHistoryHost"
})
export class EmailBuilderHistoryHostDirective implements OnInit {
  @Input() ipEmailBuilderHistoryHost?: IIPOptionsHistoryContext;
  readonly historyService = inject(AIPEmailBuilderHistoryService);

  ngOnInit(): void {
    this.detectChanges(false);
  }

  // Detect differences in options if user made some changes
  detectChanges(isAction: boolean): void {
    if (this.ipEmailBuilderHistoryHost) {
      const { cmp, watch } = this.ipEmailBuilderHistoryHost;
      if (cmp instanceof AIPEmailBuilderBlock) {
        const diff = getDiff(watch, cmp.toObject());
        this.historyService.addHistory(`block:${cmp.id}`, diff, isAction);
      } else if (cmp instanceof AIPStructure) {
        const diff = getDiff(watch, cmp.value.options);
        this.historyService.addHistory(`structure:${cmp.value.id}`, diff, isAction);
      } else {
        const diff = getDiff(watch, cmp.value.general);
        this.historyService.addHistory("body", diff, isAction);
      }
    } else {
      console.warn("You must define [ipEmailBuilderHistoryHost] as [ipEmailBuilderHistoryHost]=\"this | toHistoryOptions\" to work properly.");
    }
  }
}
```

### Usage

To use the `EmailBuilderHistoryHostDirective` in your Angular application, you need to add it to the root settings element of the email builder:

```html
<div ipEmailBuilderHistoryHost [ipEmailBuilderHistoryHost]="{ cmp: cmp, watch: watch }"></div>
```

The `cmp` and `watch` properties should be set to the component that the directive is attached to and the options that need to be watched, respectively. These properties can be set in the component's TypeScript file and passed to the directive through the `ipEmailBuilderHistoryHost` input.
