import { IBackground, IPadding, IWidthHeight, TDirection } from '../interfaces';
import { IStructure } from '../structure/structure';

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

abstract class IPEmailBody {
  protected constructor(
    public structures: IStructure[] = [],
    public general: IGeneralOptions = {
      name: '',
      previewText: '',
      width: {
        value: 600,
        unit: 'px',
        units: ['px'],
      },
      background: {
        // url: '',
        color: '#f1f1f1',
        // repeat: 'repeat',
        size: {
          value: 100,
          unit: '%',
          auto: true,
          units: ['px', '%', 'cover', 'contain'],
        },
      },
      padding: {
        top: 16,
        right: 10,
        bottom: 10,
        left: 10,
      },
      direction: 'ltr',
      global: {
        // TODO Add more global configurations
        // fonts: [],
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
    }
  ) {}
}

export class IPEmail extends IPEmailBody {
  constructor({ structures, general }: IIPEmail = {}) {
    super(structures, general);
  }
}
