import { defaultsDeep, randomString } from "@ngcomma/ngx-abstract/utils";

import { IBackground, IBorder, IMargin, IPadding, TStructureTypes, TVerticalAlign } from "../interfaces";
import { AIPEmailBuilderBlock, AIPEmailBuilderBlockExtendedOptions } from "../core/block";

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
  /**
   * If it's module, it can't be edited within email body.
   * @default false
   */
  isModule?: boolean;
  options: IStructureOptions;
  // Structure columns.
  elements: AIPEmailBuilderBlockExtendedOptions<any>[][];
  // readonly columns: number;
}

const defaultColumnsOptions: IStructureColumnOptions = {
  background: {
    color: "transparent"
  },
  border: {
    width: 0,
    color: "#cccccc",
    radius: 0,
    style: "solid"
  },
  verticalAlign: "top"
};

export class Structure implements IStructure {
  readonly id = randomString();
  elements: AIPEmailBuilderBlockExtendedOptions<any>[][] = [];
  options: IStructureOptions;

  constructor(
    readonly type: TStructureTypes = "cols_1",
    elements: AIPEmailBuilderBlockExtendedOptions<any>[][] = [],
    options: Partial<IStructureOptions> = {}
  ) {
    let columnsLength = 1;
    let columnsWidth = [1];
    if (["cols_2", "cols_12", "cols_21"].includes(type)) {
      columnsLength = 2;
      if (type === "cols_21") {
        columnsWidth = [4, 6];
      } else if (type === "cols_12") {
        columnsWidth = [6, 4];
      } else if (type === "cols_2") {
        columnsWidth = [5, 5];
      }
    } else if (type === "cols_3") {
      columnsLength = 3;
      columnsWidth = [3.33, 3.33, 3.33];
    } else if (type === "cols_4") {
      columnsLength = 4;
      columnsWidth = [2.5, 2.5, 2.5, 2.5];
    } else if (type === "cols_5") {
      columnsLength = 5;
      columnsWidth = [2, 2, 2, 2, 2];
    } else if (type === "cols_6") {
      columnsLength = 6;
      columnsWidth = [1.6, 1.6, 1.6, 1.6, 1.6, 1.6];
    }

    this.elements = Array.from({ length: columnsLength }, (_, key) => {
      return (elements[key] || []).map(block => {
        if (block instanceof AIPEmailBuilderBlock) {
          return block.toObject();
        }
        return block;
      });
    });

    this.options = defaultsDeep(options, {
      fullWidth: false,
      border: {
        color: "#cccccc",
        style: "solid",
        width: 0,
        radius: 0
      },
      background: {
        color: "#ffffff",
        url: "",
        repeat: "repeat",
        size: {
          value: 100,
          unit: "px",
          auto: true,
          units: ["px", "%", "cover", "contain"]
        }
      },
      padding: {
        top: 4,
        right: 4,
        bottom: 4,
        left: 4
      },
      margin: {
        top: 0,
        bottom: 0
      },
      gaps: [4, 4]
    }, {
      columnsWidth, columns: Array.from({ length: columnsLength }, () => defaultColumnsOptions)
    }) as IStructureOptions;
  }
}
