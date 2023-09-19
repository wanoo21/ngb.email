import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

import { withConfig } from '@wlocalhost/ngx-email-builder';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
