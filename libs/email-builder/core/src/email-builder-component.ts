import { Directive, inject, Input } from "@angular/core";
import { AbsComponent } from "@ngcomma/ngx-abstract";

import { AIPEmailBuilderService } from "./services/email-builder-service/email-builder.service";
import { AIPEmailBuilderStorageService } from "./services/email-builder-storage-service/email-builder-storage.service";
import { AIPEmailBuilderRestService } from "./services/email-builder-rest-service/email-builder-rest.service";
import {
  AIPEmailBuilderMiddlewareService
} from "./services/email-builder-middleware-service/email-builder-middleware.service";
import { IPEmail } from "./body/body";
import { Structure } from "./structure/structure";
import { TextBlockComponent } from "./blocks/text-block/text-block.component";

@Directive()
export abstract class AIPEmailBuilderComponent extends AbsComponent {
  @Input() email = new IPEmail([
      new Structure("cols_6", [
        [new TextBlockComponent()]
      ]),
      new Structure("cols_6", [
        [new TextBlockComponent()]
      ])
    ],
    {
      direction: this.direction.value
    });
  readonly emailBuilderService = inject(AIPEmailBuilderService);
  readonly emailBuilderStorageService = inject(AIPEmailBuilderStorageService);
  readonly emailBuilderMiddlewareService = inject(
    AIPEmailBuilderMiddlewareService
  );
  readonly emailBuilderRestService = inject(AIPEmailBuilderRestService);
}
