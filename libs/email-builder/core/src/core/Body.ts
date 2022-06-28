import { Directive, Input, OnInit } from '@angular/core';

import { Configurable } from './Configurable';
import { IIPEmail } from '../body/body';

@Directive()
export abstract class AIPEmailBody
  extends Configurable<IIPEmail['general']>
  implements OnInit
{
  @Input() options: IIPEmail['general'];
  @Input() structures: IIPEmail['structures'];

  text = '';

  ngOnInit() {
    // Always show general settings if nothing is editing
    this.builderUiService.setDefaultSettingsPortal(this.settingsPortal);
  }

  override markForCheck(): boolean {
    return this.builderUiService.portalOutletHasAttached();
  }
}
