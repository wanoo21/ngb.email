
import { IBackground, IPadding, IWidthHeight, TDirection } from "../interfaces";
import { IStructure } from "../structure/structure";
import { defaultsDeep } from "../tools/utils";

/**
 * Builder {@link IIPEmail} general options interface.
 */
export interface IGeneralOptions {
  width: Omit<IWidthHeight, "auto">;
  background: Pick<IBackground, "color">;
  padding: IPadding;
  direction: TDirection;
  name: string;
  previewText: string;
  global: {
    // fonts?: string[];
    // padding?: IPadding;
  };
}

/**
 * Main builder Email Object interface.
 */
export interface IIPEmail {
  general: IGeneralOptions;
  structures: IStructure[];
}

/**
 * Main email builder data structure.
 */
export class IPEmail {
  general: IGeneralOptions;

  constructor(public structures: IStructure[] = [], general: Partial<IGeneralOptions> = {}) {
    this.general = defaultsDeep(general, {
      name: "",
      previewText: "",
      width: {
        value: 600,
        unit: "px",
        units: ["px"]
      },
      background: {
        // url: '',
        color: "#f1f1f1"
        // repeat: 'repeat',
        // size: {
        //   value: 100,
        //   unit: "%",
        //   auto: true,
        //   units: ["px", "%", "cover", "contain"]
        // }
      },
      padding: {
        top: 16,
        right: 10,
        bottom: 10,
        left: 10
      },
      direction: "ltr",
      global: {
        // fonts: [],
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    }) as IGeneralOptions;
  }
}
