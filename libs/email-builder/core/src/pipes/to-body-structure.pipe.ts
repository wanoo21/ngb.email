import { Pipe, PipeTransform } from "@angular/core";
import { IStructure, TStructureTypes } from "@wlocalhost/ngx-email-builder/core";

@Pipe({
  name: "toBodyStructure"
})
export class ToBodyStructurePipe implements PipeTransform {
  transform(structure: IStructure): TStructureTypes {
    return structure.type;
  }
}
