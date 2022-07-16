import { Directive, Input } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import { IWidthHeight, TUnits } from "../interfaces";

@Directive()
export abstract class AIPWidthHeight extends AIPValueChanged<any> {
  @Input() override value!: IWidthHeight | Omit<IWidthHeight, "auto">;
  readonly #unitsLabels: Map<TUnits, string> = new Map([
    ["%", $localize`:@@unit:Percent`],
    ["px", $localize`:@@unit:Pixels`],
    ["contain", $localize`:@@unit:Contain`],
    ["cover", $localize`:@@unit:Cover`]
  ]);

  #defaultUnits: TUnits[] = ["%", "px"];

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

  getUnitLabel(unit: TUnits): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#unitsLabels.get(unit)!;
  }

  toggleAuto(): void {
    (this.value as IWidthHeight).auto = !this.isAuto;
  }

}
