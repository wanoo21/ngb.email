import { Component, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from "@angular/core";
import { Overlay, OverlayPositionBuilder, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  template: `
    <div class="has-background-grey-dark has-opacity-75 has-text-white is-rounded py-1 px-2 is-size-7 has-shadow">{{title}}</div>`
})
export class TooltipComponent {
  @Input() title = "";
}

@Directive({
  selector: "[bulmaTooltip]"
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input() bulmaTooltip!: string;
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
    tooltipRef.instance.title = this.bulmaTooltip;
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
