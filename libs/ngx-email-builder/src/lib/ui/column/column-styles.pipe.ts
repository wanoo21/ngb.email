import { Pipe, PipeTransform } from "@angular/core";

import { TIPEmailBuilderStyles } from "../../interfaces";
import { IStructureOptions } from "../structure/interfaces";
import { createBorder } from "../../tools/utils";

/**
 * The ColumnStylesPipe is a pipe that calculates the styles for an email builder column based on its index and the structure options.
 * @remarks
 * The styles include margin, alignment, word break, background color and border.
 * @example
 * ```
 * <div [ngStyle]="columnIndex | ipColumnStyles : structureOptions"></div>
 * ```
 */
@Pipe({
  name: "ipColumnStyles",
  pure: false
})
export class ColumnStylesPipe implements PipeTransform {
  /**
   * Transforms an email builder column index and structure options into styles.
   * @param index - The index of the column.
   * @param structureOptions - The structure options that contain the gaps and columns data.
   * @returns - The styles for the column.
   */
  transform(index: number, { gaps, columns }: IStructureOptions): TIPEmailBuilderStyles {
    const { verticalAlign, background, border } = columns[index];

    let align = "center";
    if (verticalAlign === "bottom") {
      align = "flex-end";
    } else if (verticalAlign === "top") {
      align = "flex-start";
    }

    return {
      margin: gaps.map(gap => `${gap}px`).join(" "),
      placeSelf: `${align} stretch`,
      wordBreak: "break-word",
      backgroundColor: background.color,
      ...createBorder(border)
    };
  }
}
