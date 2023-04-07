---
description: >-
  The IpPreviewLinkPipe pipe dynamically creates and revokes a URL object link
  for previewing an email.
---

# IpPreviewLinkPipe

It converts the provided `IPEmail` object to HTML and creates a URL object link to preview it.

## **Usage**

1. Import the `IpPreviewLinkPipe` in your module file:

```typescript
import { IpPreviewLinkPipe } from '@wlocalhost/ngx-email-builder';
```

2. Declare the `IpPreviewLinkPipe` in the `imports` array of your module:

```typescript
@NgModule({
  imports: [
    // ...
    IpPreviewLinkPipe
  ],
  // ...
})
export class AppModule { }
```

3. Use the `IpPreviewLinkPipe` in your component's template:

```html
<!-- Preview email -->
<iframe [src]="email | ipPreviewLink" width="100%" height="500"></iframe>
```
