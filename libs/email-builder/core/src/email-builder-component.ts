import { Directive, inject } from '@angular/core';
import { AbsComponent } from '@ngcomma/ngx-abstract';

import { AIPEmailBuilderService } from './services/email-builder-service/email-builder.service';
import { AIPEmailBuilderStorageService } from './services/email-builder-storage-service/email-builder-storage.service';
import { AIPEmailBuilderRestService } from './services/email-builder-rest-service/email-builder-rest.service';
import { AIPEmailBuilderMiddlewareService } from './services/email-builder-middleware-service/email-builder-middleware.service';
import { IP_EMAIL_BUILDER_BLOCKS_DATA } from './private-tokens';
import { IPEmailBuilderUiService } from './services/email-builder-ui.service';

@Directive()
export abstract class AIPEmailBuilderComponent extends AbsComponent {
  readonly emailBuilderService = inject(AIPEmailBuilderService);
  readonly emailBuilderStorageService = inject(AIPEmailBuilderStorageService);
  readonly emailBuilderMiddlewareService = inject(
    AIPEmailBuilderMiddlewareService
  );
  readonly emailBuilderRestService = inject(AIPEmailBuilderRestService);
  readonly builderUiService = inject(IPEmailBuilderUiService);

  readonly blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA); //.sort((a, b) => a.state.order - b.state.order);

  click(): void {
    this.builderUiService.attachSettingsPortal(null);
  }
}
