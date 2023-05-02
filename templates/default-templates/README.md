---
title: Getting Started with Templates
description: Getting started with NGX Email Builder templates
---

# NGB Email Builder Templates

[NGB Email Builder](https://ngb.email) comes with a set of [templates](README.md) that you can use as a starting point to create your emails. Although these templates are not optimized for a ready-to-use product, they are designed to be simple and easy to customize.

We have intentionally kept the templates as basic as possible, so you can easily understand how they work and how to customize them. Additionally, we have minimized the use of third-party libraries, with the exception of [Recursive Diff](https://www.npmjs.com/package/recursive-diff) for saving history in the email builder.

Feel free to add your own plugins, such as a color picker, image uploader, or text editor. We strive to make this customization process as simple as possible. For instance, we always use the [ipHistoryModel](../../directives/iphistorymodeldirective.md) directive for each element that we want to save in the history. This directive has access to almost all form elements within the email builder. In the future, you may be able to extend this directive and add plugins directly to the element.

However, we recommend that you upload the library to your own repository and customize it as needed. All default templates are [Nx](https://nx.dev) projects, so they can easily be integrated into an Angular NX workspace. We will provide additional documentation on how to use the templates in other Angular projects later.

[Module federation](https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/) is also on our roadmap, which may provide a solution for integrating the templates into other frameworks, such as React, Vue, Svelte, and more. Stay tuned for updates!

## Import the module from source code

TODO
