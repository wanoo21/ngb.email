import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IIPEmail } from '../interfaces';
import { IP_EMAIL_BUILDER_CONFIG } from '../config/config';
import { IMjmlServerResponse } from './interfaces';

@Injectable({ providedIn: 'root' })
export class IPEmailRestService {
  readonly http = inject(HttpClient);
  readonly #config = inject(IP_EMAIL_BUILDER_CONFIG);

  convert(email: IIPEmail): Observable<IMjmlServerResponse> {
    return this.http.post<IMjmlServerResponse>(
      this.#config.convertorPath,
      email
    );
  }
}
