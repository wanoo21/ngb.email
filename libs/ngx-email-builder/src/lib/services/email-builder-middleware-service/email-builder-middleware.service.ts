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
  readonly templatesThumbsPath = inject(IP_EMAIL_BUILDER_CONFIG).templatesThumbsPath;

  blocksList(blocks: IIPEmailBuilderBlockData[]): Observable<IIPEmailBuilderBlockData[]> {
    return of(blocks);
  }

  structuresList(structures: IStructure[]): Observable<IStructure[]> {
    return of(structures);
  }

  categoryList(categories: IUserTemplateCategory[]): Observable<IUserTemplateCategory[]> {
    return of(categories);
  }

  categoryTemplates(category: IUserTemplateCategory): Observable<IUserTemplateCategory["templates"]> {
    return of(category.templates);
  }

  templateThumbnail(category: IUserTemplateCategory, template: string): string {
    return `${this.templatesThumbsPath}/${category}-${template}.jpg`;
  }

  delete(entity: IStructure | AIPEmailBuilderBlockExtendedOptions): Promise<boolean> {
    return this.confirm("Are you sure?");
  }

  alert(message: string): void {
    alert(message);
  }

  confirm(message: string): Promise<boolean> {
    const ask = confirm(message);
    return Promise.resolve(ask);
  }

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
