import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RemoteEntryModule } from "./remote-entry/entry.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RemoteEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
