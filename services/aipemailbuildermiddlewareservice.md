---
description: The AIPEmailBuilderMiddlewareService is a key service in the email builder.
---

# AIPEmailBuilderMiddlewareService

It provides middleware functions that enable certain functionalities in the email builder, such as adding and deleting blocks, structures, and categories.

The available methods in this service are as follows:

* `blocksList(blocks: IIPEmailBuilderBlockData[]): Observable<IIPEmailBuilderBlockData[]>`: Returns the list of blocks.
* `structuresList(structures: IStructure[]): Observable<IStructure[]>`: Returns the list of structures.
* `categoryList(categories:` [`IUserTemplateCategory`](../interfaces.md#iusertemplatecategory)`[]): Observable<IUserTemplateCategory[]>`: Returns the list of categories.
* `categoryTemplates(category: IUserTemplateCategory): Observable<IUserTemplateCategory["templates"]>`: Returns the list of templates in the given category.
* `templateThumbnail(category: IUserTemplateCategory, template: string): string`: Returns the path to the thumbnail for the given category and template.
* `delete(entity: IStructure | AIPEmailBuilderBlockExtendedOptions): Promise<boolean>`: Prompts the user with a confirmation dialog to delete an entity.
* `alert(message: string): void`: Displays an alert with the given message.
* `confirm(message: string): Promise<boolean>`: Prompts the user with a confirmation dialog.
* `can(action: middlewareStructureActions | middlewareBlockActions | middlewareEmailActions, entity: AIPEmailBuilderBlockExtendedOptions | IStructure | IPEmail): boolean`: Determines if the user can perform the specified action on the given entity.

One of the important methods in the `AIPEmailBuilderMiddlewareService` is `can`.&#x20;

This method takes an action and an entity and returns a boolean value that indicates whether the user can perform the specified action on the given entity.&#x20;

The [`ipCan` pipe](../pipes/ipcanpipe.md) uses this method to check if the end-user can or cannot perform an action. For example, `ipCan` pipe can be used in the template to disable or hide certain buttons based on the user's permissions:

```html
<div *ngIf="block | ipCan: 'edit'">...</div>
```

This will show the content of the div only if the user can perform the `edit` action on the `block` entity.

On the other hand, the [`applyMiddleware` pipe](../pipes/applymiddlewarepipe.md) allows you to transform data in a component's HTML based on some of the methods provided by the `AIPEmailBuilderMiddlewareService`.

```html
<!-- Apply a middleware function on the data -->
<div *ngFor="let block of blocks | applyMiddleware:'blocksList'">{{ block.name }}</div>
```

**The allowed methods are "blocksList", "structuresList", "categoryList", "categoryTemplates", and "templateThumbnail".**

Usage inside a class:

```typescript
// Check if the user can perform an action on the given entity
const canDelete = middlewareService.can('deleteBlock', block);

// Display an alert with a message
middlewareService.alert('Block deleted successfully.');

// Delete an entity with a confirmation dialog
middlewareService.delete(block).then(result => {
  if (result) {
    // entity deleted
  }
});

// Get the thumbnail for a template
const thumbnailPath = middlewareService.templateThumbnail(category, template);
```

The `AIPEmailBuilderMiddlewareService` has two subclasses, `ProIPEmailBuilderMiddlewareService` and `FreeIPEmailBuilderMiddlewareService`.&#x20;

These subclasses inherit from the abstract class and provide their implementations for the methods defined in the parent class. `ProIPEmailBuilderMiddlewareService` provides additional methods that are only available in the Pro version of the email builder.
