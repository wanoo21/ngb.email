import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { IPEmail } from "../../body/body";

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

  convert(email: IPEmail): Observable<any> {
    return this.http.post(this.#convertorPath, email);
  }
}

class ProIPEmailBuilderRestService extends AIPEmailBuilderRestService {
}

class FreeIPEmailBuilderRestService extends AIPEmailBuilderRestService {
}
