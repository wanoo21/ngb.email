import { Pipe, PipeTransform } from "@angular/core";

import { AIPEmailBuilderBlock } from "../core/Block";
import { AIPEmailBody } from "../core/Body";
import { AIPStructure } from "../core/Structure";
import { IIPOptionsHistoryContext } from "../directives/email-builder-history-host.directive";

/**
 * Transform the current component options and send them to the [ipEmailBuilderHistoryHost] directive.
 *
 * @example
 * <div [ipEmailBuilderHistoryHost]="this | toHistoryOptions"></div>
 *
 * @export
 * @class ToHistoryOptionsPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "toHistoryOptions"
})
export class ToHistoryOptionsPipe implements PipeTransform {
  /**
   * Transforms the given component into an object with a `cmp` property and a `watch` property.
   *
   * @param {(AIPEmailBuilderBlock | AIPStructure | AIPEmailBody)} cmp - The component to transform.
   * @returns {IIPOptionsHistoryContext<Record<string, any>>} An object with the `cmp` property set to the given component and the `watch` property set to an empty object.
   * @memberof ToHistoryOptionsPipe
   */
  transform(cmp: AIPEmailBuilderBlock | AIPStructure | AIPEmailBody): IIPOptionsHistoryContext<Record<string, any>> {
    if (cmp instanceof AIPEmailBuilderBlock) {
      return { cmp, watch: {} };
    } else if (cmp instanceof AIPStructure) {
      return { cmp, watch: {} };
    } else {
      return { cmp, watch: {} };
    }
  }
}
