import { Component } from '@angular/core';

@Component({
  selector: 'wlocalhost-root',
  template: `
    <mat-toolbar color="primary">
      <a class="no-underline text-white-alpha-90" href="https://ngb.email">
        <img ngSrc="//ngb.email/images/07e4537b7af79f452bd8156d40a9082b.png" alt="ngb email builder logo" width="60"
             height="60">
      </a>
      <span class="ml-auto"></span>
      <a mat-button href="https://docs.ngb.email/templates/default-templates/material-email-builder">
        How To Install
      </a>
      <a mat-button href="https://ngb.email">← Back To Product Details</a>
      <a href="https://store.wlocalhost.org/l/ngb-14" mat-flat-button color="warn">
        Get Your License Now 🚀
      </a>
    </mat-toolbar>
    <wlocalhost-material-demo-app-entry></wlocalhost-material-demo-app-entry>
  `,
  styles: [`
      :host {
          display: block;
          --ip-email-builder-host-height: calc(100vh - 64px);
      }
      a {
        text-decoration: none;
      }
      .ml-auto {
        margin-left: auto;
      }
      mat-toolbar {
        gap: 0.6rem;
      }
  `
  ]
})
export class AppComponent {}
