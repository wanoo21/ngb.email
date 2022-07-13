import { Directive, Input } from "@angular/core";
import { IWidthHeight, TUnits } from "@wlocalhost/ngx-email-builder";

@Directive()
export abstract class AIPWidthHeight {
  @Input() size!: IWidthHeight | Omit<IWidthHeight, "auto">;

  readonly #unitsLabels: Map<TUnits, string> = new Map([
    ["%", $localize`:@@unit:Percent`],
    ["px", $localize`:@@unit:Pixels`],
    ["contain", $localize`:@@unit:Contain`],
    ["cover", $localize`:@@unit:Cover`]
  ]);

  #defaultUnits: TUnits[] = ["%", "px"];

  get units(): TUnits[] {
    return this.size.units || this.#defaultUnits;
  }

  get disableValueField() {
    return this.isAuto || this.#defaultUnits.indexOf(this.size.unit) === -1;
  }

  get hasAuto(): boolean {
    // eslint-disable-next-line no-prototype-builtins
    return this.size.hasOwnProperty("auto");
  }

  get isAuto(): boolean {
    return this.hasAuto && (this.size as IWidthHeight).auto;
  }

  getUnitLabel(unit: TUnits): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#unitsLabels.get(unit)!;
  }

  toggleAuto(): void {
    (this.size as IWidthHeight).auto = !this.isAuto;
  }

}
