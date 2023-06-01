import { Component } from "@angular/core";

@Component({
  selector: "wlocalhost-root",
  template: `
    <nav class="flex flex-row px-4 py-2 align-items-center bg-black-alpha-90">
      <a class="no-underline text-white-alpha-90" href="https://ngb.email">
        <img ngSrc="//ngb.email/logo.png" alt="ngb email builder logo" width="60" height="60">
      </a>
      <div class="ml-auto flex flex-row gap-2 align-items-center">
        <ul class="flex flex-row gap-2 list-none">
          <li class="nav-item">
            <a class="no-underline text-white-alpha-90"
               href="https://docs.ngb.email/templates/default-templates/primeng-email-builder">
              How To Install
            </a>
          </li>
          <li class="nav-item">
            <a class="no-underline text-white-alpha-90" href="https://ngb.email">← Back To Product Details</a>
          </li>
        </ul>
        <a href="https://store.wlocalhost.org/l/ngb-14"
           class="no-underline text-white-alpha-90 ml-2 px-3 py-2 bg-red-500 border-round hover:bg-red-600">
          Get Your License Now 🚀
        </a>
      </div>
    </nav>
    <wlocalhost-primeng-demo-app-entry></wlocalhost-primeng-demo-app-entry>
  `,
  styles: [`
      :host {
          display: block;
          --ip-email-builder-host-height: calc(100vh - 80px);
      }`
  ]
})
export class AppComponent {
}
