import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { IStructure } from "../../structure/structure";
import { AIPEmailBuilderBlockExtendedOptions } from "../../core/Block";
import { IUserTemplateCategory } from "../../interfaces";

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

  deleteStructure(structure: IStructure): Promise<boolean> {
    return this.confirm("Are you sure?");
  }

  deleteBlock(block: AIPEmailBuilderBlockExtendedOptions): Promise<boolean> {
    return this.confirm("Are you sure?");
  }

  alert(message: string): void {
    alert(message);
  }

  confirm(message: string): Promise<boolean> {
    const ask = confirm(message);
    return Promise.resolve(ask);
  }
}

class ProIPEmailBuilderMiddlewareService extends AIPEmailBuilderMiddlewareService {
}

class FreeIPEmailBuilderMiddlewareService extends AIPEmailBuilderMiddlewareService {
}
