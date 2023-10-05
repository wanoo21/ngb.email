import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { IIPEmail, IPEmail } from "../../body/body";
import { IMjmlServerResponse, IUserTemplateCategory } from "../../interfaces";
import { AIPEmailBuilderHistoryService } from "../email-builder-history-service/email-builder-history.service";

/**
 * The AIPEmailBuilderRestService is an abstract service that provides an API to interact with the email builder convertor.
 */
@Injectable({
  providedIn: "root",
  useFactory: (factory: IPEmailBuilderConfig) => {
    const [, , , useExisting] = factory.providers || [];
    if (useExisting) {
      return inject(useExisting);
    }
    return new ProIPEmailBuilderRestService();
  },
  deps: [IP_EMAIL_BUILDER_CONFIG]
})
export abstract class AIPEmailBuilderRestService {
  /**
   * Injected HTTP client.
   */
  readonly http = inject(HttpClient);

  /**
   * Injected AIPEmailBuilderHistoryService.
   */
  readonly historyService = inject(AIPEmailBuilderHistoryService);

  /**
   * The path to the email convertor.
   */
  readonly #convertorPath = inject(IP_EMAIL_BUILDER_CONFIG).convertorPath;

  /**
   * Converts the given email to MJML.
   *
   * @param email The email to be converted.
   * @returns An observable that resolves to the server's response.
   */
  convert(email: IPEmail): Observable<IMjmlServerResponse> {
    return this.http.post<IMjmlServerResponse>(this.#convertorPath, email).pipe(
      tap(() => {
        // Clear all history records after successfully converted
        this.historyService.clear();
      })
    );
  }

  /**
   * Gets the categories of email templates.
   *
   * @returns An observable that resolves to the list of categories.
   */
  tmplCategories$(): Observable<IUserTemplateCategory[]>;

  /**
   * Gets the email template.
   *
   * @param category The category of the template.
   * @param template The name of the template.
   * @returns An observable that resolves to the email template.
   */
  tmplCategories$(category?: string, template?: string): Observable<IIPEmail>;

  tmplCategories$(category?: string, template?: string): Observable<IIPEmail | IUserTemplateCategory[]> {
    let params = {};
    if (category && template) {
      params = { category, template };
    }
    return this.http.get<IIPEmail | IUserTemplateCategory[]>(`${this.#convertorPath}/templates`, { params });
  }
}

/**
 * A concrete implementation of AIPEmailBuilderRestService for the Pro version.
 */
class ProIPEmailBuilderRestService extends AIPEmailBuilderRestService {
}
