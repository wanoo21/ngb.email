import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { IStructure } from "../../structure/structure";
import { AIPEmailBuilderBlockExtendedOptions } from "../../core/Block";
import { IUserTemplateCategory } from "../../interfaces";
import { IPEmail } from "../../body/body";

export type middlewareBlockActions = "delete" | "duplicate" | "edit";
export type middlewareStructureActions = middlewareBlockActions | "save";
export type middlewareEmailActions = "preview" | "save";

/**
 * The AIPEmailBuilderMiddlewareService is an abstract service that provides middleware functions for the email builder.
 */
@Injectable({
  providedIn: "root",
  useFactory: (factory: IPEmailBuilderConfig) => {
    const [, , useExisting] = factory.providers || [];
    if (factory.isFreeVersion) {
      if (useExisting) {
        console.warn("It seems you try to rewrite AIPEmailBuilderMiddlewareService, but this is not allowed in free version.");
      }
      return new FreeIPEmailBuilderMiddlewareService();
    } else if (!factory.isFreeVersion && useExisting) {
      return inject(useExisting);
    }
    return new ProIPEmailBuilderMiddlewareService();
  },
  deps: [IP_EMAIL_BUILDER_CONFIG]
})
export abstract class AIPEmailBuilderMiddlewareService {
  /**
   * The path to the templates thumbnails.
   */
  readonly templatesThumbsPath = inject(IP_EMAIL_BUILDER_CONFIG).templatesThumbsPath;

  /**
   * Returns the list of blocks.
   *
   * @param blocks The list of blocks.
   * @returns The list of blocks.
   */
  blocksList(blocks: IIPEmailBuilderBlockData[]): Observable<IIPEmailBuilderBlockData[]> {
    return of(blocks);
  }

  /**
   * Returns the list of structures.
   *
   * @param structures The list of structures.
   * @returns The list of structures.
   */
  structuresList(structures: IStructure[]): Observable<IStructure[]> {
    return of(structures);
  }

  /**
   * Returns the list of categories.
   *
   * @param categories The list of categories.
   * @returns The list of categories.
   */
  categoryList(categories: IUserTemplateCategory[]): Observable<IUserTemplateCategory[]> {
    return of(categories);
  }

  /**
   * Returns the list of templates in the given category.
   *
   * @param category The category.
   * @returns The list of templates in the category.
   */
  categoryTemplates(category: IUserTemplateCategory): Observable<IUserTemplateCategory["templates"]> {
    return of(category.templates);
  }

  /**
   * Returns the path to the thumbnail for the given category and template.
   *
   * @param category The category.
   * @param template The template name.
   * @returns The path to the thumbnail.
   */
  templateThumbnail(category: IUserTemplateCategory, template: string): string {
    return `${this.templatesThumbsPath}/${category}-${template}.jpg`;
  }

  /**
   * Prompts the user with a confirmation dialog to delete an entity.
   *
   * @param entity The entity to be deleted.
   * @returns A promise that resolves to `true` if the user confirms deletion, `false` otherwise.
   */
  delete(entity: IStructure | AIPEmailBuilderBlockExtendedOptions): Promise<boolean> {
    return this.confirm("Are you sure?");
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
  can(action: middlewareBlockActions, entity: AIPEmailBuilderBlockExtendedOptions): boolean
  can(action: middlewareStructureActions, entity: IStructure): boolean
  can(action: middlewareEmailActions, entity: IPEmail): boolean
  can(action: middlewareStructureActions | middlewareBlockActions | middlewareEmailActions, entity: AIPEmailBuilderBlockExtendedOptions | IStructure | IPEmail): boolean
  can(action: middlewareStructureActions | middlewareBlockActions | middlewareEmailActions, entity: AIPEmailBuilderBlockExtendedOptions | IStructure | IPEmail): boolean {
    return true;
  }
}

class ProIPEmailBuilderMiddlewareService extends AIPEmailBuilderMiddlewareService {
}

class FreeIPEmailBuilderMiddlewareService extends AIPEmailBuilderMiddlewareService {
}
