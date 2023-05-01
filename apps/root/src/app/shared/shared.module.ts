import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatChipsModule } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { SanitizePipe } from "../pipes/sanitize.pipe";
import { InnerPageComponent } from "../components/inner-page/inner-page.component";

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    SanitizePipe,
    RouterLink,
    RouterLinkActive,
    InnerPageComponent
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSidenavModule,
    SanitizePipe,
    RouterLink,
    RouterLinkActive,
    InnerPageComponent
  ]
})
export class SharedModule {
}
