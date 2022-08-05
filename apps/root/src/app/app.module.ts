import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { NgxEmailBuilderModule } from "@wlocalhost/ngx-email-builder";

import { AppComponent } from "./app.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatChipsModule } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";

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
          loadChildren: () =>
            import(
              "./demo-builders/primeng-email-builder/primeng-builder.module"
              ).then((m) => m.PrimengBuilderModule),
          pathMatch: "full"
        },
        {
          path: "tail",
          loadChildren: () =>
            import(
              "./demo-builders/tailwind-email-builder/tail-email-builder.module"
              ).then((m) => m.TailEmailBuilderModule)
        },
        {
          path: "material",
          loadChildren: () =>
            import(
              "./demo-builders/material-email-builder/md-email-builder.module"
              ).then((m) => m.MdEmailBuilderModule)
        }
      ],
      { initialNavigation: "enabledBlocking" }
    ),
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
