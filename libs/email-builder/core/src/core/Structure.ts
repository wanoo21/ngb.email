import { Directive, Input, QueryList, ViewChildren } from '@angular/core';

import { Configurable } from './Configurable';
import { IStructureOptions, Structure } from '../structure/structure';
import { IPEmailBuilderDynamicDirective } from '../directives/email-builder-dynamic.directive';

@Directive()
export abstract class AIPStructure extends Configurable<IStructureOptions> {
  @Input() structure = new Structure('cols_4');
  @Input() index!: number;
  @ViewChildren(IPEmailBuilderDynamicDirective, {
    emitDistinctChangesOnly: true,
  })
  readonly blocks!: QueryList<IPEmailBuilderDynamicDirective>;
  options: IStructureOptions = {};

  override markForCheck(): boolean {
    return this.blocks?.some(
      ({ cmpInstance }) => !!cmpInstance?.isCurrentlyEditing
    );
  }
}
