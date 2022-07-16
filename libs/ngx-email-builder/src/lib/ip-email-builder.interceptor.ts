import { Inject, Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "./private-tokens";

@Injectable()
export class IpEmailBuilderInterceptor implements HttpInterceptor {

  constructor(@Inject(IP_EMAIL_BUILDER_CONFIG) readonly factory: IPEmailBuilderConfig) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith("https://ngb-api.wlocalhost.org")) {
      // const notify = this.userInterface.notify('Loading, please wait ...', null, null);
      return next.handle(request.clone({
          setHeaders: {
            "Content-Type": "application/json",
            "X-Api-Key": this.factory.xApiKey
          },
          responseType: "json"
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
