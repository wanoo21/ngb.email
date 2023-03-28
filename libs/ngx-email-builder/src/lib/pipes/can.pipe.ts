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

/**
 * Check if end user can or can not perform an action based on {@link AIPEmailBuilderMiddlewareService.can} method.
 * @example
 * <button *ngIf="'edit'|ipCan:currentBlock">Edit</button>
 */
@Pipe({
  name: "ipCan"
})
export class IpCanPipe implements PipeTransform {

  /**
   * Constructor for IpCanPipe.
   * @param middleware - the email builder middleware service to check user permission
   */
  constructor(readonly middleware: AIPEmailBuilderMiddlewareService) {
  }

  /**
   * Check if the end user can or cannot perform an action based on the middleware's can method.
   * @param entity - the email builder entity object
   * @param action - the action to be performed
   * @returns A boolean value indicates whether user can perform the specified action on the given entity.
   */
  transform(entity: AIPEmailBuilderBlockExtendedOptions, action: middlewareBlockActions): boolean;
  transform(entity: IStructure, action: middlewareStructureActions): boolean;
  transform(entity: IPEmail, action: middlewareEmailActions): boolean
  transform(entity: AIPEmailBuilderBlockExtendedOptions | IStructure | IPEmail, action: middlewareStructureActions | middlewareBlockActions | middlewareEmailActions): boolean {
    return this.middleware.can(action, entity);
  }
}

