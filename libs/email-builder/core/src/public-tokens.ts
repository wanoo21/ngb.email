import { Type } from '@angular/core';
import { AIPEmailBuilderService } from './services/email-builder-service/email-builder.service';
import { AIPEmailBuilderStorageService } from './services/email-builder-storage-service/email-builder-storage.service';
import { AIPEmailBuilderMiddlewareService } from './services/email-builder-middleware-service/email-builder-middleware.service';
import { AIPEmailBuilderRestService } from './services/email-builder-rest-service/email-builder-rest.service';

export interface IIPEmailBuilderConfig {
  xApiKey?: string;
  socialIconsPath?: string;
  providers?: [
    Type<AIPEmailBuilderService> | null,
    Type<AIPEmailBuilderStorageService> | null,
    Type<AIPEmailBuilderMiddlewareService> | null,
    Type<AIPEmailBuilderRestService> | null
  ];
}
