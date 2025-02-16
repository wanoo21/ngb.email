import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideNgxEmailBuilderConfig } from '@wlocalhost/ngx-email-builder';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(appRoutes),
    provideNgxEmailBuilderConfig({
      convertorPath: '/api/convert',
    }),
  ],
};
