import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

@Component({
  standalone: true,
  imports: [RouterModule, TailwindEmailBuilderModule],
  selector: "app-root",
  template: `
    <tail-email-builder />`,
})
export class AppComponent {
}
