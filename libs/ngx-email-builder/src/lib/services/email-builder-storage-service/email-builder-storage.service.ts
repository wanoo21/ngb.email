import { inject, Injectable } from "@angular/core";
import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";

@Injectable({
  providedIn: "root",
  useFactory: (factory: IPEmailBuilderConfig) => {
    const [, useExisting] = factory.providers || [];
    if (useExisting) {
      return inject(useExisting);
    }
    return new ProEmailBuilderStorageService();
  },
  deps: [IP_EMAIL_BUILDER_CONFIG]
})
export abstract class AIPEmailBuilderStorageService {
}

class ProEmailBuilderStorageService extends AIPEmailBuilderStorageService {
}
