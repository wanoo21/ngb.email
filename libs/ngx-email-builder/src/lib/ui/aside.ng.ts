import { Directive, effect, inject, viewChild } from '@angular/core';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { CdkDropList } from '@angular/cdk/drag-drop';

import { IPEmailBuilderUiService } from './ui.service';
import { IP_EMAIL_BUILDER_BLOCKS_DATA } from '../config/blocks';
import { IStructure, TStructureTypes } from './structure/interfaces';
import { Structure } from './structure/structure';

/**
 * Abstract class for settings portal.
 * Component' HTML that extends this class, must contain {@link CdkPortalOutlet} directive.
 *
 * @example
 * <ng-container [cdkPortalOutlet]="builderUiService.currentSettingsPortal$ | async"></ng-container>
 */
@Directive()
export abstract class AIPEmailBuilderAside {
  // Portal Outlet where settings portal must be attached.
  readonly asideSettingsPortal = viewChild(CdkPortalOutlet);
  // A list of DnD blocks.
  readonly blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA);
  // A list of DnD structures.
  readonly structures = (
    [
      'cols_1',
      'cols_2',
      'cols_12',
      'cols_21',
      'cols_3',
      'cols_4',
      'cols_5',
      'cols_6',
    ] as TStructureTypes[]
  ).map((type) => new Structure(type));
  readonly builderUiService = inject(IPEmailBuilderUiService);

  // Columns list where DnD blocks can be dragged.
  get columnsDropLists() {
    return Array.from(this.builderUiService.columnsDropLists);
  }

  // Structures list where DnD structures can be dragged.
  get structuresDropLists(): CdkDropList<IStructure[]>[] {
    return Array.from(this.builderUiService.structuresDropLists);
  }

  #effect = effect(() => {
    const asidePortal = this.asideSettingsPortal();
    if (asidePortal) {
      this.builderUiService.setSettingsPortalOutlet(asidePortal);
    }
  });
}
