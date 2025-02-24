import { Directive } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';

/**
 * This directive is used to attach itself to the main settings portal.
 * It provides an easy way to target the main settings portal for email builder.
 *
 * @exportAs ipSettings
 */
@Directive({
  selector: '[ipEmailBuilderSettings]',
})
export class IPEmailBuilderSettingsDirective extends CdkPortal {}
