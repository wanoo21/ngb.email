import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideNgxEmailBuilderConfig } from "@wlocalhost/ngx-email-builder";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideRouter(appRoutes),
    provideNgxEmailBuilderConfig({
      convertorPath: "/api",
    })
  ]
};
