import { Directive, EventEmitter, Input, Output } from "@angular/core";

export interface IIPValueChanged<T> {
  value: T;
  valueChange: EventEmitter<T>;
}

@Directive()
export abstract class AIPValueChanged<T extends Record<string, any> | string | number | undefined> implements IIPValueChanged<T> {
  @Input() value!: T;
  @Output() valueChange = new EventEmitter<T>();
  // readonly differs = inject(KeyValueDiffers);
  // #valueDiffer!: KeyValueDiffer<keyof T, any>;
  // #debounce = debounce(() => {
  //   const changes = this.#valueDiffer.diff(this.#toWatch);
  //   if (changes) {
  //     changes.forEachChangedItem(({ key, previousValue }) => {
  //       console.log(key, previousValue);
  //     });
  //     this.valueChange.next(this.value);
  //   }
  // }, 700);
  //
  // get #toWatch(): Record<string, any> {
  //   return typeof this.value !== "object" ? { toWatch: this.value } : this.value;
  // }

  // ngDoCheck(): void {
  //   // this.#debounce();
  // }
  //
  // ngOnInit(): void {
  //   // this.#valueDiffer = this.differs.find(this.#toWatch).create();
  // }
}
