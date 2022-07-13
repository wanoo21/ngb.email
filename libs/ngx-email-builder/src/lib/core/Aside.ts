import { Directive, inject, OnInit, ViewChild } from "@angular/core";
import { CdkPortalOutlet } from "@angular/cdk/portal";
import { CdkDropList } from "@angular/cdk/drag-drop";

import { IPEmailBuilderUiService } from "../services/email-builder-ui.service";
import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";
import { TStructureTypes } from "../interfaces";
import { IStructure, Structure } from "../structure/structure";

@Directive()
export abstract class AIPEmailBuilderAside implements OnInit {
  @ViewChild(CdkPortalOutlet, { static: true })
  readonly asideSettingsPortal!: CdkPortalOutlet;
  readonly builderUiService = inject(IPEmailBuilderUiService);
  readonly blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA); //.sort((a, b) => a.state.order - b.state.order);
  readonly structures = (["cols_1", "cols_2", "cols_12", "cols_21", "cols_3", "cols_4", "cols_5", "cols_6"] as TStructureTypes[]).map(type => new Structure(type));

  get columnsDropLists(): CdkDropList<IIPEmailBuilderBlockData[]>[] {
    return Array.from(this.builderUiService.columnsDropLists);
  }

  get structuresDropLists(): CdkDropList<IStructure[]>[] {
    return Array.from(this.builderUiService.structuresDropLists);
  }

  ngOnInit() {
    this.builderUiService.setSettingsPortalOutlet(this.asideSettingsPortal);
  }
}
