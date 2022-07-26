import { Directive, EventEmitter, HostListener, inject, Input, Output } from "@angular/core";
import { AbsComponent } from "@ngcomma/ngx-abstract";
import { BehaviorSubject } from "rxjs";

import { AIPEmailBuilderHistoryService, AIPEmailBuilderMiddlewareService } from "./services";
import { IPEmail } from "./body/body";

@Directive()
export abstract class AIPEmailBuilderComponent extends AbsComponent {
  @Input() value = new IPEmail([], { direction: this.direction.value });
  @Output() valueChange = new EventEmitter();
  readonly historyService = inject(AIPEmailBuilderHistoryService);
  // readonly restService = inject(AIPEmailBuilderRestService);
  readonly middlewareService = inject(AIPEmailBuilderMiddlewareService);
  readonly screen = new BehaviorSubject<"preview" | null>(null);

  // convert(): void {
  //   if (!this.value.structures.length) {
  //     this.middlewareService.alert($localize`:@@convert_empty_body:Add some structures before save.`);
  //   } else {
  //     this.restService.convert(this.value).subscribe();
  //   }
  // }

  preview(): void {
    if (!this.value.structures.length) {
      this.middlewareService.alert($localize`:@@convert_empty_body:Add some structures before preview.`);
    } else {
      this.screen.next("preview");
    }
  }

  @HostListener("window:beforeunload", ["$event"])
  canDeactivate($event?: Event): Promise<boolean> | boolean {
    if (this.historyService.hasChanges && !$event) {
      return this.middlewareService.confirm($localize`:@@prevent_unload_message:There are unsaved changes, are you sure you want to leave the page?`);
    } else if (this.historyService.hasChanges && $event) {
      $event.preventDefault();
      return false;
    }
    return true;
  }
}
