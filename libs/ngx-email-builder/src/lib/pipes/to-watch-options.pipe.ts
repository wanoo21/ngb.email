import { Pipe, PipeTransform } from "@angular/core";

import { AIPEmailBuilderBlock } from "../core/Block";
import { AIPEmailBody } from "../core/Body";
import { AIPStructure } from "../core/Structure";
import { IIPOptionsHistoryContext } from "../directives/email-builder-history-host.directive";

/**
 * Transform current component options and send to [ipEmailBuilderHistoryHost] directive.
 */
@Pipe({
  name: "toHistoryOptions"
})
export class ToHistoryOptionsPipe implements PipeTransform {
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
