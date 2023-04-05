import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import RemoteEntryComponent from "./entry.component";

// A simple component that will be bootstrapped when the remote entry module is loaded
@Component({
  selector: "wlocalhost-tailwind-demo-app",
  template: `
    <wlocalhost-tailwind-demo-app-entry></wlocalhost-tailwind-demo-app-entry>
  `
})
export class TailwindDemoAppComponent {
}

@NgModule({
  declarations: [TailwindDemoAppComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, RemoteEntryComponent],
  bootstrap: [TailwindDemoAppComponent],
  providers: []
})
export class RemoteEntryModule {
}
