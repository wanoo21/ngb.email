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

export interface IIPValueChanged<T> {
  value: T;
  valueChange: EventEmitter<T>;
}

@Directive()
export abstract class AIPValueChanged<T extends Record<string, any> | string | number | undefined> implements IIPValueChanged<T>, DoCheck, OnInit {
  @Input() value!: T;
  @Output() valueChange = new EventEmitter<T>();
  readonly differs = inject(KeyValueDiffers);
  #valueDiffer!: KeyValueDiffer<keyof T, any>;

  get #toWatch(): Record<string, any> {
    return typeof this.value !== "object" ? { toWatch: this.value } : this.value;
  }

  ngDoCheck(): void {
    const changes = this.#valueDiffer.diff(this.#toWatch);
    if (changes) {
      this.valueChange.next(this.value);
    }
  }

  ngOnInit(): void {
    this.#valueDiffer = this.differs.find(this.#toWatch).create();
  }
}
