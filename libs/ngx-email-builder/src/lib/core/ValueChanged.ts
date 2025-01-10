import {
  Directive,
  DoCheck,
  inject,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
  output,
  OutputEmitterRef
} from "@angular/core";

export interface IIPValueChanged<T> {
  value: T;
  valueChange: OutputEmitterRef<T>;
}

@Directive()
export abstract class AIPValueChanged<T extends Record<string, any> | string | number | undefined> implements IIPValueChanged<T>, DoCheck, OnInit {
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() value!: T;
  readonly valueChange = output<T>();
  readonly differs = inject(KeyValueDiffers);
  #valueDiffer!: KeyValueDiffer<keyof T, any>;

  get #toWatch(): Record<string, any> {
    return typeof this.value !== "object" ? { toWatch: this.value } : this.value;
  }

  ngDoCheck(): void {
    const changes = this.#valueDiffer.diff(this.#toWatch);
    if (changes) {
      this.valueChange.emit(this.value);
    }
  }

  ngOnInit(): void {
    this.#valueDiffer = this.differs.find(this.#toWatch).create();
  }
}
