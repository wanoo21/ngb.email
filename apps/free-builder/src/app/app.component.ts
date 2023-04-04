import { RouterModule } from "@angular/router";
import { Component, inject } from "@angular/core";
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { NgIf } from "@angular/common";
import { Dialog, DialogModule } from "@angular/cdk/dialog";
import { BuilderComponent } from "./pages/builder/builder.component";

@Component({
  standalone: true,
  imports: [RouterModule, TailwindEmailBuilderModule, CdkStepperModule, NgIf, DialogModule, BuilderComponent],
  selector: "ngb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  readonly dialog = inject(Dialog);

  start() {
    this.dialog.open(BuilderComponent, {
      width: "90vw",
      height: "90vh",
      hasBackdrop: true,
      disableClose: true,
      autoFocus: true,
      restoreFocus: true,
      panelClass: ["shadow-lg", "rounded-lg", 'overflow-hidden']
    });
  }
}
