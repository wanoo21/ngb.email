import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { NgxEmailBuilderModule } from "@wlocalhost/ngx-email-builder";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxEmailBuilderModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: "",
          loadComponent: () =>
            import("./pages/index/index.component").then(
              (c) => c.IndexComponent
            ),
          children: [
            {
              path: "",
              loadComponent: () =>
                import("./pages/index/v14-info/v14-info.component").then(
                  (c) => c.V14InfoComponent
                )
            },
            {
              path: "v9",
              loadComponent: () =>
                import("./pages/index/v9-info/v9-info.component").then(
                  (c) => c.V9InfoComponent
                )
            }
          ]
        },
        {
          path: "demo",
          loadChildren: () =>
            import("./pages/demo/demo.module").then((m) => m.DemoModule)
        }
      ],
      { initialNavigation: "enabledBlocking" }
    ),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
