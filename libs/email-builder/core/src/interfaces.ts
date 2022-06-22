/*
 * Copyright (c) 2020 wlocalhost.org.
 * All rights reserved.
 */

// import { AIPEmailBuilderBlock } from "./core/Block";

/**
 * Main builder configuration Interface. See also {@link IpEmailBuilderModule#withConfig}.
 */
export interface IForRootConf {
  /**
   *  Either an [Extended or Commercial License]{@link https://wlocalhost.org/#} key if any, otherwise leave it empty.
   *  @default t7HdQfZjGp6R96fOV4P8v18ggf6LLTQZ1puUI2tz
   */
  xApiKey?: string;

  /**
   * @deprecated Rewrite IpUserRestApiService in providers instead
   * @ignore
   */
  uploadImagePath?: string;
  /**
   * @deprecated Rewrite IpUserRestApiService in providers instead
   * @ignore
   */
  uploadImageName?: string;
  /**
   * @deprecated Rewrite IpUserRestApiService in providers instead
   * @ignore
   */
  csrf?: { name: string; token: string };
  /**
   * @deprecated Rewrite IpUserRestApiService in providers instead
   * @ignore
   */
  apiPath?: string;

  /**
   * Show download button on builder top bar.
   * @default true
   */
  useDownloadButton?: boolean;
  /**
   * Show preview button  on builder top bar.
   * @default true
   */
  usePreviewButton?: boolean;
  /**
   * Show save button on builder top bar.
   * @default true
   */
  useSaveButton?: boolean;
  /**
   * Show a button that opens template gallery in case email body is empty.
   * @default true
   */
  templateListIfEmpty?: boolean;
}

/**
 * Convertor errors response interface, id any.
 */
export interface IMjmlServerResponseErrors {
  /**
   * Error message.
   */
  message: string;
  /**
   * MJML TagName error occurred.
   */
  tagName: string;
}

/**
 * Convertor response interface.
 */
export interface IMjmlServerResponse {
  /**
   * Converted HTML Template based on {@link IIPEmail}.
   */
  html: string;
  /**
   * Converted MJML Template based on {@link IIPEmail}.
   */
  mjml: string;
  /**
   * Error representation if any. See {@link IMjmlServerResponseErrors}.
   */
  errors: IMjmlServerResponseErrors[];
}

/**
 * Builder structure types.
 * @default cols_1
 */
export type TStructureTypes =
  | 'cols_1'
  | 'cols_2'
  | 'cols_3'
  | 'cols_4'
  | 'cols_12'
  | 'cols_21';
/**
 * Builder direction types.
 * @default ltr
 */
export type TDirection = 'ltr' | 'rtl';
/**
 * Builder units types.
 * @default px
 */
export type TUnits = '%' | 'px' | 'cover' | 'contain';
/**
 * Builder align types.
 * @default left
 */
export type TAlign = 'left' | 'center' | 'right';
/**
 * Builder vertical align types.
 * @default middle
 */
export type TVerticalAlign = 'top' | 'middle' | 'bottom';
/**
 * Builder Line-height types.
 * @default none
 */
export type TLineHeight = '%' | 'px' | 'none';
/**
 * Builder Link target.
 * @default _blank
 */
export type TLinkTarget = '_blank' | '_self' | '_parent' | '_top';
/**
 * Builder font style types.
 * @default normal
 */
export type TFontStyle = 'italic' | 'normal' | 'oblique';
/**
 * Builder font weight types.
 * @default inherit
 */
export type TFontWeight =
  | number
  | 'bold'
  | 'bolder'
  | 'inherit'
  | 'initial'
  | 'light'
  | 'normal';
/**
 * Builder background-repeat types.
 * @default no-repeat
 */
export type TBackgroundRepeat =
  | 'no-repeat'
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y';

/**
 * Builder border styles interface.
 */
export interface IBorder {
  /* Border color */
  color?: string;
  /**
   * Border style.
   * @default solid
   */
  style?: 'solid' | 'dotted' | 'dashed' | 'double' | 'groove';
  /**
   * Border width
   */
  width?: number;
  /**
   * Border radius
   */
  radius?: number;
}

/**
 * Builder padding styles interface.
 */
