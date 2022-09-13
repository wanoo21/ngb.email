import { Component, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from "@angular/core";
import { Overlay, OverlayPositionBuilder, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  template: `
    <div class="bg-gray-900/75 text-white rounded py-1 px-2 text-xs shadow-sm">{{title}}</div>`
})
export class TooltipComponent {
  @Input() title = "";
}

@Directive({
  selector: "[tailTooltip]"
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input() tailTooltip!: string;
  private overlayRef!: OverlayRef;

  constructor(
    readonly overlayPositionBuilder: OverlayPositionBuilder,
    readonly overlay: Overlay,
    readonly elementRef: ElementRef
  ) {
  }

  @HostListener("mouseenter")
  show() {
    const tooltipCmp = new ComponentPortal(TooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipCmp);
    tooltipRef.instance.title = this.tailTooltip;
  }

  @HostListener("mouseout")
  hide() {
    this.overlayRef.detach();
  }

  ngOnDestroy() {
    this.hide();
  }

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef.nativeElement)
      .withPositions([{
        originX: "center",
        originY: "top",
        overlayX: "center",
        overlayY: "bottom",
        offsetY: -2
      }]);

    // Connect position strategy
    this.overlayRef = this.overlay.create({ positionStrategy });
  }
}
