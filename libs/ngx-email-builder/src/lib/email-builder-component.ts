import {
  Directive,
  DoCheck,
  EventEmitter,
  inject,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
  Output
} from "@angular/core";

import { AIPEmailBuilderRestService, AIPEmailBuilderService } from "./services";
import { IPEmail } from "./body/body";
import { AbsComponent } from "@ngcomma/ngx-abstract";

@Directive()
export abstract class AIPEmailBuilderComponent extends AbsComponent implements OnInit, DoCheck {
  @Input() value = new IPEmail([], { direction: this.direction.value });
  @Output() valueChange = new EventEmitter();
  readonly emailBuilderService = inject(AIPEmailBuilderService);
  readonly restService = inject(AIPEmailBuilderRestService);
  #differs = inject(KeyValueDiffers);

  #valueDiffer!: KeyValueDiffer<string, any>;
  #backgroundDiffer!: KeyValueDiffer<string, any>;

  convert(): void {
    console.log(this.value);
    this.restService.convert(this.value).subscribe();
  }

  ngOnInit() {
    this.#valueDiffer = this.#differs.find(this.value.general).create();
    this.#backgroundDiffer = this.#differs.find(this.value.general.background).create();
  }

  ngDoCheck(): void {
    const changes = this.#valueDiffer.diff(this.value.general);
    const backgroundDifferChanges = this.#backgroundDiffer.diff(this.value.general.background);
    [changes, backgroundDifferChanges].forEach(change => {
      change?.forEachChangedItem(item => {
        console.log(item);
      });
    });
  }
}
