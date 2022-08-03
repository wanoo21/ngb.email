import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PrimengEmailBuilderModule } from "@wlocalhost/ngx-primeng-email-builder";

import { PrimengBuilderComponent } from "./primeng-builder/primeng-builder.component";

@NgModule({
  declarations: [PrimengBuilderComponent],
  imports: [
    CommonModule,
    PrimengEmailBuilderModule,
    RouterModule.forChild([
      {
        path: "",
        component: PrimengBuilderComponent,
        title: "DnD PrimeNG Email Builder"
      }
    ])
  ]
})
export class PrimengBuilderModule {
}
