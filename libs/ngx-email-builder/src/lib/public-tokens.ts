/**
 * {@link NgxEmailBuilderModule} configurations.
 */
export interface IIPEmailBuilderConfig {
  /**
   * Use custom social icons' path
   *
   * @default https://www.mailjet.com/images/theme/v1/icons/ico-social
   */
  socialIconsPath: string;
  /**
   * Custom convertor path
   *
   * @default https://ngb-api.wlocalhost.org
   */
  convertorPath: string;

  /**
   * Path to get all templates
   */
  templatesPath: string;

  /**
   * Use different templates thumbs path
   *
   * @default https://ngb-templates.s3.amazonaws.com
   */
  templatesThumbsPath: string;
  /**
   * Change how many records history manager can save, only for paid versions.
   */
  historyRecordLimit: number;
}
