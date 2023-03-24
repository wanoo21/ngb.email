import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacyListModule as MatListModule } from "@angular/material/legacy-list";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyChipsModule as MatChipsModule } from "@angular/material/legacy-chips";
import { MatLegacyTooltipModule as MatTooltipModule } from "@angular/material/legacy-tooltip";
import { MatLegacySnackBarModule as MatSnackBarModule } from "@angular/material/legacy-snack-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SanitizePipe } from "../pipes/sanitize.pipe";
import { RouterLinkActive, RouterLink } from "@angular/router";
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
