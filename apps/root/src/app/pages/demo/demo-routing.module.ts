import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loadRemoteModule } from "@nrwl/angular/mf";

import { DemoComponent } from "./demo/demo.component";

const routes: Routes = [
  {
    path: "",
    component: DemoComponent,
    children: [
      {
        path: "",
        loadComponent: () => loadRemoteModule("primeng-demo-app", "./Component")
      },
      {
        path: "tail",
        loadComponent: () => loadRemoteModule("tailwind-demo-app", "./Component")
      },
      {
        path: "material",
        loadComponent: () => loadRemoteModule("material-demo-app", "./Component")
      },
      {
        path: "bootstrap",
        loadComponent: () => loadRemoteModule("bootstrap-demo-app", "./Component")
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
