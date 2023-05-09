import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BulmaEmailBuilderModule } from "@wlocalhost/bulma-email-builder";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BulmaEmailBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
