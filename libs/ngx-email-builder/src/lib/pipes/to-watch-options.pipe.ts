import { Pipe, PipeTransform } from "@angular/core";

import { AIPEmailBuilderBlock } from "../core/Block";
import { AIPEmailBody } from "../core/Body";
import { AIPStructure } from "../core/Structure";
import { IIPOptionsHistoryContext } from "../directives/ipemail-builder-settings.directive";

@Pipe({
  name: "toWatchOptions",
  pure: false
})
export class ToWatchOptionsPipe implements PipeTransform {
  transform(cmp: AIPEmailBuilderBlock | AIPStructure | AIPEmailBody): IIPOptionsHistoryContext<Record<string, any>> {
    if (cmp instanceof AIPEmailBuilderBlock) {
      const { options, ...rest } = cmp.toObject();
      return { cmp, watch: { ...rest, options: cmp.options } };
    } else if (cmp instanceof AIPStructure) {
      return { cmp, watch: cmp.value.options };
    } else {
      return { cmp, watch: cmp.value.general };
    }
  }
}
