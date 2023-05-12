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

This example demonstrates how to use the `AIPEmailBuilderMiddlewareService` in your Angular application:

1. Import the AIPEmailBuilderMiddlewareService and inject it into your component or service using Angular's dependency injection.
2. To get the list of blocks, structures, categories, or category templates, call the corresponding methods (`blocksList()`, `structuresList()`, `categoryList()`, `categoryTemplates()`) on the middlewareService, passing in the required data. These methods return an observable which you can subscribe to and add your custom logic inside the subscription.
3. To get the path to the thumbnail for a specific category and template, call the `templateThumbnail()` method, passing in the category and template name.
4. To prompt the user with a confirmation dialog for deleting an entity, call the `delete()` method, passing in the entity. This method returns a promise that resolves to true if the user confirms deletion, false otherwise.
5. To display an alert with a given message, call the `alert()` method.
6. To prompt the user with a confirmation dialog, call the `confirm()` method, passing in the message. This method returns a promise that resolves to true if the user confirms, false otherwise.
7. To check if a user can perform a specific action on a given entity, call the `can()` method, passing in the action and entity. This method returns a boolean indicating if the action is allowed or not.

Make sure to replace `'path/to/email-builder-middleware.service'`, `'path/to/structure'`, and `'path/to/core/Block'` with the actual paths to the AIPEmailBuilderMiddlewareService, IStructure, and AIPEmailBuilderBlockExtendedOptions files, respectively.

{% hint style="info" %}
**Note**: There are two concrete implementations of the `AIPEmailBuilderMiddlewareService`: `ProIPEmailBuilderMiddlewareService` for the Pro version and `FreeIPEmailBuilderMiddlewareService` for the Free version.&#x20;

The appropriate implementation will be provided automatically based on your configuration.
{% endhint %}
