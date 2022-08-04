import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";
import { RouterModule } from "@angular/router";

import { TailwindEmailBuilderComponent } from "./tailwind-email-builder/tailwind-email-builder.component";

@NgModule({
  declarations: [TailwindEmailBuilderComponent],
  imports: [
    CommonModule, TailwindEmailBuilderModule,
    RouterModule.forChild([{ path: "", component: TailwindEmailBuilderComponent }
    ])
  ]
})
export class TailEmailBuilderModule {
}
