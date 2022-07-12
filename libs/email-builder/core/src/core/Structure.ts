import {
  AfterViewInit,
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChildren
} from "@angular/core";
import { CdkDragDrop, CdkDropList, transferArrayItem } from "@angular/cdk/drag-drop";

import { WithSettings } from "./WithSettings";
import { Structure } from "../structure/structure";
import { IPEmailBuilderDynamicDirective } from "../directives/email-builder-dynamic.directive";
import { TIPEmailBuilderStyles, TVerticalAlign } from "../interfaces";
import { createBorder, createMargin, createPadding, createWidthHeight } from "../tools/utils";
import { AIPEmailBody } from "./Body";
import { IIPEmailBuilderBlockData } from "../private-tokens";
import { AIPEmailBuilderBlockExtendedOptions } from "./Block";
import { cloneDeep } from "@ngcomma/ngx-abstract/utils";

@Directive()
export abstract class AIPStructure extends WithSettings implements AfterViewInit {
  @Input() structure = new Structure();
  @Input() bodyWidth!: AIPEmailBody["options"]["width"];
  @ViewChildren(IPEmailBuilderDynamicDirective)
  readonly blocks!: QueryList<IPEmailBuilderDynamicDirective>;
  @ViewChildren(CdkDropList)
  readonly dropLists!: QueryList<CdkDropList<IIPEmailBuilderBlockData[]>>;
  editColumnIndex = 0;
  @Output() private clone = new EventEmitter<Structure>();
  @Output() private delete = new EventEmitter<Structure>();
  // Allow change detection to run last time in case no more inside editing blocks
  #hasLastEditedBlock = false;
  #verticalLabels = new Map<TVerticalAlign, string>([
    ["top", $localize`:@@vertical_align:Top`],
    ["middle", $localize`:@@vertical_align:Middle`],
    ["bottom", $localize`:@@vertical_align:Bottom`]
  ]);

  @HostBinding("style")
  get bodyStyles(): TIPEmailBuilderStyles {
    const { padding, background, border, margin, columnsWidth } = this.structure.options;
    return {
      display: "grid",
      ...createPadding(padding),
      ...(background.url ? { backgroundImage: `url(${background.url})` } : {}),
      backgroundRepeat: background.repeat,
      backgroundColor: background.color,
      backgroundSize: createWidthHeight(background.size),
      backgroundPosition: "top center",
      ...createBorder(border),
      ...createMargin(margin),
      maxWidth: "100%",
      gridTemplateColumns: columnsWidth.map(fr => `${fr}fr`).join(" ")
      // gap: gaps.map(gap => `${gap}px`).join(" ")
    };
  }

  @HostBinding("style.width")
  get width(): string {
    return this.structure.options.fullWidth ? "100%" : createWidthHeight(this.bodyWidth);
  }

  get columnsSize(): number[] {
    return this.structure.options.columns.map((_, index) => index);
  }

  get verticalLabels(): TVerticalAlign[] {
    return [...this.#verticalLabels.keys()];
  }

  get columnsDropLists(): CdkDropList<IIPEmailBuilderBlockData[]>[] {
    return Array.from(this.builderUiService.columnsDropLists);
  }

  getVerticalAlignLabel(key: TVerticalAlign): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#verticalLabels.get(key)!;
  }

  @HostListener("click", ["$event"]) onClick(ev: Event) {
    ev.stopPropagation();
  }

  duplicateSelf(): void {
    this.clone.next(this.structure);
  }

  removeSelf(): void {
    this.delete.next(this.structure);
    this.detachSettingsPortal();
  }

  duplicateBlock($event: MouseEvent, block: AIPEmailBuilderBlockExtendedOptions, column: AIPEmailBuilderBlockExtendedOptions[]): void {
    $event.preventDefault();
    $event.stopPropagation();
    const indexOf = column.indexOf(block);
    column.splice(indexOf, 0, cloneDeep(block));
  }

  removeBlock($event: MouseEvent, block: AIPEmailBuilderBlockExtendedOptions, column: AIPEmailBuilderBlockExtendedOptions[]): void {
    $event.preventDefault();
    $event.stopPropagation();
    const indexOf = column.indexOf(block);
    column.splice(indexOf, 1);
    this.detachSettingsPortal();
  }

  columnStyles(columnKey: number): TIPEmailBuilderStyles {
    const { gaps } = this.structure.options;
    const column = this.structure.options.columns[columnKey];

    let verticalAlign = "center";
    if (column.verticalAlign === "bottom") {
      verticalAlign = "flex-end";
    } else if (column.verticalAlign === "top") {
      verticalAlign = "flex-start";
    }

    return {
      margin: gaps.map(gap => `${gap}px`).join(" "),
      placeSelf: `${verticalAlign} stretch`,
      wordBreak: "break-word",
      backgroundColor: column.background.color,
      ...createBorder(column.border)
    };
  }

  editColumn(index: number): void {
    this.editColumnIndex = index;
  }

  dropListDropped(drop: CdkDragDrop<AIPEmailBuilderBlockExtendedOptions[], (IIPEmailBuilderBlockData | AIPEmailBuilderBlockExtendedOptions)[]>) {
    const { previousContainer, container, previousIndex, currentIndex, item } = drop;
    if (this.builderUiService.columnsDropLists.has(previousContainer as CdkDropList<IIPEmailBuilderBlockData[]>)) {
      transferArrayItem(previousContainer.data, container.data, previousIndex, currentIndex);
    } else {
      container.data.splice(currentIndex, 0, item.data);
    }
  }

  ngAfterViewInit(): void {
    // Add all inside columns to columns drop lists
    this.dropLists.forEach(dropList => {
      this.builderUiService.columnsDropLists.add(dropList);
    });
  }

  override markForCheck(): boolean {
    const mustCheckNow = this.blocks?.some(({ cmpInstance }) => !!cmpInstance?.isCurrentlyEditing);
    if (mustCheckNow || this.#hasLastEditedBlock) {
      this.#hasLastEditedBlock = mustCheckNow;
      return true;
    }
    return false;
  }
}
