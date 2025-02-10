import { afterNextRender, Directive, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AIPEmailBuilderBlock } from './block.ng';
import { IP_EMAIL_BUILDER_BLOCKS, TIPEmailBuilderBlock, TIPInjectedBlock } from '../../config/blocks';

/**
 * Default context for dynamic block.
 */
class IPEmailBuilderDynamicDirectiveContext {
  // Newly created block.
  $implicit!: AIPEmailBuilderBlock<never>;
}

/**
 * Create and insert the block dynamically to the view.
 * It requires to have [cdkDrag] directive on host or current element.
 *
 * @exportAs instance
 */
@Directive({
  selector: '[ipColumnBlock]',
})
export class IPEmailBuilderDynamicDirective {
  readonly blocksData = inject(IP_EMAIL_BUILDER_BLOCKS);
  readonly viewContainerRef = inject(ViewContainerRef);
  readonly templateRef =
    inject<TemplateRef<IPEmailBuilderDynamicDirectiveContext>>(TemplateRef);
  readonly ipColumnBlockIndex = input.required<number>();
  readonly ipColumnBlock = input.required<TIPEmailBuilderBlock>();

  #afterRender = afterNextRender(() => {
    const foundBlock = this.blocksData.find(
      ({ type }) => this.ipColumnBlock().type === type
    );
    if (foundBlock) {
      this.#createComponent(foundBlock, this.ipColumnBlock());
    } else {
      throw TypeError(`No such block found: ${this.ipColumnBlock().type}`);
    }
  });

  /**
   * Guard function for template context. Returns true always.
   */
  static ngTemplateContextGuard(
    dir: IPEmailBuilderDynamicDirective,
    ctx: unknown
  ): ctx is IPEmailBuilderDynamicDirectiveContext {
    return true;
  }

  #createComponent(
    { component }: TIPInjectedBlock<never>,
    inputContext: TIPEmailBuilderBlock
  ) {
    this.viewContainerRef.clear();
    const viewContainerRef = this.viewContainerRef.createComponent(component);
    viewContainerRef.setInput('myIndex', this.ipColumnBlockIndex());
    for (const [key, value] of Object.entries(inputContext)) {
      // @ts-expect-error - We check for undefined values
      if (key !== 'component' && viewContainerRef.instance[key] !== undefined) {
        viewContainerRef.setInput(key, value);
      }
    }
    const context = new IPEmailBuilderDynamicDirectiveContext();
    context.$implicit = viewContainerRef.instance;
    this.viewContainerRef.createEmbeddedView(this.templateRef, context);
  }
}
