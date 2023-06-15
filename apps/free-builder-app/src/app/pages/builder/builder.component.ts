import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IpFormUIModule, TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { IPEmail } from "@wlocalhost/ngx-email-builder";

@Component({
  standalone: true,
  imports: [CommonModule, TailwindEmailBuilderModule, CdkStepperModule, IpFormUIModule],
  template: `
    <tail-email-builder [(value)]="email">
      <div class="top-actions">
        <button tailBtn (click)="export()">Export</button>
      </div>
    </tail-email-builder>`,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuilderComponent {
  email = new IPEmail();

  async export() {
    const myBlobFile = new Blob(
      [JSON.stringify(this.email)],
      { type: "text/json;charset=utf-8" }
    );
    const blobUrl = URL.createObjectURL(myBlobFile);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "email.json";
    link.click();
    URL.revokeObjectURL(blobUrl);
  }
}
