import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimengEmailBuilderModule } from "@wlocalhost/ngx-primeng-email-builder";

import { RemoteEntryComponent } from "./entry.component";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, PrimengEmailBuilderModule],
  providers: [],
  exports: [RemoteEntryComponent]
})
export class RemoteEntryModule {
}
