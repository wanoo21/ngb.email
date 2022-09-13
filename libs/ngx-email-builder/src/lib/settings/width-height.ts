import { Directive, Input } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import { IWidthHeight, TUnits } from "../interfaces";

@Directive()
export abstract class AIPWidthHeight extends AIPValueChanged<any> {
  @Input() override value!: IWidthHeight | Omit<IWidthHeight, "auto">;
  @Input() label = $localize`:@@width:Width`;
  readonly #unitsLabels: Map<TUnits, string> = new Map([
    ["%", $localize`:@@unit_percent:Percent`],
    ["px", $localize`:@@unit_pixels:Pixels`],
    ["contain", $localize`:@@unit_contain:Contain`],
    ["cover", $localize`:@@unit_cover:Cover`]
  ]);
  #defaultUnits: TUnits[] = ["%", "px"];

  get options() {
    return this.units.map(unit => ({ label: this.getUnitLabel(unit), value: unit }));
  }

  get units(): TUnits[] {
    return this.value.units || this.#defaultUnits;
  }

  get disableValueField() {
    return this.isAuto || this.#defaultUnits.indexOf(this.value.unit) === -1;
  }

  get hasAuto(): boolean {
    // eslint-disable-next-line no-prototype-builtins
    return this.value.hasOwnProperty("auto");
  }

  get isAuto(): boolean {
    return this.hasAuto && (this.value as IWidthHeight).auto;
  }

  get valueAsIWidthHeight(): IWidthHeight {
    return this.value as IWidthHeight;
  }

  getUnitLabel(unit: TUnits): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#unitsLabels.get(unit)!;
  }

  toggleAuto(): void {
    (this.value as IWidthHeight).auto = !this.isAuto;
  }

}
