import { Directive } from "@angular/core";
import { CdkPortal } from "@angular/cdk/portal";

@Directive({
  selector: "[ipEmailBuilderSettings]",
  exportAs: "settings"
})
export class IPEmailBuilderSettingsDirective extends CdkPortal {
}
