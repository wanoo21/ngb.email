import {
  computed,
  Directive,
  inject,
  input,
  QueryList,
  viewChildren,
  ViewChildren,
} from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { IPEmailBuilderDynamicDirective } from '../directives/email-builder-dynamic.directive';
import { TVerticalAlign } from '../interfaces';
import {
  cloneDeep,
  createBorder,
  createMargin,
  createPadding,
  createWidthHeight,
} from '../tools/utils';
import {
  AIPEmailBuilderBlock,
  AIPEmailBuilderBlockExtendedOptions,
} from './Block';
import { WithSettings } from './WithSettings';
import { AIPEmailBuilderMiddlewareService } from '../services';
import { injectIIPEmail } from '../state';

const verticalLabels = new Map<TVerticalAlign, string>([
  ['top', $localize`:@@vertical_align_top:Top`],
  ['middle', $localize`:@@vertical_align_middle:Middle`],
  ['bottom', $localize`:@@vertical_align_bottom:Bottom`],
]);

@Directive({
  host: {
    '[style]': 'bodyStyles()',
    '[style.width]': 'width()',
    '(click)': '$event.stopPropagation()',
  },
})
export abstract class AIPStructure extends WithSettings {
  readonly index = input.required<number>();
  readonly currentEmail = injectIIPEmail();
  readonly currentStructure = computed(
    () => this.currentEmail.value().structures[this.index()]
  );
  // All blocks
  readonly blocks = viewChildren(IPEmailBuilderDynamicDirective);
  // Column to edit
  editColumnIndex = 0;
  // Allow change detection to run last time in case no more inside editing blocks
  #hasLastEditedBlock = false;
  #middlewareService = inject(AIPEmailBuilderMiddlewareService);
  #cdkDrag = inject(CdkDrag);

  // Attach child handle to host drag
  @ViewChildren(CdkDragHandle)
  set dragHandle(handles: QueryList<CdkDragHandle>) {
    this.#cdkDrag.data = this.currentStructure();
    this.#cdkDrag._addHandle(handles.first);
  }

  readonly bodyStyles = computed(() => {
    const { padding, background, border, margin, columnsWidth } =
      this.currentStructure().options;
    return {
      display: 'grid',
      ...createPadding(padding),
      ...(background.url ? { backgroundImage: `url(${background.url})` } : {}),
      backgroundRepeat: background.repeat,
      backgroundColor: background.color,
      backgroundSize: createWidthHeight(background.size),
      backgroundPosition: 'top center',
      ...createBorder(border),
      ...createMargin(margin),
      maxWidth: '100%',
      gridTemplateColumns: columnsWidth.map((fr) => `${fr}fr`).join(' '),
      // gap: gaps.map(gap => `${gap}px`).join(" ")
    };
  });

  readonly width = computed(() =>
    this.currentStructure().options.fullWidth
      ? '100%'
      : createWidthHeight(this.currentEmail.value().general.width)
  );
  readonly columnsSize = computed(() =>
    this.currentStructure().options.columns.map((_, index) => index)
  );
  readonly verticalOptions = [...verticalLabels.keys()].map((value) => ({
    value,
    label: verticalLabels.get(value),
  }));

  // @HostBinding("style.width")
  // get width(): string {
  //   return this.value.options.fullWidth ? "100%" : createWidthHeight(this.bodyWidth());
  // }

  // get columnsSize(): number[] {
  //   return this.value.options.columns.map((_, index) => index);
  // }

  // get verticalLabels(): TVerticalAlign[] {
  //   return [...this.#verticalLabels.keys()];
  // }

  // getVerticalAlignLabel(key: TVerticalAlign): string {
  //   return verticalLabels.get(key) as string;
  // }

  // @HostListener("click", ["$event"]) onClick(ev: Event) {
  //   ev.stopPropagation();
  // }

  duplicateSelf(): void {
    this.currentEmail.structures.duplicate(this.index());
  }

  async removeSelf(): Promise<void> {
    const isYes = await this.#middlewareService.delete(this.currentStructure());
    if (isYes) {
      this.currentEmail.structures.remove(this.index());
      this.detachSettingsPortal();
    }
  }

  duplicateBlock(
    $event: MouseEvent,
    block: AIPEmailBuilderBlock,
    column: AIPEmailBuilderBlockExtendedOptions[]
  ): void {
    $event.preventDefault();
    $event.stopPropagation();
    const indexOf = column.indexOf(block);
    column.splice(indexOf, 0, cloneDeep(block.toObject()));
  }

  async removeBlock(
    $event: MouseEvent,
    block: AIPEmailBuilderBlock,
    column: AIPEmailBuilderBlockExtendedOptions[]
  ): Promise<void> {
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

  override markForCheck(): boolean {
    const mustCheckNow = this.blocks()?.some(
      ({ context }) => context.$implicit.isCurrentlyEditing
    );
    if (mustCheckNow || this.#hasLastEditedBlock) {
      this.#hasLastEditedBlock = mustCheckNow;
      return true;
    }
    return false;
  }
}
