import { inject } from '@angular/core';

import { AIPEmailBuilderService } from './services/email-builder-service/email-builder.service';
import { AIPEmailBuilderStorageService } from './services/email-builder-storage-service/email-builder-storage.service';
import { AIPEmailBuilderRestService } from './services/email-builder-rest-service/email-builder-rest.service';
import { AIPEmailBuilderMiddlewareService } from './services/email-builder-middleware-service/email-builder-middleware.service';

export abstract class AIPEmailBuilderComponent {
  readonly emailBuilderService = inject(AIPEmailBuilderService);
  readonly emailBuilderStorageService = inject(AIPEmailBuilderStorageService);
  readonly emailBuilderMiddlewareService = inject(
    AIPEmailBuilderMiddlewareService
  );
  readonly emailBuilderRestService = inject(AIPEmailBuilderRestService);
}
