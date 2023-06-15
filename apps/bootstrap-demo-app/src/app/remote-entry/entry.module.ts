import { Component, NgModule } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import RemoteEntryComponent from "./entry.component";

// A simple component that will be bootstrapped when the remote entry module is loaded
@Component({
  selector: "wlocalhost-bootstrap-demo-app",
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="https://ngb.email">
          <img ngSrc="//ngb.email/logo.png" alt="ngb email builder logo" width="60" height="60" class="d-inline-block">
          Bootstrap Email Template Builder
        </a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://docs.ngb.email/templates/default-templates/bootstrap-email-builder">
                How To Install
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://ngb.email">← Back To Product Details</a>
            </li>
          </ul>
          <a href="https://store.wlocalhost.org/l/ngb-14" class="btn btn-danger ms-2">
            Get Your License Now 🚀
          </a>
        </div>
      </div>
    </nav>
    <wlocalhost-bootstrap-demo-app-entry></wlocalhost-bootstrap-demo-app-entry>
  `,
  styles: [`
    :host {
      display: block;
      --ip-email-builder-host-height: calc(100vh - 86px);
    }
  `]
})
export class BootstrapDemoAppComponent {
}

@NgModule({
  declarations: [BootstrapDemoAppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RemoteEntryComponent, NgOptimizedImage],
  exports: [RemoteEntryComponent],
  bootstrap: [BootstrapDemoAppComponent],
  providers: []
})
export class RemoteEntryModule {
}
