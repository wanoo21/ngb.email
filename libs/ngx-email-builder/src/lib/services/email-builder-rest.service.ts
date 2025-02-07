import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IP_EMAIL_BUILDER_CONFIG } from '../private-tokens';
import { IIPEmail, IMjmlServerResponse, IUserTemplateCategory } from '../interfaces';

/**
 * The AIPEmailBuilderRestService is an abstract service that provides an API to interact with the email builder convertor.
 */
@Injectable({
  providedIn: 'root',
  useFactory: () => inject(DefaultIPEmailBuilderRestService),
})
export abstract class AIPEmailBuilderRestService {
  /**
   * Converts the given email to MJML.
   *
   * @param email The email to be converted.
   */
  abstract convert(email: IIPEmail): Observable<IMjmlServerResponse>;

  /**
   * Gets the categories of email templates.
   */
  abstract tmplCategories$(): Observable<IUserTemplateCategory[]>;

  /**
   * Gets the email template.
   */
  abstract tmplCategories$(): Observable<IUserTemplateCategory[]>;
  abstract tmplCategories$(
    category?: string,
    template?: string
  ): Observable<IIPEmail>;
}

/**
 * A concrete implementation of AIPEmailBuilderRestService for the Pro version.
 */
@Injectable({ providedIn: 'root' })
export class DefaultIPEmailBuilderRestService
  implements AIPEmailBuilderRestService
{
  /**
   * Injected an HTTP client.
   */
  readonly http = inject(HttpClient);

  /**
   * The path to the email convertor.
   */
  readonly #config = inject(IP_EMAIL_BUILDER_CONFIG);

  convert(email: IIPEmail): Observable<IMjmlServerResponse> {
    return this.http.post<IMjmlServerResponse>(
      this.#config.convertorPath,
      email
    );
  }

  tmplCategories$(): Observable<IUserTemplateCategory[]>;
  tmplCategories$(category?: string, template?: string): Observable<IIPEmail>;
  tmplCategories$(
    category?: string,
    template?: string
  ): Observable<IIPEmail | IUserTemplateCategory[]> {
    const root = this.#config.templatesPath;
    if (category && template) {
      return this.http.get<IIPEmail>(
        `${root}/${category}/${template}/index.json`
      );
    }
    return this.http.get<IIPEmail | IUserTemplateCategory[]>(
      `${root}/templates.json`
    );
  }
}
