import {
  Component,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  template: ` <div
    class="bg-gray-900/75 text-white rounded py-1 px-2 text-xs shadow-sm"
  >
    {{ title() }}
  </div>`,
})
export class TooltipComponent {
  readonly title = input.required<string>();
}

@Directive({
  selector: '[tailTooltip]',
  host: {
    '(mouseenter)': 'show()',
    '(mouseout)': 'hide()',
  },
})
export class TooltipDirective implements OnInit, OnDestroy {
  readonly overlayPositionBuilder = inject(OverlayPositionBuilder);
  readonly overlay = inject(Overlay);
  readonly elementRef = inject(ElementRef);

  readonly tailTooltip = input.required<string>();
  private overlayRef!: OverlayRef;

  show() {
    const tooltipCmp = new ComponentPortal(TooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipCmp);
    tooltipRef.setInput('title', this.tailTooltip());
  }

  hide() {
    this.overlayRef.detach();
  }

  ngOnDestroy() {
    this.hide();
  }

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef.nativeElement)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -2,
        },
      ]);

    // Connect position strategy
    this.overlayRef = this.overlay.create({ positionStrategy });
  }
}
