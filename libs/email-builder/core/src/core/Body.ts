import { AfterViewInit, Directive, HostBinding, HostListener, Input, OnInit, ViewChild } from "@angular/core";
import { CdkDragDrop, CdkDropList, transferArrayItem } from "@angular/cdk/drag-drop";

import { WithSettings } from "./WithSettings";
import { IIPEmail } from "../body/body";
import { createBackground, createPadding } from "../tools/utils";
import { TDirection, TStructureTypes } from "../interfaces";
import { IStructure, Structure } from "../structure/structure";
import { cloneDeep } from "@ngcomma/ngx-abstract/utils";

@Directive()
export abstract class AIPEmailBody extends WithSettings implements OnInit, AfterViewInit {
  @Input() options!: IIPEmail["general"];
  @Input() structures!: IIPEmail["structures"];
  @ViewChild("structuresDropList", { static: true, read: CdkDropList })
  readonly structuresDropList: CdkDropList | undefined;
  #directionLabels = new Map<TDirection, string>([
    ["ltr", $localize`:@@direction:Left to right`],
    ["rtl", $localize`:@@direction:Right to left`]
  ]);

  get directionKeys() {
    return this.#directionLabels.keys();
  }

  @HostBinding("style")
  get hostStyles(): Record<string, string | number> {
    const { padding, background } = this.options;
    return {
      ...createPadding(padding),
      background: createBackground(background),
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      flexDirection: "column"
    };
  }

  @HostBinding("attr.dir")
  get dir(): string {
    return this.options.direction;
  }

  getDirectionLabel(dir: TDirection): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#directionLabels.get(dir)!;
  }

  @HostListener("click") onClick() {
    this.edit();
  }

  deleteStructure(structure: Structure): void {
    const indexOf = this.structures.indexOf(structure);
    this.structures.splice(indexOf, 1);
  }

  duplicateStructure(structure: Structure): void {
    const indexOf = this.structures.indexOf(structure);
    this.structures.splice(indexOf, 0, cloneDeep(structure));
  }

  dropListDropped({
                    container,
                    previousContainer,
                    currentIndex,
                    previousIndex,
                    item
                  }: CdkDragDrop<IStructure[], IStructure[], TStructureTypes>) {
    if (this.builderUiService.structuresDropLists.has(previousContainer)) {
      transferArrayItem(container.data, previousContainer.data, currentIndex, previousIndex);
    } else {
      container.data.splice(currentIndex, 0, new Structure(item.data));
    }
  }

  ngOnInit() {
    // Always show general settings if nothing is editing
    this.builderUiService.setDefaultSettingsPortal(this.settingsPortal);
  }

  ngAfterViewInit(): void {
    if (this.structuresDropList) {
      this.structuresDropList.data = this.structures;
      this.structuresDropList.autoScrollDisabled = false;
      this.builderUiService.structuresDropLists.add(this.structuresDropList);
    }
  }

  override markForCheck(): boolean {
    return this.builderUiService.portalOutletHasAttached();
  }
}
