/*
 * Copyright (c) 2020 wlocalhost.org.
 * All rights reserved.
 */

import { IStructure } from "./structure/structure";

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
  | "cols_1"
  | "cols_2"
  | "cols_3"
  | "cols_4"
  | "cols_5"
  | "cols_6"
  | "cols_12"
  | "cols_21";
/**
 * Builder direction types.
 * @default ltr
 */
export type TDirection = "ltr" | "rtl";
/**
 * Builder units types.
 * @default px
 */
export type TUnits = "%" | "px" | "cover" | "contain";
/**
 * Builder align types.
 * @default left
 */
export type TAlign = "left" | "center" | "right";
/**
 * Builder vertical align types.
 * @default middle
 */
export type TVerticalAlign = "top" | "middle" | "bottom";
/**
 * Builder Line-height types.
 * @default none
 */
export type TLineHeight = "%" | "px" | "none";
/**
 * Builder Link target.
 * @default _blank
 */
export type TLinkTarget = "_blank" | "_self" | "_parent" | "_top";
/**
 * Builder font style types.
 * @default normal
 */
export type TFontStyle = "italic" | "normal" | "oblique";
/**
 * Builder font weight types.
 * @default inherit
 */
export type TFontWeight = number;

export interface ISizes {
  top: number;
  right: number;
  left: number;
  bottom: number;
}
/**
 * Builder background-repeat types.
 * @default no-repeat
 */
export type TBackgroundRepeat =
  | "no-repeat"
  | "repeat"
  | "repeat-x"
  | "repeat-y";


/**
 * Builder border styles interface.
 */
export interface IBorder {
  /* Border color */
  color: string;
  /**
   * Border style.
   * @default solid
   */
  style: "solid" | "dotted" | "dashed" | "double" | "groove";

  sizes?: ISizes;
  /**
   * Border width
   */
  width: number;
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
  auto: boolean;
  // Units to be shown as options.
  units: TUnits[];
}

/**
 * Builder background styles interface.
 */
export interface IBackground {
  color: string;
  url: string;
  repeat: TBackgroundRepeat;
  size: IWidthHeight;
}

/**
 * Builder font styles interface.
 */
export interface IFont {
  family: string;
  fallback: string;
  size: number;
  style: TFontStyle;
  weight: TFontWeight;
}

// export type IFontFamily = Set<string>;

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
  /**
   * Change block order
   */
  // order: number;
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
 * Builder Template Gallery templates interface.
 */
export interface IUserTemplateCategory {
  category: string;
  templates: string[];
}


export type TIPEmailBuilderStyles = Record<string, any>;
