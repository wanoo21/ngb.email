import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IP_EMAIL_BUILDER_CONFIG } from '../private-tokens';
import { IStructure } from '../structure/structure';
import { AIPEmailBuilderBlock } from '../core/Block';
import {
  IIPEmail,
  IIPEmailBuilderBlockData,
  IUserTemplateCategory,
} from '../interfaces';

export type middlewareBlockActions = 'delete' | 'duplicate' | 'edit';
export type middlewareStructureActions = middlewareBlockActions | 'save';
export type middlewareEmailActions = 'preview' | 'save';

/**
 * The AIPEmailBuilderMiddlewareService is the base class that provides middleware functions for the email builder.
 */
@Injectable({
  providedIn: 'root',
  useFactory: () => inject(DefaultIPEmailBuilderMiddlewareService),
})
export abstract class AIPEmailBuilderMiddlewareService {
  abstract blocksList(
    blocks: IIPEmailBuilderBlockData[]
  ): Observable<IIPEmailBuilderBlockData[]>;

  abstract structuresList(structures: IStructure[]): Observable<IStructure[]>;

  abstract categoryList(
    categories: IUserTemplateCategory[]
  ): Observable<IUserTemplateCategory[]>;

  abstract categoryTemplates(
    category: IUserTemplateCategory
  ): Observable<IUserTemplateCategory['templates']>;

  abstract templateThumbnail(
    category: IUserTemplateCategory,
    template: string
  ): string;

  abstract delete(entity: IStructure | AIPEmailBuilderBlock<unknown>): Promise<boolean>;

  abstract alert(message: string): void;

  abstract confirm(message: string): Promise<boolean>;

  abstract can(
    action: middlewareBlockActions,
    entity: AIPEmailBuilderBlock<unknown>
  ): boolean;
  abstract can(action: middlewareStructureActions, entity: IStructure): boolean;
  abstract can(action: middlewareEmailActions, entity: IIPEmail): boolean;
  abstract can(
    action:
      | middlewareStructureActions
      | middlewareBlockActions
      | middlewareEmailActions,
    entity: AIPEmailBuilderBlock<unknown> | IStructure | IIPEmail
  ): boolean;
}

/**
 * An implementation of the `AIPEmailBuilderMiddlewareService` for the Pro version of the email builder.
 */
@Injectable({ providedIn: 'root' })
export class DefaultIPEmailBuilderMiddlewareService
  implements AIPEmailBuilderMiddlewareService
{
  /**
   * The path to the templates thumbnails.
   * @type {string}
   */
  readonly templatesThumbsPath: string = inject(IP_EMAIL_BUILDER_CONFIG)
    .templatesThumbsPath;

  /**
   * Returns the list of blocks.
   *
   * @param {IIPEmailBuilderBlockData[]} blocks The list of blocks.
   * @returns {Observable<IIPEmailBuilderBlockData[]>} The list of blocks.
   */
  blocksList(
    blocks: IIPEmailBuilderBlockData[]
  ): Observable<IIPEmailBuilderBlockData[]> {
    return of(blocks);
  }

  /**
   * Returns the list of structures.
   *
   * @param {IStructure[]} structures The list of structures.
   * @returns {Observable<IStructure[]>} The list of structures.
   */
  structuresList(structures: IStructure[]): Observable<IStructure[]> {
    return of(structures);
  }

  /**
   * Returns the list of categories.
   *
   * @param {IUserTemplateCategory[]} categories The list of categories.
   * @returns {Observable<IUserTemplateCategory[]>} The list of categories.
   */
  categoryList(
    categories: IUserTemplateCategory[]
  ): Observable<IUserTemplateCategory[]> {
    return of(categories);
  }

  /**
   * Returns the list of templates in the given category.
   *
   * @param {IUserTemplateCategory} category The category.
   * @returns {Observable<IUserTemplateCategory['templates']>} The list of templates in the category.
   */
  categoryTemplates(
    category: IUserTemplateCategory
  ): Observable<IUserTemplateCategory['templates']> {
    return of(category.templates);
  }

  /**
   * Returns the path to the thumbnail for the given category and template.
   *
   * @param {IUserTemplateCategory} category The category.
   * @param {string} template The template name.
   * @returns {string} The path to the thumbnail.
   */
  templateThumbnail(category: IUserTemplateCategory, template: string): string {
    return `${this.templatesThumbsPath}/${category}/${template}/${template}.jpg`;
  }

  /**
   * Prompts the user with a confirmation dialog to delete an entity.
   *
   * @param entity The entity to be deleted.
   * @returns A promise that resolves to `true` if the user confirms deletion, `false` otherwise.
   */
  delete(entity: IStructure | AIPEmailBuilderBlock<unknown>): Promise<boolean> {
    return this.confirm('Are you sure?');
  }

  /**
   * Displays an alert with the given message.
   *
   * @param message The message to be displayed.
   */
  alert(message: string): void {
    alert(message);
  }

  /**
   * Prompts the user with a confirmation dialog.
   *
   * @param message The message to be displayed in the dialog.
   * @returns A promise that resolves to `true` if the user confirms, `false` otherwise.
   */
  confirm(message: string): Promise<boolean> {
    const ask = confirm(message);
    return Promise.resolve(ask);
  }

  /**
   * Determines if the user can perform the specified action on the given entity.
   *
   * @param action The action to be performed.
   * @param entity The entity on which the action is to be performed.
   * @returns `true` if the user can perform the action, `false` otherwise.
   */
  can(action: middlewareBlockActions, entity: AIPEmailBuilderBlock<unknown>): boolean;
  can(action: middlewareStructureActions, entity: IStructure): boolean;
  can(action: middlewareEmailActions, entity: IIPEmail): boolean;
  can(
    action:
      | middlewareStructureActions
      | middlewareBlockActions
      | middlewareEmailActions,
    entity: AIPEmailBuilderBlock<unknown> | IStructure | IIPEmail
  ): boolean;
  can(
    action:
      | middlewareStructureActions
      | middlewareBlockActions
      | middlewareEmailActions,
    entity: AIPEmailBuilderBlock<unknown> | IStructure | IIPEmail
  ): boolean {
    return true;
  }
}
