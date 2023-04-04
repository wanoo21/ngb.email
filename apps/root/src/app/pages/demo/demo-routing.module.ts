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
        loadChildren: () => import("tailwind-demo-app/Module").then(m => m.RemoteEntryModule)
      },
      {
        path: "material",
        loadComponent: () => import( "./builders/material-email-builder/material-email-builder.component" ).then(({ MaterialEmailBuilderComponent }) => MaterialEmailBuilderComponent)
      },
      {
        path: "bootstrap",
        loadComponent: () => import( "./builders/bootstrap-email-builder/bootstrap-email-builder.component" ).then(({ BootstrapEmailBuilderComponent }) => BootstrapEmailBuilderComponent)
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
