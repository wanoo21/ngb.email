---
description: >-
  The AIPEmailBuilderMiddlewareService is the base class that provides
  middleware functions for the email builder.
---

# AIPEmailBuilderMiddlewareService

The AIPEmailBuilderMiddlewareService provides middleware functions for the email builder, including retrieving lists of blocks, structures, and categories. It checks user permissions and confirms actions.

## Properties

* `templatesThumbsPath`: The path to the templates thumbnails.

## Methods

* `blocksList(blocks: IIPEmailBuilderBlockData[]): Observable<IIPEmailBuilderBlockData[]>`: Returns the list of blocks.

**Parameters**:`blocks`: The list of blocks.

**Returns**: `Observable<IIPEmailBuilderBlockData[]>:`The list of blocks.

* `structuresList(structures: IStructure[]): Observable<IStructure[]>`: Returns the list of structures.

**Parameters**:`structures`: The list of structures.

**Returns**: `Observable<IStructure[]>:`The list of structures.

* `categoryList(categories: IUserTemplateCategory[]): Observable<IUserTemplateCategory[]>`: Returns the list of categories.

**Parameters**:`categories`: The list of categories.

**Returns**: `Observable<IUserTemplateCategory[]>:`_The list of categories._

*   `categoryTemplates(category: IUserTemplateCategory): Observable<IUserTemplateCategory["templates"]>`: Returns the list of templates in the given category.



**Parameters**:`category`: The category.

**Returns**: `Observable<IUserTemplateCategory["templates"]>:`The list of templates in the category.

* `templateThumbnail(category: IUserTemplateCategory, template: string): string`: Returns the path to the thumbnail for the given category and template.

**Parameters**:

* `category`: The category.
* `template`: The template name.

**Returns**: `string:`The path to the thumbnail.

* `delete(entity: IStructure | AIPEmailBuilderBlockExtendedOptions): Promise<boolean>`: Prompts the user with a confirmation dialog to delete an entity.

**Parameters**:`entity`: The entity to be deleted.

**Returns**: A promise that resolves to `true` if the user confirms deletion, `false` otherwise.

* `alert(message: string): void`: Displays an alert with the given message.

**Parameters**:`message`: The message to be displayed.

* `confirm(message: string): Promise<boolean>`: Prompts the user with a confirmation dialog.

**Parameters**:`message`: The message to be displayed in the dialog.

**Returns**: A promise that resolves to `true` if the user confirms, `false` otherwise.

* `can(action: middlewareStructureActions | middlewareBlockActions | middlewareEmailActions, entity: AIPEmailBuilderBlockExtendedOptions | IStructure | IPEmail): boolean`: Determines if the user can perform the specified action on the given entity.

**Parameters**:

* `action`: The action to be performed.
* `entity`: The entity on which the action is to be performed.

**Returns**: `true` if the user can perform the action, `false` otherwise.

## Usage

Here's an example of how you could use the `AIPEmailBuilderMiddlewareService`:

```typescript
import { Component } from '@angular/core';
import { AIPEmailBuilderMiddlewareService } from 'path/to/email-builder-middleware.service';
import { IStructure } from 'path/to/structure';
import { AIPEmailBuilderBlockExtendedOptions } from 'path/to/core/Block';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent {
  structure: IStructure = { /* your structure data here */ };
  block: AIPEmailBuilderBlockExtendedOptions = { /* your block data here */ };
​
  constructor(private emailBuilderMiddlewareService: AIPEmailBuilderMiddlewareService) {}
​
  onDelete() {
    this.emailBuilderMiddlewareService.delete(this.structure)
      .then(confirmed => {
        if (confirmed) {
          // delete the structure
          console.log('Structure deleted!');
        } else {
          // do nothing
          console.log('Structure deletion cancelled.');
        }
      });
  }
​
  onDuplicate() {
    const canDuplicate = this.emailBuilderMiddlewareService.can('duplicate', this.block);
    if (canDuplicate) {
      // duplicate the block
      console.log('Block duplicated!');
    } else {
      this.emailBuilderMiddlewareService.alert('You are not allowed to duplicate this block.');
    }
  }
​
  onEdit() {
    const canEdit = this.emailBuilderMiddlewareService.can('edit', this.block);
    if (canEdit) {
      // edit the block
      console.log('Block edited!');
    } else {
      this.emailBuilderMiddlewareService.alert('You are not allowed to edit this block.');
    }
  }
}
```

This is an example of how to use the `AIPEmailBuilderMiddlewareService` in an Angular component. The `AIPEmailBuilderMiddlewareService` is a base class that provides middleware functions for the email builder.

The component injects `AIPEmailBuilderMiddlewareService` and uses its `delete()`, `can('duplicate', ...)`, and `can('edit', ...)` methods to delete a structure, duplicate a block, and edit a block, respectively. These methods are triggered by some event (e.g. button click) in the component's template.

For the `delete()` method, the component calls it with a structure as an argument, which prompts the user with a confirmation dialog to delete the structure. The `then()` function is used to handle the user's confirmation or cancellation of the deletion.

For the `can('duplicate', ...)` and `can('edit', ...)` methods, the component calls them with a block as an argument to check if the user is allowed to perform the corresponding action on the block. If the user is allowed, the component performs the action; otherwise, an alert is displayed to inform the user that they are not allowed to perform the action.
