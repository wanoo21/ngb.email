import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialEmailBuilderModule } from "@wlocalhost/ngx-md-email-builder";

import RemoteEntryComponent from "./entry.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialEmailBuilderModule, RemoteEntryComponent],
  providers: [],
  exports: [
    RemoteEntryComponent
  ]
})
export class RemoteEntryModule {
}
