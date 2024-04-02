import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    importProvidersFrom(TailwindEmailBuilderModule.forRoot())
  ]
};
