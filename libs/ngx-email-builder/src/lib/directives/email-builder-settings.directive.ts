import { Directive } from "@angular/core";
import { CdkPortal } from "@angular/cdk/portal";

/**
 * An important directive to attach itself to the main settings portal.
 *
 * @exportAs ipSettings
 */
@Directive({
  selector: "[ipEmailBuilderSettings]",
  exportAs: "ipSettings"
})
export class IPEmailBuilderSettingsDirective extends CdkPortal {
}
