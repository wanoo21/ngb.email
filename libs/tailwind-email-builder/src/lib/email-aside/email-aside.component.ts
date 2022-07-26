import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewChild } from "@angular/core";
import { AIPEmailBuilderAside } from "@wlocalhost/ngx-email-builder";
import { CdkStepper } from "@angular/cdk/stepper";
import { tap } from "rxjs";

@Component({
  selector: "tail-email-aside",
  templateUrl: "./email-aside.component.html",
  styleUrls: ["./email-aside.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailAsideComponent extends AIPEmailBuilderAside implements OnInit {
  @ViewChild(CdkStepper, { static: true })
  readonly stepper!: CdkStepper;
  currentSettings$ = this.builderUiService.currentSettingsPortal$.pipe(
    // skip(1),
    tap(() => this.stepper.selectedIndex = 2)
  );

  @HostBinding("class.relative") isReadonly(): boolean {
    return this.readonly;
  }
}
