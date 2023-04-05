import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import RemoteEntryComponent from "./entry.component";

// A simple component that will be bootstrapped when the remote entry module is loaded
@Component({
  selector: "wlocalhost-bootstrap-demo-app",
  template: `
    <wlocalhost-bootstrap-demo-app-entry></wlocalhost-bootstrap-demo-app-entry>
  `
})
export class BootstrapDemoAppComponent {
}

@NgModule({
  declarations: [BootstrapDemoAppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule, RemoteEntryComponent],
  bootstrap: [BootstrapDemoAppComponent],
  providers: []
})
export class RemoteEntryModule {
}
