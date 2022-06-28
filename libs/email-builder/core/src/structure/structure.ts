import { defaultsDeep } from '@ngcomma/ngx-abstract/utils';

import {
  IBackground,
  IBorder,
  IMargin,
  IPadding,
  TStructureTypes,
  TVerticalAlign,
} from '../interfaces';
import { AIPEmailBuilderBlock } from '../core/block';

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
   * Mame structure full width
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

const defaultColumnsOptions: IStructureColumnOptions = {
  background: {
    color: 'transparent',
  },
  border: {
    width: 0,
    color: '#cccccc',
    radius: 0,
    style: 'solid',
  },
  verticalAlign: 'top',
};

export class Structure implements IStructure {
  columns = 1;
  readonly id = Date.now();
  options: IStructureOptions = {
    fullWidth: false,
    border: {
      color: '#cccccc',
      style: 'solid',
      width: 0,
      radius: 0,
    },
    background: {
      color: '#ffffff',
      url: '',
      repeat: 'repeat',
      size: {
        value: 100,
        unit: 'px',
        auto: true,
        units: ['px', '%', 'cover', 'contain'],
      },
    },
    padding: {
      top: 4,
      right: 4,
      bottom: 4,
      left: 4,
    },
    margin: {
      top: 0,
      bottom: 0,
    },
    gaps: [4, 4],
  };

  constructor(
    readonly type: TStructureTypes = 'cols_1',
    readonly elements: AIPEmailBuilderBlock<any>[][] = [],
    options?: IStructureOptions
  ) {
    if (!elements.length) {
      if (['cols_2', 'cols_12', 'cols_21'].includes(type)) {
        this.columns = 2;
      } else if (type === 'cols_3') {
        this.columns = 3;
      } else if (type === 'cols_4') {
        this.columns = 4;
      } else if (type === 'cols_5') {
        this.columns = 5;
      } else if (type === 'cols_6') {
        this.columns = 6;
      }
    }

    const columns: IStructureColumnOptions[] = Array.from(
      { length: this.columns },
      () => defaultColumnsOptions
    );

    let columnsWidth = [1];
    if (type === 'cols_21') {
      columnsWidth = [4, 6];
    } else if (type === 'cols_12') {
      columnsWidth = [6, 4];
    } else if (type === 'cols_2') {
      columnsWidth = [5, 5];
    } else if (type === 'cols_3') {
      columnsWidth = [3.33, 3.33, 3.33];
    } else if (type === 'cols_4') {
      columnsWidth = [2.5, 2.5, 2.5, 2.5];
    } else if (type === 'cols_5') {
      columnsWidth = [2, 2, 2, 2, 2];
    } else if (type === 'cols_6') {
      columnsWidth = [1.6, 1.6, 1.6, 1.6, 1.6, 1.6];
    }

    this.options = defaultsDeep(options, this.options, {
      columns,
      columnsWidth,
    });
  }
}
