import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { TAlign, TVerticalAlign } from "@wlocalhost/ngx-email-builder/core";

@Directive()
export abstract class AIPAlign {
  @Input() mode: "vertical" | "horizontal" = "horizontal";
  @Output() modelChange = new EventEmitter();
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

  get model(): TAlign | TVerticalAlign {
    return this._model;
  }

  @Input()
  set model(value: TAlign | TVerticalAlign) {
    this._model = value;
    this.modelChange.next(value);
  }

  get horizontalLabels(): TAlign[] {
    return [...this.#horizontalLabels.keys()];
  }

  get verticalLabels(): TVerticalAlign[] {
    return [...this.#verticalLabels.keys()];
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
