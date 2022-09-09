import { inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { AIPEmailBuilderRestService } from "../email-builder-rest-service/email-builder-rest.service";
import { IMjmlServerResponse } from "../../interfaces";
import { IPEmail } from "../../body/body";

@Injectable({
  providedIn: "root",
  useFactory: (factory: IPEmailBuilderConfig) => {
    const [useExisting] = factory.providers || [];
    if (factory.isFreeVersion) {
      if (useExisting) {
        console.warn("It seems you try to rewrite AIPEmailBuilderService, but this is not allowed in free version.");
      }
      return new FreeIPEmailBuilderService();
    } else if (!factory.isFreeVersion && useExisting) {
      return inject(useExisting);
    }
    return new ProIPEmailBuilderService();
  },
  deps: [IP_EMAIL_BUILDER_CONFIG]
})
export abstract class AIPEmailBuilderService {
  readonly restService = inject(AIPEmailBuilderRestService);
  standardFonts = [
    "Palatino Linotype, Book Antiqua, Palatino, serif",
    "Times New Roman, Times, serif",
    "Arial, Helvetica, sans-serif",
    "Arial Black, Gadget, sans-serif",
    "Comic Sans MS, cursive, sans-serif",
    "Impact, Charcoal, sans-serif",
    "Lucida Sans Unicode, Lucida Grande, sans-serif",
    "Tahoma, Geneva, sans-serif",
    "Trebuchet MS, Helvetica, sans-serif",
    "Verdana, Geneva, sans-serif",
    "Courier New, Courier, monospace",
    "Lucida Console, Monaco, monospace"
  ];

  convert(value: IPEmail): Promise<IMjmlServerResponse> {
    return lastValueFrom(this.restService.convert(value));
  }
}

class ProIPEmailBuilderService extends AIPEmailBuilderService {
}

class FreeIPEmailBuilderService extends AIPEmailBuilderService {
}
