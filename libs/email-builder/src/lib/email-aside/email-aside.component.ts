import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { AIPEmailBuilderAside } from "@wlocalhost/ngx-email-builder/core";
import { CdkStepper } from "@angular/cdk/stepper";
import { tap } from "rxjs";

@Component({
  selector: "ip-email-aside",
  templateUrl: "./email-aside.component.html",
  styleUrls: ["./email-aside.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailAsideComponent extends AIPEmailBuilderAside {
  @ViewChild(CdkStepper, { static: true })
  readonly stepper!: CdkStepper;

  currentSettings$ = this.builderUiService.currentSettingsPortal$.pipe(
    tap(() => this.stepper.selectedIndex = 2)
  );
}
