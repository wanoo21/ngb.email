import { Directive, EventEmitter, inject, Input, KeyValueDiffer, KeyValueDiffers, Output } from "@angular/core";
import { AbsComponent } from "@ngcomma/ngx-abstract";

export interface IIPValueChanged<T> {
  value: T;
  valueChange: EventEmitter<T>;
}

@Directive()
export abstract class AIPValueChanged<T extends Record<string, any>> extends AbsComponent implements IIPValueChanged<T> {
  @Input() value!: T;
  @Output() valueChange = new EventEmitter<T>();
  readonly differs = inject(KeyValueDiffers);
  #valueDiffer!: KeyValueDiffer<keyof T, any>;

  ngDoCheck(): void {
    const changes = this.#valueDiffer.diff(this.value);
    if (changes) {
      changes.forEachChangedItem(({ key, currentValue }) => {
        console.log({ key, currentValue });
      });
      this.valueChange.next(this.value);
      // this.changeDetectorRef.markForCheck();
    }
  }

  ngOnInit(): void {
    // console.log("init", this.value);
    this.#valueDiffer = this.differs.find(this.value).create();
  }
}
