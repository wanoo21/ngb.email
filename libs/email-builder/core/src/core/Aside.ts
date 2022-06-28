import { Directive, inject, OnInit, ViewChild } from '@angular/core';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { AbsComponent } from '@ngcomma/ngx-abstract';

import { IPEmailBuilderUiService } from '../services/email-builder-ui.service';
import { IP_EMAIL_BUILDER_BLOCKS_DATA } from '../private-tokens';

@Directive()
export abstract class AIPEmailBuilderAside
  extends AbsComponent
  implements OnInit
{
  @ViewChild(CdkPortalOutlet, { static: true })
  readonly asideSettingsPortal!: CdkPortalOutlet;

  readonly builderUiService = inject(IPEmailBuilderUiService);
  readonly blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA); //.sort((a, b) => a.state.order - b.state.order);

  ngOnInit() {
    this.builderUiService.setSettingsPortalOutlet(this.asideSettingsPortal);
  }
}
