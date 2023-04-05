import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { RemoteEntryModule } from "./remote-entry/entry.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RemoteEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
