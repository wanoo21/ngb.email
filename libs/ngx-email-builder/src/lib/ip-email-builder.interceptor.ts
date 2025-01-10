import { Injectable, inject } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "./private-tokens";

@Injectable()
export class IpEmailBuilderInterceptor implements HttpInterceptor {
  readonly factory = inject<IPEmailBuilderConfig>(IP_EMAIL_BUILDER_CONFIG);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { xApiKey, isFreeApiKey } = this.factory;
    if (request.url.startsWith("https://ngb-api.wlocalhost.org")) {
      // const notify = this.userInterface.notify('Loading, please wait ...', null, null);
      return next.handle(request.clone({
          setParams: {
            l: isFreeApiKey ? "reg" : "pro",
            v: "2"
          },
          setHeaders: {
            "Content-Type": "application/json",
            "X-Api-Key": xApiKey
          },
          responseType: "json"
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
