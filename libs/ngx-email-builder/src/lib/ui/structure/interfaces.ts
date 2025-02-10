import { TIPEmailBuilderBlock } from '../../config/blocks';
import { IBackground, IBorder, IMargin, IPadding, TVerticalAlign } from '../settings/interfaces';

/**
 * Builder structure types.
 * @default cols_1
 */
export type TStructureTypes =
  | 'cols_1'
  | 'cols_2'
  | 'cols_3'
  | 'cols_4'
  | 'cols_5'
  | 'cols_6'
  | 'cols_12'
  | 'cols_21';

/**
 * Builder structure columns' styles interface.
 */
export interface IStructureColumnOptions {
  background: Pick<IBackground, 'color'>;
  border: IBorder;
  verticalAlign: TVerticalAlign;
}

/**
 * Builder structure styles interface.
 */
export interface IStructureOptions {
  border: IBorder;
  background: IBackground;
  padding: IPadding;
  margin: IMargin;
  /**
   * Disable responsive for entire structure
   */
  disableResponsive: boolean;
  /**
   * Mame structure full width
   */
  fullWidth: boolean;
  /**
   * Mind the GAPS! Gaps between structure's columns.
   */
  gaps: [number, number];
  columnsWidth: number[];
  columns: IStructureColumnOptions[];
}

/**
 * Builder structure interface.
 */
export interface IStructure {
  readonly type: TStructureTypes;
  // unique IDs for unique class attribute
  readonly id: string;
  options: IStructureOptions;
  // Structure columns.
  elements: TIPEmailBuilderBlock[][];
  // readonly columns: number;
}
