import { Component, NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import RemoteEntryComponent from "./entry.component";

// A simple component that will be bootstrapped when the remote entry module is loaded
@Component({
  selector: "wlocalhost-tailwind-demo-app",
  template: `
    <header class="bg-gray-900">
      <nav class="mx-auto flex max-w-7xl items-center justify-between py-2">
        <div class="flex flex-1">
          <a href="https://ngb.email" class="-m-1.5 p-1.5">
            <span class="sr-only">Tailwind Email Template Builder</span>
            <img ngSrc="//ngb.email/logo.png" alt="ngb email builder logo" width="60" height="60"
                 class="d-inline-block">
          </a>
        </div>
        <div class="flex gap-x-4 justify-end items-center">
          <a href="https://docs.ngb.email/templates/default-templates/tailwind-email-builder"
             class="text-sm font-semibold leading-6 text-white">How To Install</a>
          <a href="https://ngb.email" class="text-sm font-semibold leading-6 text-white">← Back To Product Details</a>
          <a href="https://store.wlocalhost.org/l/ngb-14"
             class="text-sm font-semibold leading-6 text-white rounded bg-red-500 px-4 py-2 hover:bg-red-600">
            Get Your License Now 🚀
          </a>
        </div>
      </nav>
    </header>
    <wlocalhost-tailwind-demo-app-entry></wlocalhost-tailwind-demo-app-entry>
  `,
  styles: [`
    :host {
      display: block;
      --ip-email-builder-host-height: calc(100vh - 76px);
    }
  `]
})
export class TailwindDemoAppComponent {
}

@NgModule({
  declarations: [TailwindDemoAppComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, RemoteEntryComponent, NgOptimizedImage],
  exports: [RemoteEntryComponent],
  bootstrap: [TailwindDemoAppComponent],
  providers: []
})
export class RemoteEntryModule {
}
