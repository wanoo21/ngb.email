import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { SanitizePipe } from "../pipes/sanitize.pipe";
import { InnerPageComponent } from "../components/inner-page/inner-page.component";

@NgModule({
  declarations: [],
  imports: [
    SanitizePipe,
    RouterLink,
    RouterLinkActive,
    InnerPageComponent
  ],
  exports: [
    CommonModule,
    SanitizePipe,
    RouterLink,
    RouterLinkActive,
    InnerPageComponent
  ]
})
export class SharedModule {
}
