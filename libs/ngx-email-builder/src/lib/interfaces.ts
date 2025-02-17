/*
 * Copyright (c) 2020 wlocalhost.org.
 * All rights reserved.
 */

import type { IStructure } from './ui/structure/interfaces';
import type { IBackground, IPadding, IWidthHeight, TDirection } from './ui/settings/interfaces';

/**
 * Builder general options interface.
 */
export interface IGeneralOptions {
  width: IWidthHeight & { auto?: boolean };
  background: Pick<IBackground, 'color'>;
  padding: IPadding;
  direction: TDirection;
  name: string;
  previewText: string;
}

/**
 * Main builder Email Object interface.
 */
export interface IIPEmail {
  general: IGeneralOptions;
  structures: IStructure[];
}

/**
 * Builder Template Gallery templates interface.
 */
export interface IUserTemplateCategory {
  category: string;
  templates: string[];
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type TIPEmailBuilderStyles = Record<string, string | number>;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
