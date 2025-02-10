import { defaultsDeep, randomString } from '../../tools/utils';
import { TIPEmailBuilderBlock } from '../../config/blocks';
import {
  IStructure,
  IStructureColumnOptions,
  IStructureOptions,
  TStructureTypes,
} from './interfaces';
import { DeepPartial } from '../../interfaces';

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
  readonly id = randomString();
  elements: TIPEmailBuilderBlock[][] = [];
  options: IStructureOptions;

  constructor(
    readonly type: TStructureTypes = 'cols_1',
    elements: TIPEmailBuilderBlock[][] = [],
    options: DeepPartial<IStructureOptions> = {}
  ) {
    let columnsLength = 1;
    let columnsWidth = [1];
    if (['cols_2', 'cols_12', 'cols_21'].includes(type)) {
      columnsLength = 2;
      if (type === 'cols_21') {
        columnsWidth = [4, 6];
      } else if (type === 'cols_12') {
        columnsWidth = [6, 4];
      } else if (type === 'cols_2') {
        columnsWidth = [5, 5];
      }
    } else if (type === 'cols_3') {
      columnsLength = 3;
      columnsWidth = [3.33, 3.33, 3.33];
    } else if (type === 'cols_4') {
      columnsLength = 4;
      columnsWidth = [2.5, 2.5, 2.5, 2.5];
    } else if (type === 'cols_5') {
      columnsLength = 5;
      columnsWidth = [2, 2, 2, 2, 2];
    } else if (type === 'cols_6') {
      columnsLength = 6;
      columnsWidth = [1.6, 1.6, 1.6, 1.6, 1.6, 1.6];
    }

    this.elements = Array.from({ length: columnsLength }, (_, key) => {
      return elements[key] || [];
    });

    this.options = defaultsDeep(
      {
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
        gaps: [8, 4],
      },
      options,
      {
        columnsWidth,
        columns: Array.from({ length: columnsLength }, () =>
          structuredClone(defaultColumnsOptions)
        ),
      }
    ) as IStructureOptions;
  }
}
