import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DemoComponent } from "./demo/demo.component";

const routes: Routes = [
  {
    path: "",
    component: DemoComponent,
    children: [
      {
        path: "",
        loadComponent: () => import( "./builders/primeng-email-builder/primeng-builder.component" ).then(({ PrimengBuilderComponent }) => PrimengBuilderComponent)
      },
      {
        path: "tail",
        loadComponent: () => import( "./builders/tailwind-email-builder/tailwind-email-builder.component" ).then(({ TailwindEmailBuilderComponent }) => TailwindEmailBuilderComponent)
      },
      {
        path: "material",
        loadComponent: () => import( "./builders/material-email-builder/material-email-builder.component" ).then(({ MaterialEmailBuilderComponent }) => MaterialEmailBuilderComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
