import { Directive, EventEmitter, Input, Output } from "@angular/core";

export interface IIPValueChanged<T> {
  value: T;
  valueChange: EventEmitter<T>;
}

@Directive()
export abstract class AIPValueChanged<T extends Record<string, any>> implements IIPValueChanged<T> {
  @Input() value!: T;
  @Output() valueChange = new EventEmitter<T>();
  // readonly differs = inject(KeyValueDiffers);
  // #valueDiffer!: KeyValueDiffer<keyof T, any>;
  //
  // #debounce = debounce(() => {
  //   const changes = this.#valueDiffer.diff(this.value);
  //   if (changes) {
  //     this.valueChange.next(this.value);
  //   }
  // }, 500);

  // ngDoCheck(): void {
  //   this.#debounce();
  // }
  //
  // ngOnInit(): void {
  //   this.#valueDiffer = this.differs.find(this.value).create();
  // }
}
