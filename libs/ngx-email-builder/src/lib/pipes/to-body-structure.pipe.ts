import { Pipe, PipeTransform } from "@angular/core";

import { TStructureTypes } from "../interfaces";
import { IStructure } from "../structure/structure";

@Pipe({
  name: "toBodyStructure"
})
export class ToBodyStructurePipe implements PipeTransform {
  transform(structure: IStructure): TStructureTypes {
    return structure.type;
  }
}
