import { Component, Directive, HostListener, Input, OnInit } from "@angular/core";
import { AbsDirective } from "@ngcomma/ngx-abstract";
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
  selector: "[ipTooltip]"
})
export class TooltipDirective extends AbsDirective implements OnInit {
  @Input() ipTooltip!: string;
  private overlayRef!: OverlayRef;

  constructor(readonly overlayPositionBuilder: OverlayPositionBuilder, readonly overlay: Overlay) {
    super();
  }

  @HostListener("mouseenter")
  show() {
    const tooltipCmp = new ComponentPortal(TooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipCmp);
    tooltipRef.instance.title = this.ipTooltip;
  }

  @HostListener("mouseout")
  hide() {
    this.overlayRef.detach()
  }

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.el)
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
