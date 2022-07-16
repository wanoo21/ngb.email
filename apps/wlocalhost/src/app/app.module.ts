import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";
import { RouterModule } from "@angular/router";
import { addNewIPEmailBuilderBlock } from "@wlocalhost/ngx-email-builder";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PortalModule } from "@angular/cdk/portal";
import { NgxAbstractModule } from "@ngcomma/ngx-abstract";

import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { MyHTMLBlockComponent } from "./my-htmlblock/my-htmlblock.component";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MyHTMLBlockComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PortalModule,
    RouterModule.forRoot([], { initialNavigation: "enabledBlocking" }),
    TailwindEmailBuilderModule.forRoot(),
    NgxAbstractModule.withConfig({
      page: {
        prefix: "{title} | Wlocalhost"
      }
    })
  ],
  providers: [
    ...addNewIPEmailBuilderBlock(MyHTMLBlockComponent, "html", $localize`:@@block:HTML`)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
