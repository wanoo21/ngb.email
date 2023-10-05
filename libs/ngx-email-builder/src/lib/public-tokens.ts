import { Type } from "@angular/core";
import {
  AIPEmailBuilderHistoryService,
  AIPEmailBuilderMiddlewareService,
  AIPEmailBuilderRestService,
  AIPEmailBuilderService,
  AIPEmailBuilderStorageService
} from "./services";

/**
 * {@link NgxEmailBuilderModule} configurations.
 */
export interface IIPEmailBuilderConfig {
  // Wlocalhost convertor path api key, in case you don't run convertor on your side.
  xApiKey: string;
  /**
   * Use custom social icons' path, only for paid versions.
   *
   * @default https://www.mailjet.com/images/theme/v1/icons/ico-social
   */
  socialIconsPath: string;
  /**
   * Custom convertor path, only for paid versions.
   *
   * @default https://ngb-api.wlocalhost.org
   */
  convertorPath: string;
  /**
   * Use different templates thumbs path, only for paid versions.
   *
   * @default https://ngb-templates.s3.amazonaws.com
   */
  templatesThumbsPath: string;
  /**
   * Change how many records history manager can save, only for paid versions.
   *
   * @default Free:5, Paid:20
   */
  historyRecordLimit: number;
  // Rewrite default Email Builder services, only for paid versions.
  providers?: [
      Type<AIPEmailBuilderService> | null,
      Type<AIPEmailBuilderStorageService> | null,
      Type<AIPEmailBuilderMiddlewareService> | null,
      Type<AIPEmailBuilderRestService> | null,
      Type<AIPEmailBuilderHistoryService> | null,
  ] | [];
}
