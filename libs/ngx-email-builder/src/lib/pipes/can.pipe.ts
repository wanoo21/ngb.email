import { Pipe, PipeTransform } from "@angular/core";

import { IPEmail } from "../body/body";
import { AIPEmailBuilderBlockExtendedOptions } from "../core/Block";
import {
  AIPEmailBuilderMiddlewareService,
  middlewareBlockActions,
  middlewareEmailActions,
  middlewareStructureActions
} from "../services";
import { IStructure } from "../structure/structure";


@Pipe({
  name: "ipCan"
})
export class CanPipe implements PipeTransform {

  constructor(
    readonly middleware: AIPEmailBuilderMiddlewareService
  ) {
  }

  transform(entity: AIPEmailBuilderBlockExtendedOptions, action: middlewareBlockActions): boolean;
  transform(entity: IStructure, action: middlewareStructureActions): boolean;
  transform(entity: IPEmail, action: middlewareEmailActions): boolean
  transform(entity: AIPEmailBuilderBlockExtendedOptions | IStructure | IPEmail, action: middlewareStructureActions | middlewareBlockActions | middlewareEmailActions): boolean {
    return this.middleware.can(action, entity);
  }
}
