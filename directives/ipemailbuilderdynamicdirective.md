---
description: >-
  The IPEmailBuilderDynamicDirective creates and inserts email builder blocks
  dynamically in the view and requires the cdkDrag directive.
---

# IPEmailBuilderDynamicDirective

### Selector

```csharp
[ipEmailBuilderDynamicBlockDirective]
```

### Inputs

**`ipEmailBuilderDynamicBlockDirective`**

A dynamic block with its options. The options must include a `type` property that matches a block type from the `IP_EMAIL_BUILDER_BLOCKS_DATA` injection token.

### Exported Members

**`instance`**

The instance of the dynamically created `AIPEmailBuilderBlock` object.

### Usage

Example usage:

```html
<ng-container *ngFor="let block of blocks">
  <ng-container [ipEmailBuilderDynamicBlockDirective]="block"></ng-container>
</ng-container>
```

```typescript
import { Component } from "@angular/core";
import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "@wlocalhost/ngx-email-builder";
import { AIPEmailBuilderBlockExtendedOptions } from "../core/Block";

@Component({
  selector: "app-email-builder",
  templateUrl: "./email-builder.component.html",
  styleUrls: ["./email-builder.component.scss"]
})
export class EmailBuilderComponent {
  blocks: AIPEmailBuilderBlockExtendedOptions[];

  constructor(
    @Inject(IP_EMAIL_BUILDER_BLOCKS_DATA)
    private readonly blocksData: IIPEmailBuilderBlockData[]
  ) {
    // Initialize blocks with default options
    this.blocks = blocksData.map(block => ({
      type: block.type,
      options: block.options
    }));
  }
}
```
