import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { IStructure } from "../../structure/structure";

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
  blocksList(blocks: IIPEmailBuilderBlockData[]): Observable<IIPEmailBuilderBlockData[]> {
    return of(blocks);
  }

  structuresList(structures: IStructure[]): Observable<IStructure[]> {
    return of(structures);
  }
}

class ProIPEmailBuilderMiddlewareService extends AIPEmailBuilderMiddlewareService {
}

class FreeIPEmailBuilderMiddlewareService extends AIPEmailBuilderMiddlewareService {
}
