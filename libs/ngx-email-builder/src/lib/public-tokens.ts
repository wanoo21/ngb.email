import { Type } from "@angular/core";
import {
  AIPEmailBuilderHistoryService,
  AIPEmailBuilderMiddlewareService,
  AIPEmailBuilderRestService,
  AIPEmailBuilderService,
  AIPEmailBuilderStorageService
} from "./services";

export interface IIPEmailBuilderConfig {
  xApiKey?: string;
  licenseKey?: string;
  socialIconsPath?: string;
  convertorPath?: string;
  templatesThumbsPath?: string;
  providers?: [
      Type<AIPEmailBuilderService> | null,
      Type<AIPEmailBuilderStorageService> | null,
      Type<AIPEmailBuilderMiddlewareService> | null,
      Type<AIPEmailBuilderRestService> | null,
      Type<AIPEmailBuilderHistoryService> | null,
  ];
}
