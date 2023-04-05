import { Component } from '@angular/core';
import { MaterialEmailBuilderModule } from "@wlocalhost/ngx-md-email-builder";

@Component({
  standalone: true,
  selector: 'wlocalhost-material-demo-app-entry',
  imports: [MaterialEmailBuilderModule],
  template: `
    <md-email-builder></md-email-builder>`,
})
export default class RemoteEntryComponent {}
