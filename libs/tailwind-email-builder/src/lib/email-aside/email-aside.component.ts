import { ChangeDetectionStrategy, Component, OnInit, viewChild } from "@angular/core";
import { AIPEmailBuilderAside } from "@wlocalhost/ngx-email-builder";
import { CdkStepper } from "@angular/cdk/stepper";
import { tap } from "rxjs";

@Component({
  selector: "tail-email-aside",
  templateUrl: "./email-aside.component.html",
  styleUrls: ["./email-aside.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[class.relative]": "readonly()"
  },
  standalone: false
})
export class EmailAsideComponent extends AIPEmailBuilderAside implements OnInit {
  readonly stepper = viewChild.required(CdkStepper);
  currentSettings$ = this.activeSettings$.pipe(
    tap(() => this.stepper().selectedIndex = 2)
  );
}
