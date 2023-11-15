import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG } from "../../private-tokens";
import { IIPEmail, IPEmail } from "../../body/body";
import { IMjmlServerResponse, IUserTemplateCategory } from "../../interfaces";
import { AIPEmailBuilderHistoryService } from "../email-builder-history-service/email-builder-history.service";

/**
 * The AIPEmailBuilderRestService is an abstract service that provides an API to interact with the email builder convertor.
 */
@Injectable({
  providedIn: "root",
  useFactory: () => inject(DefaultIPEmailBuilderRestService)
})
export abstract class AIPEmailBuilderRestService {
  /**
   * Converts the given email to MJML.
   *
   * @param email The email to be converted.
   */
  abstract convert(email: IPEmail): Observable<IMjmlServerResponse>;

  /**
   * Gets the categories of email templates.
   */
  abstract tmplCategories$(): Observable<IUserTemplateCategory[]>;

  /**
   * Gets the email template.
   */
  abstract tmplCategories$(): Observable<IUserTemplateCategory[]>;
  abstract tmplCategories$(category?: string, template?: string): Observable<IIPEmail>;
}

/**
 * A concrete implementation of AIPEmailBuilderRestService for the Pro version.
 */
@Injectable({ providedIn: "root" })
export class DefaultIPEmailBuilderRestService implements AIPEmailBuilderRestService {
  /**
   * Injected an HTTP client.
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

  convert(email: IPEmail): Observable<IMjmlServerResponse> {
    return this.http.post<IMjmlServerResponse>(this.#convertorPath, email).pipe(
      tap(() => {
        // Clear all history records after successfully converted
        this.historyService.clear();
      })
    );
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
