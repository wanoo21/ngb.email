import { OnDestroy, Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { map, Observable } from "rxjs";

import { IPEmail } from "../body/body";
import { AIPEmailBuilderRestService } from "../services";

/**
 * Dynamically create and revoke an {@link URL.createObjectURL} link.
 * On init, it converts current {@link IPEmail} to HTML and after return a {@link Blob} url.
 */
@Pipe({
  name: "ipPreviewLink"
})
export class IpPreviewLinkPipe implements PipeTransform, OnDestroy {
  #resourceUrl!: string;

  constructor(
    readonly domSanitizer: DomSanitizer,
    readonly restService: AIPEmailBuilderRestService
  ) {
  }

  transform(value: IPEmail): Observable<SafeUrl> {
    return this.restService.convert(value).pipe(
      map(({ html, errors }) => {
        this.#resourceUrl = URL.createObjectURL(new Blob([html], { type: "text/html" }));
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.#resourceUrl);
      })
    );
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.#resourceUrl);
  }
}
