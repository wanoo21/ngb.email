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
import {
  createBorder,
  createMargin,
  createPadding,
  createWidthHeight,
} from '../../tools/utils';
import { SettingsNg } from '../settings/settings.ng';
import { injectIIPEmail } from '../../state';
import { IPEmailBuilderDynamicDirective } from '../block/block-drop.directive';
import { IPActionsService } from '../../actions/actions.service';

@Directive({
  host: {
    '[style]': 'bodyStyles()',
    '[style.width]': 'width()',
    '[class.empty]': 'blocks().length === 0',
  },
})
export abstract class AIPStructure extends SettingsNg {
  readonly index = input.required<number>();
  readonly currentEmail = injectIIPEmail();
  readonly currentStructure = computed(() =>
    this.currentEmail.structures.at(this.index())
  );
  // All blocks
  readonly blocks = viewChildren(IPEmailBuilderDynamicDirective);
  #middlewareService = inject(IPActionsService);
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
      gridTemplateColumns: columnsWidth
        .map((fr: number) => `${fr}fr`)
        .join(' '),
      // gap: gaps.map(gap => `${gap}px`).join(" ")
    };
  });

  readonly width = computed(() =>
    this.currentStructure().options.fullWidth
      ? '100%'
      : createWidthHeight(this.currentEmail.value().general.width)
  );

  duplicateMe(): void {
    this.currentEmail.structures.duplicate(this.index());
  }

  async removeMe(): Promise<void> {
    const isYes = await this.#middlewareService.delete(this.currentStructure());
    if (isYes) {
      this.currentEmail.structures.remove(this.index());
    }
  }
}
