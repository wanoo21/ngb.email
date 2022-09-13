import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from "@angular/core";
import { CdkDrag, CdkDragHandle } from "@angular/cdk/drag-drop";

import { Structure } from "../structure/structure";
import { IPEmailBuilderDynamicDirective } from "../directives/email-builder-dynamic.directive";
import { TIPEmailBuilderStyles, TVerticalAlign } from "../interfaces";
import { cloneDeep, createBorder, createMargin, createPadding, createWidthHeight, mergeObjects } from "../tools/utils";
import { AIPEmailBuilderBlock, AIPEmailBuilderBlockExtendedOptions } from "./Block";
import { IPEmail } from "../body/body";
import { WithSettings } from "./WithSettings";
import { IIPValueChanged } from "./ValueChanged";
import { AIPEmailBuilderMiddlewareService } from "../services";
import { filter, takeUntil } from "rxjs";
import { applyDiff } from "recursive-diff";

@Directive()
export abstract class AIPStructure extends WithSettings implements IIPValueChanged<Structure>, OnInit {
  @Input() value!: Structure;
  @Output() valueChange = new EventEmitter<Structure>();
  // Body general width
  @Input() bodyWidth!: IPEmail["general"]["width"];
  // All blocks
  @ViewChildren(IPEmailBuilderDynamicDirective)
  readonly blocks!: QueryList<IPEmailBuilderDynamicDirective>;
  // Column to edit
  editColumnIndex = 0;
  // Clone & Delete Output
  @Output() private clone = new EventEmitter<Structure>();
  @Output() private delete = new EventEmitter<Structure>();
  // Allow change detection to run last time in case no more inside editing blocks
  #hasLastEditedBlock = false;
  #verticalLabels = new Map<TVerticalAlign, string>([
    ["top", $localize`:@@vertical_align:Top`],
    ["middle", $localize`:@@vertical_align:Middle`],
    ["bottom", $localize`:@@vertical_align:Bottom`]
  ]);
  #middlewareService = inject(AIPEmailBuilderMiddlewareService);
  #cdkDrag = inject(CdkDrag);

  // Attach child handle to host drag
  @ViewChildren(CdkDragHandle)
  set dragHandle(handles: QueryList<CdkDragHandle>) {
    this.#cdkDrag.data = this.value;
    this.#cdkDrag._handles = handles;
  }

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
    const isYes = await this.#middlewareService.delete(this.value);
    if (isYes) {
      this.delete.next(this.value);
      this.detachSettingsPortal();
    }
  }

  duplicateBlock($event: MouseEvent, block: AIPEmailBuilderBlock, column: AIPEmailBuilderBlockExtendedOptions[]): void {
    $event.preventDefault();
    $event.stopPropagation();
    const indexOf = column.indexOf(block);
    column.splice(indexOf, 0, cloneDeep(block.toObject()));
  }

  async removeBlock($event: MouseEvent, block: AIPEmailBuilderBlock, column: AIPEmailBuilderBlockExtendedOptions[]): Promise<void> {
    $event.preventDefault();
    $event.stopPropagation();
    const isYes = await this.#middlewareService.delete(block);
    if (isYes) {
      const indexOf = column.indexOf(block);
      column.splice(indexOf, 1);
      this.detachSettingsPortal();
    }
  }

  editColumn(index: number): void {
    this.editColumnIndex = index;
  }

  ngOnInit(): void {
    this.historyService.commitPush$.pipe(
      filter(({ id }) => {
        const [type, changeId] = id.split(":");
        return type === "structure" && changeId === this.value.id;
      }),
      takeUntil(this.destroyed)
    ).subscribe(({ diff }) => {
      mergeObjects(this.value.options, applyDiff(this.value.options, diff));
      this.valueChange.next(this.value);
      this.changeDetectorRef.markForCheck();
    });
  }

  override markForCheck(): boolean {
    const mustCheckNow = this.blocks?.some(({ context }) => context.$implicit.isCurrentlyEditing);
    if (mustCheckNow || this.#hasLastEditedBlock) {
      this.#hasLastEditedBlock = mustCheckNow;
      return true;
    }
    return false;
  }
}
