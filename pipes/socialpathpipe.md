---
description: >-
  The SocialPathPipe generates a path for social network icons based on network
  name and configuration.
---

# SocialPathPipe

## Methods

#### transform()

The `transform()` method generates a full network path based on the network name and configuration.

**Parameters:**

* `network`: The name of the social network.

**Returns:**

* The full network path.

## Usage

```html
<!-- example.component.html -->
<img [src]="network | socialPath" alt="Social Network Icon">
```

This example snippet represents an Angular component HTML template.&#x20;

It displays a social network icon as an image using the `<img>` tag.&#x20;

The image source URL is dynamically set based on the `network` variable, which is transformed using the `socialPath` pipe.&#x20;

Providing alternative text for the image, the `alt` attribute ensures accessibility by offering a descriptive text representation.
