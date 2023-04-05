import { Component } from "@angular/core";
import { BootstrapEmailBuilderModule } from "@wlocalhost/ngx-bootstrap-email-builder";

@Component({
  standalone: true,
  selector: "wlocalhost-bootstrap-demo-app-entry",
  imports: [BootstrapEmailBuilderModule],
  template: `
    <bt-email-builder></bt-email-builder>
  `
})
export default class RemoteEntryComponent {
}
