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

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxEmailBuilderModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "",
        loadChildren: () => import("./primeng-builder/primeng-builder.module").then(m => m.PrimengBuilderModule),
        pathMatch: "full"
      },
      {
        path: "tail",
        loadChildren: () => import("./tailwind-email-builder/tail-email-builder.module").then(m => m.TailEmailBuilderModule)
      }
    ], { initialNavigation: "enabledBlocking" }),
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
