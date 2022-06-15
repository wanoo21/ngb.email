import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IPEmailBuilderModule } from '@wlocalhost/ngx-email-builder';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    IPEmailBuilderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
