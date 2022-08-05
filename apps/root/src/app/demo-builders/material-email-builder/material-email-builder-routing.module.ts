import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MaterialEmailBuilderComponent } from "./material-email-builder/material-email-builder.component";

const routes: Routes = [
  {
    path: "",
    component: MaterialEmailBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialEmailBuilderRoutingModule {
}
