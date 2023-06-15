import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { withConfig } from '@wlocalhost/ngx-email-builder';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    // ...withConfig({
    //   licenseKey: 'F15451BC-52F242C3-8686CAC7-63FCE883',
    // }),
  ],
}).catch((err) => console.error(err));
