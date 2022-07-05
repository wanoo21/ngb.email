import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";
import { FormsModule } from "@angular/forms";

import { IPEmailBuilderBlockDataPipe } from "./pipes/ipemail-builder-block-data.pipe";
import { IPEmailBuilderDynamicDirective } from "./directives/email-builder-dynamic.directive";
import { IPEmailBuilderSettingsDirective } from "./directives/ipemail-builder-settings.directive";

@NgModule({
  declarations: [
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective
  ],
  imports: [CommonModule, PortalModule, FormsModule],
  exports: [
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    PortalModule,
    FormsModule,
    IPEmailBuilderSettingsDirective
  ],
  providers: []
})
export class IPEmailBuilderCoreModule {
}
