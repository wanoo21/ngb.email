import { inject, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { AIPEmailBuilderRestService, NgxEmailBuilderModule } from "@wlocalhost/ngx-email-builder";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxEmailBuilderModule.forRoot({
      xApiKey: "VXm3apHyRp3Tgmq1Z0Fj36tgaWcfMsO550aoKley"
    }),
    RouterModule.forRoot(
      [
        {
          path: "",
          loadComponent: () => import("./pages/index/index.component").then(({ IndexComponent }) => IndexComponent),
          children: [
            {
              path: "",
              loadComponent: () => import("./pages/index/v14-info/v14-info.component").then((c) => c.V14InfoComponent)
            },
            {
              path: "v9",
              loadComponent: () => import("./pages/index/v9-info/v9-info.component").then((c) => c.V9InfoComponent)
            }
          ]
        },
        {
          path: "demo",
          loadChildren: () => import("./pages/demo/demo.module").then(({ DemoModule }) => DemoModule)
        },
        {
          path: "converter",
          loadComponent: () => import("./pages/converter/converter.component").then(({ ConverterComponent }) => ConverterComponent)
        },
        {
          path: "documentation",
          loadComponent: () => import("./pages/docs/docs.component").then(({ DocsComponent }) => DocsComponent)
        },
        {
          path: "templates",
          loadComponent: () => import("./pages/templates/templates.component").then(({ TemplatesComponent }) => TemplatesComponent),
          resolve: {
            categories: () => {
              return inject(AIPEmailBuilderRestService).tmplCategories$();
            }
          }
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
