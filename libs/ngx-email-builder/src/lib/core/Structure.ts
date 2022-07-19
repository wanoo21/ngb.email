import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  Output,
  QueryList,
  ViewChildren
} from "@angular/core";
import { cloneDeep, defaultsDeep } from "@ngcomma/ngx-abstract/utils";

import { CdkDragDrop, CdkDropList, transferArrayItem } from "@angular/cdk/drag-drop";
import { Structure } from "../structure/structure";
import { IPEmailBuilderDynamicDirective } from "../directives/email-builder-dynamic.directive";
import { TIPEmailBuilderStyles, TVerticalAlign } from "../interfaces";
import { createBorder, createMargin, createPadding, createWidthHeight } from "../tools/utils";
import { AIPEmailBuilderBlockExtendedOptions } from "./Block";
import { IPEmail } from "../body/body";
import { WithSettings } from "./WithSettings";
import { IIPValueChanged } from "./ValueChanged";
import { AIPEmailBuilderMiddlewareService } from "../services";

// type KeyOfType<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T]

@Directive()
export abstract class AIPStructure extends WithSettings implements AfterViewInit, IIPValueChanged<Structure> {
  @Input() value!: Structure;
  @Output() valueChange = new EventEmitter<Structure>();
  // Body general width
  @Input() bodyWidth!: IPEmail["general"]["width"];
  // All blocks
  @ViewChildren(IPEmailBuilderDynamicDirective)
  readonly blocks!: QueryList<IPEmailBuilderDynamicDirective>;
  // Column drop lists
  @ViewChildren(CdkDropList)
  readonly dropLists!: QueryList<CdkDropList<AIPEmailBuilderBlockExtendedOptions[]>>;
  // Column to edit
  editColumnIndex = 0;
  // Clone & Delete Output
  @Output() private clone = new EventEmitter<Structure>();
  @Output() private delete = new EventEmitter<Structure>();
  // Allow change detection to run last time in case no more inside editing blocks
  #hasLastEditedBlock = false;
  #elRef = inject(ElementRef).nativeElement;
  #verticalLabels = new Map<TVerticalAlign, string>([
    ["top", $localize`:@@vertical_align:Top`],
    ["middle", $localize`:@@vertical_align:Middle`],
    ["bottom", $localize`:@@vertical_align:Bottom`]
  ]);
  #middlewareService = inject(AIPEmailBuilderMiddlewareService);

  @HostBinding("style")
  get bodyStyles(): TIPEmailBuilderStyles {
    const { padding, background, border, margin, columnsWidth } = this.value.options;
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
    return this.value.options.fullWidth ? "100%" : createWidthHeight(this.bodyWidth);
  }

  get columnsSize(): number[] {
    return this.value.options.columns.map((_, index) => index);
  }

  get verticalLabels(): TVerticalAlign[] {
    return [...this.#verticalLabels.keys()];
  }

  get columnsDropLists(): CdkDropList<AIPEmailBuilderBlockExtendedOptions[]>[] {
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
    this.clone.next(this.value);
  }

  async removeSelf(): Promise<void> {
    const isYes = await this.#middlewareService.deleteStructure(this.value);
    if (isYes) {
      this.delete.next(this.value);
      this.detachSettingsPortal();
    }
  }

  duplicateBlock($event: MouseEvent, block: AIPEmailBuilderBlockExtendedOptions, column: AIPEmailBuilderBlockExtendedOptions[]): void {
    $event.preventDefault();
    $event.stopPropagation();
    const indexOf = column.indexOf(block);
    column.splice(indexOf, 0, cloneDeep(block));
  }

  async removeBlock($event: MouseEvent, block: AIPEmailBuilderBlockExtendedOptions, column: AIPEmailBuilderBlockExtendedOptions[]): Promise<void> {
    $event.preventDefault();
    $event.stopPropagation();
    const isYes = await this.#middlewareService.deleteBlock(block);
    if (isYes) {
      const indexOf = column.indexOf(block);
      column.splice(indexOf, 1);
      this.detachSettingsPortal();
    }
  }

  columnStyles(columnKey: number): TIPEmailBuilderStyles {
    const { gaps } = this.value.options;
    const column = this.value.options.columns[columnKey];

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

  dropListDropped(drop: CdkDragDrop<AIPEmailBuilderBlockExtendedOptions[]>) {
    const { previousContainer, container, previousIndex, currentIndex, item } = drop;
    if (this.builderUiService.columnsDropLists.has(previousContainer)) {
      transferArrayItem(previousContainer.data, container.data, previousIndex, currentIndex);
    } else {
      container.data.splice(currentIndex, 0, item.data);
    }
  }

  ngAfterViewInit(): void {
    /**
     * A small change detection improvement.
     * If it's outside viewport - ignore definitively, even if it's markForCheck().
     */
    new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        this.changeDetectorRef.reattach();
        this.changeDetectorRef.markForCheck();
      } else {
        this.changeDetectorRef.detach();
      }
    }).observe(this.#elRef);
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
