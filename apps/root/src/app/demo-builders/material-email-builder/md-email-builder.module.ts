import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialEmailBuilderModule } from "@wlocalhost/ngx-md-email-builder";

import { MaterialEmailBuilderRoutingModule } from "./material-email-builder-routing.module";
import { MaterialEmailBuilderComponent } from "./material-email-builder/material-email-builder.component";

@NgModule({
  declarations: [MaterialEmailBuilderComponent],
  imports: [CommonModule, MaterialEmailBuilderRoutingModule, MaterialEmailBuilderModule]
})
export class MdEmailBuilderModule {
}
