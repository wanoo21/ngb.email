import { Directive, EventEmitter, Input, Output } from "@angular/core";

import { IIPValueChanged } from "../core/ValueChanged";
import { TAlign, TVerticalAlign } from "../interfaces";

@Directive()
export abstract class AIPAlign implements IIPValueChanged<TAlign | TVerticalAlign> {
  @Input() mode: "vertical" | "horizontal" = "horizontal";
  @Output() valueChange = new EventEmitter();
  @Input() disabled = false;
  #horizontalLabels = new Map<TAlign, string>([
    ["left", $localize`:@@horizontal_align:Left`],
    ["center", $localize`:@@horizontal_align:Center`],
    ["right", $localize`:@@horizontal_align:Right`]
  ]);
  #verticalLabels = new Map<TVerticalAlign, string>([
    ["top", $localize`:@@vertical_align:Top`],
    ["middle", $localize`:@@vertical_align:Middle`],
    ["bottom", $localize`:@@vertical_align:Bottom`]
  ]);
  private _model!: TAlign | TVerticalAlign;

  get value(): TAlign | TVerticalAlign {
    return this._model;
  }

  @Input()
  set value(value: TAlign | TVerticalAlign) {
    this._model = value;
    this.valueChange.next(value);
  }

  get horizontalLabels(): TAlign[] {
    return [...this.#horizontalLabels.keys()];
  }

  get verticalLabels(): TVerticalAlign[] {
    return [...this.#verticalLabels.keys()];
  }

  get verticalOptions() {
    return this.verticalLabels.map(label => ({ value: label, label: this.getVerticalAlignLabel(label) }));
  }

  get horizontalOptions() {
    return this.horizontalLabels.map(label => ({ value: label, label: this.getHorizontalAlignLabel(label) }));
  }

  getHorizontalAlignLabel(key: TAlign): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#horizontalLabels.get(key)!;
  }

  getVerticalAlignLabel(key: TVerticalAlign): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#verticalLabels.get(key)!;
  }
}
