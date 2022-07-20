import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { IIPEmail, IPEmail } from "../../body/body";
import { IMjmlServerResponse, IUserTemplateCategory } from "../../interfaces";

@Injectable({
  providedIn: "root",
  useFactory: (factory: IPEmailBuilderConfig) => {
    const [, , , useExisting] = factory.providers || [];
    if (factory.isFreeVersion) {
      if (useExisting) {
        console.warn("It seems you try to rewrite AIPEmailBuilderRestService, but this is not allowed in free version.");
      }
      return new FreeIPEmailBuilderRestService();
    } else if (!factory.isFreeVersion && useExisting) {
      return inject(useExisting);
    }
    return new ProIPEmailBuilderRestService();
  },
  deps: [IP_EMAIL_BUILDER_CONFIG]
})
export abstract class AIPEmailBuilderRestService {
  readonly http = inject(HttpClient);
  readonly #convertorPath = inject(IP_EMAIL_BUILDER_CONFIG).convertorPath;

  convert(email: IPEmail): Observable<IMjmlServerResponse> {
    return this.http.post<IMjmlServerResponse>(this.#convertorPath, email);
  }

  tmplCategories$(): Observable<IUserTemplateCategory[]>;
  tmplCategories$(category?: string, template?: string): Observable<IIPEmail>;
  tmplCategories$(category?: string, template?: string): Observable<IIPEmail | IUserTemplateCategory[]> {
    let params = {};
    if (category && template) {
      params = { category, template };
    }
    return this.http.get<IIPEmail | IUserTemplateCategory[]>(`${this.#convertorPath}/templates`, { params });
  }
}

class ProIPEmailBuilderRestService extends AIPEmailBuilderRestService {
}

class FreeIPEmailBuilderRestService extends AIPEmailBuilderRestService {
}
