import { Directive, inject, Input, OnInit, ViewChild } from "@angular/core";
import { CdkPortalOutlet } from "@angular/cdk/portal";
import { CdkDropList } from "@angular/cdk/drag-drop";

import { IPEmailBuilderUiService } from "../services";
import { IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";
import { TStructureTypes } from "../interfaces";
import { IStructure, Structure } from "../structure/structure";
import { AIPEmailBuilderBlockExtendedOptions } from "./Block";

/**
 * Abstract class for settings portal.
 * Component' HTML that extends this class, must contain {@link CdkPortalOutlet} directive.
 *
 * @example
 * <ng-container [cdkPortalOutlet]="activeSettings$ | async"></ng-container>
 */
@Directive()
export abstract class AIPEmailBuilderAside implements OnInit {
  // Mark all settings as readonly.
  @Input() readonly = false;
  // Portal Outlet where settings portal must be attached.
  @ViewChild(CdkPortalOutlet, { static: true })
  readonly asideSettingsPortal?: CdkPortalOutlet;
  // A list of DnD blocks.
  readonly blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA);
  // A list of DnD structures.
  readonly structures = (["cols_1", "cols_2", "cols_12", "cols_21", "cols_3", "cols_4", "cols_5", "cols_6"] as TStructureTypes[]).map(type => new Structure(type));
  private readonly builderUiService = inject(IPEmailBuilderUiService);
  // Current active portal settings.
  readonly activeSettings$ = this.builderUiService.currentSettingsPortal$;

  // Columns list where DnD blocks can be dragged.
  get columnsDropLists(): CdkDropList<AIPEmailBuilderBlockExtendedOptions[]>[] {
    return Array.from(this.builderUiService.columnsDropLists);
  }

  // Structures list where DnD structures can be dragged.
  get structuresDropLists(): CdkDropList<IStructure[]>[] {
    return Array.from(this.builderUiService.structuresDropLists);
  }

  ngOnInit() {
    if (this.asideSettingsPortal) {
      this.builderUiService.setSettingsPortalOutlet(this.asideSettingsPortal);
    } else {
      console.warn(`You must add [cdkPortalOutlet]="activeSettings$ | async" to aside component HTML.`);
    }
  }
}
