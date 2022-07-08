import { AfterViewInit, Directive, inject, OnInit, ViewChild } from "@angular/core";
import { CdkPortalOutlet } from "@angular/cdk/portal";
import { AbsComponent } from "@ngcomma/ngx-abstract";
import { CdkDropList } from "@angular/cdk/drag-drop";

import { IPEmailBuilderUiService } from "../services/email-builder-ui.service";
import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";
import { IStructure } from "../structure/structure";

@Directive()
export abstract class AIPEmailBuilderAside extends AbsComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkPortalOutlet, { static: true })
  readonly asideSettingsPortal!: CdkPortalOutlet;
  @ViewChild("blocksDragList", { static: true, read: CdkDropList })
  readonly blocksDragList: CdkDropList<IIPEmailBuilderBlockData[]> | undefined;
  @ViewChild("structuresDragList", { static: true, read: CdkDropList })
  readonly structuresDragList: CdkDropList<IStructure[]> | undefined;

  readonly builderUiService = inject(IPEmailBuilderUiService);
  readonly blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA); //.sort((a, b) => a.state.order - b.state.order);

  ngOnInit() {
    this.builderUiService.setSettingsPortalOutlet(this.asideSettingsPortal);
  }

  ngAfterViewInit(): void {
    if (this.blocksDragList) {
      this.blocksDragList.data = this.blocks;
      this.blocksDragList.sortingDisabled = true;
      this.blocksDragList.sortPredicate = () => false;
      this.blocksDragList.connectedTo = Array.from(this.builderUiService.columnsDropLists);
    }

    if (this.structuresDragList) {
      this.structuresDragList.data = [];
      this.structuresDragList.sortingDisabled = false;
      this.structuresDragList.sortPredicate = () => false;
      this.structuresDragList.connectedTo = Array.from(this.builderUiService.structuresDropLists);
    }
  }
}
