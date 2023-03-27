---
description: >-
  The AIPEmailBuilderBlock is an abstract class that provides a common interface
  for the settings component to interact with the builder.
---

# AIPEmailBuilderBlock

This abstract class is a parent class for all the builder block components. **It has a type that is unique to each block and a set of options that can be configured for that block.**

To use the `AIPEmailBuilderBlock`, you will need to create a new component that extends this class. This component should implement the required abstract methods and properties.&#x20;

_You can also add any additional properties or methods as required._

The `options` property is of type `T`, which is the interface for the block options. This interface should be defined in your component and should include all the options that can be configured for that block.&#x20;

**The `type` property is a string that identifies the type of block - MUST BE UNIQUE.**

The `parseFont` method is a helper method that parses the font family and adds the font to the head if it is not a standard font. This is useful if you want to use a custom font for your block.

The `toObject` method returns the block as an object. This is useful if you want to serialize the block and store it in a database or send it over the network.

Here is an example of how to use the `AIPEmailBuilderBlock`:

```typescript
import { AIPEmailBuilderBlock } from '@wlocalhost/ngx-email-builder';

interface MyBlockOptions {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'my-block',
  template: '<div>{{ options.title }}</div>',
})
export class MyBlockComponent extends AIPEmailBuilderBlock<MyBlockOptions> {
  type = 'my-block';
  options: MyBlockOptions = {
    title: 'My Block',
    subtitle: '',
  };
  hostStyles = {};
}
```

In this example, we have created a new component called `MyBlockComponent` that extends the `AIPEmailBuilderBlock` abstract class.&#x20;

It has a unique type of `my-block` and a set of options defined in the `MyBlockOptions` interface.&#x20;

_The component template will display the title of the block._

When you create a new block using this component, you can configure the `title` and `subtitle` options as required.

## `AIPEmailBuilderBlockExtendedOptions`

An interface for the extended block options, which includes the options object and the block type.

#### Properties

* `options`: The options object for the block.
* `type`: The type of the block.

```typescript
interface MyCustomBlockOptions {
  title: string;
  content: string;
}

const myBlock: AIPEmailBuilderBlockExtendedOptions<MyCustomBlockOptions> = {
  options: { title: "My Title", content: "My Content" },
  type: "my-custom-block"
};
```

See this page for more info on how to [create a new custom block](custom-block.md).