export interface IPadding {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

/**
 * Builder margin styles interface.
 */
export interface IMargin {
  top?: number;
  bottom?: number;
}

/**
 * Builder Width and Height styles interface.
 */
export interface IWidthHeight {
  value: number;
  /**
   * Width and Height unit type.
   * @default px
   */
  unit: TUnits;
  // Either full width or full height styles.
  auto?: boolean;
  // Units to be shown as options.
  units?: TUnits[];
}

/**
 * Builder background styles interface.
 */
export interface IBackground {
  color?: string;
  url?: string;
  repeat?: TBackgroundRepeat;
  size?: IWidthHeight;
}

/**
 * Builder font styles interface.
 */
export interface IFont {
  family?: string;
  fallback?: string;
  size?: number;
  style?: TFontStyle;
  weight?: TFontWeight;
}

export type IFontFamily = Set<string>;

/**
 * Builder line-height styles interface.
 */
export interface ILineHeight {
  value?: number;
  unit?: TLineHeight;
}

/**
 * Builder link styles interface.
 */
export interface ILink {
  href: string;
  target: TLinkTarget;
}

/**
 * Builder structure columns' styles interface.
 */
export interface IStructureColumnOptions {
  background?: IBackground;
  border?: IBorder;
  verticalAlign?: TVerticalAlign;
}

/**
 * Builder structure styles interface.
 */
export interface IStructureOptions {
  border?: IBorder;
  background?: IBackground;
  padding?: IPadding;
  margin?: IMargin;
  /**
   * Disable responsive for entire structure
   */
  disableResponsive?: boolean;
  /**
   * Mame section full width
   */
  fullWidth?: boolean;
  /**
   * Mind the GAPS! Gaps between structure's columns.
   */
  gaps?: [number, number];
  columnsWidth?: number[];
  columns?: IStructureColumnOptions[];
}

/**
 * Builder structure interface.
 */
export interface IStructure {
  readonly type: TStructureTypes;
  // unique IDs for unique class attribute
  readonly id: number;
  /**
   * If it's module, it can't be edited within email body.
   * @default false
   */
  isModule?: boolean;
  options: IStructureOptions;
  // Structure columns.
  // elements: Type<AIPEmailBuilderBlock<any>>[][];
  readonly columns: number;
}

/**
 * Builder block state interface. If `disabled: true` it can't be dragged from left sidebar.
 */
export interface IBlockState {
  /**
   * @default false
   */
  disabled: boolean;
  /**
   * Show a message in case it's disabled.
   */
  message: string;
}

/**
 * Builder {@link ImageComponent} options interface.
 */
export interface IImageBLockOptions {
  border?: IBorder;
  width?: IWidthHeight;
  height?: IWidthHeight;
  link?: ILink;
  align?: TAlign;
  title?: string;
  padding?: IPadding;
}

/**
 * Builder {@link ButtonComponent} options interface.
 */
export interface IButtonBlockOptions {
  backgroundColor?: string;
  border?: IBorder;
  color?: string;
  font?: IFont;
  align?: TAlign;
  fullWidth?: boolean;
  lineHeight?: ILineHeight;
  link?: ILink;
  innerPadding?: IPadding;
  padding?: IPadding;
}

/**
 * Builder {@link DividerComponent} options interface.
 */
export interface IDividerBlockOptions {
  border?: IBorder;
  padding?: IPadding;
}

/**
 * Builder {@link SpacerComponent} options interface.
 */
export interface ISpacerBlockOptions {
  height?: IWidthHeight;
  width?: IWidthHeight;
}

/**
 * Builder {@link SocialComponent} options interface.
 */
export interface ISocialBlockOptions {
  align?: TAlign;
  mode?: 'vertical' | 'horizontal';
  font?: IFont;
  iconSize?: ILineHeight;
  lineHeight?: ILineHeight;
  color?: string;
  innerPadding?: IPadding;
  padding?: IPadding;
}

/**
 * Builder {@link SocialComponent} network options interface.
 */
export interface ISocialNetwork {
  href: string;
  // target?: string;
  label?: string;
  name:
    | 'github'
    | 'instagram'
    | 'web'
    | 'snapchat'
    | 'youtube'
    | 'vimeo'
    | 'medium'
    | 'soundcloud'
    | 'dribbble'
    | 'facebook'
    | 'twitter'
    | 'pinterest'
    | 'linkedin'
    | 'tumblr'
    | 'xing';
  padding?: IPadding;
}

/**
 * Builder {@link IIPEmail} general options interface.
 */
export interface IGeneralOptions {
  width?: IWidthHeight;
  background?: IBackground;
  padding?: IPadding;
  direction?: TDirection;
  name?: string;
  previewText: string;
  global?: {
    fonts?: string[];
    padding?: IPadding;
  };
}

/**
 * Main builder Email Object interface.
 */
export interface IIPEmail {
  general?: IGeneralOptions;
  structures?: IStructure[];
}

/**
 * Builder module interface.
 */
export interface IUserModule {
  /**
   * @deprecated Add name instead
   * @ignore
   */
  thumb?: string;
  name?: string;
  module: IStructure;
}

/**
 * Builder predefined template interface.
 */
export interface IUserTemplate {
  id?: string;
  title: string;
  thumbPath: string;
  templateData: IIPEmail;
}

/**
 * Builder Template Gallery templates interface.
 */
export interface IUserTemplateCategory {
  category: string;
  templates: IUserTemplate[];
}

/**
 * Builder IMage Gallery images interface.
 */
export interface IUserImageCategory {
  category: string;
  images: string[];
}

/**
 * Template Storage/Cache keys.
 */
export enum ETemplatesStorage {
  LATEST_USED = 'NGB_LATEST_USED_TEMPLATES',
  STORAGE = 'NGB_TEMP_TEMPLATES_STORAGE',
}
