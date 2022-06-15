import { inject } from '@angular/core';

import { AIPEmailBuilderService } from './services/email-builder-service/email-builder.service';

export abstract class AIPEmailBuilderComponent {
  readonly emailBuilderService = inject(AIPEmailBuilderService);
}
