import { AfterViewInit, Directive, inject, Input, OnInit, ViewContainerRef } from "@angular/core";
import { NgForOf } from "@angular/common";

import { IStructure } from "../structure/structure";

@Directive({
  selector: "[ipStructure]",
  exportAs: "structure"
})
export class IpEmailBuilderStructureDirective extends NgForOf<IStructure> implements OnInit, AfterViewInit {
  readonly #viewContainerRef = inject(ViewContainerRef);

  @Input()
  set ipStructureOf(structures: IStructure[]) {
    super.ngForOf = structures;
  }

  ngOnInit(): void {
    super.ngForTrackBy = (_, { id }) => id;
  }

  ngAfterViewInit(): void {
    const parentEl = this.#viewContainerRef.element.nativeElement.parentElement as HTMLElement;
  }
}
