import { Pipe, PipeTransform } from "@angular/core";

import { TIPEmailBuilderStyles } from "../interfaces";
import { IStructureOptions } from "../structure/structure";
import { createBorder } from "../tools/utils";

/**
 * Return column styles based on index and {@link IStructureOptions}.
 */
@Pipe({
  name: "ipColumnStyles",
  pure: false
})
export class ColumnStylesPipe implements PipeTransform {
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
