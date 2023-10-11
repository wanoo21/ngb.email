/**
 * {@link NgxEmailBuilderModule} configurations.
 */
export interface IIPEmailBuilderConfig {
  /**
   * The API key for the convertor.
   */
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
   */
  historyRecordLimit: number;
}
