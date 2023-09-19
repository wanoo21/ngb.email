import { Pipe, PipeTransform } from "@angular/core";

import { TStructureTypes } from "../interfaces";
import { IStructure } from "../structure/structure";

/**
 * Returns the appropriate {@link TStructureTypes} based on the given {@link IStructure}.
 *
 * This is primarily used for [cdkDragData] inside the structure list.
 */
@Pipe({
  name: "toBodyStructure"
})
export class ToBodyStructurePipe implements PipeTransform {
  /**
   * Transforms the given structure object and returns its type.
   *
   * @param structure The structure object to transform
   * @returns The type of the structure
   * @example
   * // Usage in template
   * <div *ngFor="let structure of structures"
   *      cdkDrag
   *      [cdkDragData]="structure | toBodyStructure">
   *   ...
   * </div>
   */
  transform(structure: IStructure): TStructureTypes {
    return structure.type;
  }
}

