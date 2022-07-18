import { Directive, EventEmitter, inject, Input, Output } from "@angular/core";
import { AbsComponent } from "@ngcomma/ngx-abstract";

import { AIPEmailBuilderRestService, AIPEmailBuilderService } from "./services";
import { IPEmail } from "./body/body";

@Directive()
export abstract class AIPEmailBuilderComponent extends AbsComponent {
  @Input() value = new IPEmail([], { direction: this.direction.value });
  @Output() valueChange = new EventEmitter();
  readonly emailBuilderService = inject(AIPEmailBuilderService);
  readonly restService = inject(AIPEmailBuilderRestService);

  convert(): void {
    console.log(this.value);
    this.restService.convert(this.value).subscribe();
  }
}
