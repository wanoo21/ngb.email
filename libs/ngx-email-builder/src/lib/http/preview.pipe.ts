import { inject, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';

import { IPEmailRestService } from './rest.service';
import { IIPEmail } from '../interfaces';

/**
 * Dynamically creates and revokes an object URL link for previewing an email.
 * On initialization, it converts the provided IPEmail object to HTML and creates a Blob URL.
 * The pipe transforms the IPEmail object into a SafeUrl object for previewing.
 */
@Pipe({
  name: 'ipPreviewLink',
})
export class IpPreviewLinkPipe implements PipeTransform, OnDestroy {
  readonly domSanitizer = inject(DomSanitizer);
  readonly restService = inject(IPEmailRestService);
  #resourceUrl!: string;

  /**
   * Transforms the IPEmail object to a SafeUrl object for previewing.
   * @param value - The IPEmail object to be previewed.
   * @returns An Observable of SafeUrl object that can be used for previewing.
   * @example
   * ```html
   * <iframe [src]="email | ipPreviewLink" width="100%" height="600px"></iframe>
   * ```
   */
  transform(value: IIPEmail): Observable<SafeUrl> {
    return this.restService.convert(value).pipe(
      map(({ html, errors }) => {
        this.#resourceUrl = URL.createObjectURL(
          new Blob([html], { type: 'text/html' })
        );
        return this.domSanitizer.bypassSecurityTrustResourceUrl(
          this.#resourceUrl
        );
      })
    );
  }

  /**
   * Revokes the object URL link on component destruction to free memory.
   */
  ngOnDestroy() {
    URL.revokeObjectURL(this.#resourceUrl);
  }
}
