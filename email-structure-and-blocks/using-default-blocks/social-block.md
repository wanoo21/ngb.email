---
description: >-
  The Social Block is a block that allows you to display links to your social
  media accounts in your email.
---

# Social Block

The Social Block is a block that allows you to display links to your social media accounts in your email. It supports several options to help you customize the appearance of your social media icons.

## Options

#### `ISocialBlockOptions`

The Social Block options interface, `ISocialBlockOptions`, includes the following properties:

* `align` (type: `TAlign`): The alignment of the social media icons.
* `mode` (type: `"vertical" | "horizontal"`): The layout of the social media icons.
* `font` (type: `IFont`): The font options for the label of the social media icons.
* `iconSize` (type: `ILineHeight`): The size of the social media icons.
* `lineHeight` (type: `ILineHeight`): The line height of the label of the social media icons.
* `color` (type: `string`): The color of the label of the social media icons.
* `innerPadding` (type: `IPadding`): The inner padding around the social media icons.
* `padding` (type: `IPadding`): The outer padding around the social media icons.

The Social Block options also include a `ISocialNetwork` interface for specifying the details of each social media network.&#x20;

#### `ISocialNetwork`

The `ISocialNetwork` interface includes the following properties:

* `href` (type: `string`): The URL of the social media profile.
* `target` (type: `string`): The target window for opening the social media profile link.
* `label` (type: `string`): The label text for the social media icon.
* `name` (type: `"github" | "instagram" | "web" | "snapchat" | "youtube" | "vimeo" | "medium" | "soundcloud" | "facebook" | "twitter" | "pinterest" | "linkedin" | "tumblr" | "xing"`): The name of the social media network to display.
* `padding` (type: `IPadding`): The padding around the social media icon.

## Usage

To use the Social Block in your email, you can create a new instance of the `SocialBlock` class and customize its options and network details. Here's an example:

```typescript
import { SocialBlock, ISocialNetwork } from '@wlocalhost/ngx-email-builder';

const socialNetworks: ISocialNetwork[] = [
  {
    label: "Github",
    name: "github",
    href: "https://github.com",
    target: "_blank",
  },
  {
    label: "Instagram",
    name: "instagram",
    href: "https://instagram.com",
    target: "_blank",
  },
  {
    label: "Facebook",
    name: "facebook",
    href: "https://facebook.com",
    target: "_blank",
  },
];

new SocialBlock().toObject({
  align: "center",
  color: "#ffffff",
  font: {
    family: "Arial, Helvetica, sans-serif",
    size: 14,
    style: "normal",
    weight: "normal",
  },
  iconSize: {
    value: 24,
    unit: "px",
  },
  innerPadding: {
    top: 10,
    right: 20,
    bottom: 10,
    left: 20,
  },
  lineHeight: {
    value: 1.5,
    unit: "em",
  },
  mode: "horizontal",
  padding: {
    top: 20,
    right: 0,
    bottom: 20,
    left: 0,
  },
}, socialNetworks);
```

In this example, we've created an array of `ISocialNetwork` objects, representing the social networks we want to display in the Social Block.&#x20;

We've then customized the appearance of the block using the available options, including the alignment, font, icon size, padding, and more.&#x20;

Finally, we've passed the array of social networks to the `toObject()` method of the Social Block.

{% hint style="info" %}
Note that the `ISocialNetwork` interface extends the `ILink` interface, which provides the `href` and `target` properties for the link.
{% endhint %}
