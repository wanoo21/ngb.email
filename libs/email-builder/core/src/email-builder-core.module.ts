import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";
import { FormsModule } from "@angular/forms";

import { IPEmailBuilderBlockDataPipe } from "./pipes/ipemail-builder-block-data.pipe";
import { IPEmailBuilderDynamicDirective } from "./directives/email-builder-dynamic.directive";
import { IPEmailBuilderSettingsDirective } from "./directives/ipemail-builder-settings.directive";
import { SocialPathPipe } from './pipes/social-path.pipe';
import { ToBodyBlockPipe } from './pipes/to-body-block.pipe';
import { ToBodyStructurePipe } from './pipes/to-body-structure.pipe';

@NgModule({
  declarations: [
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe
  ],
  imports: [CommonModule, PortalModule, FormsModule],
  exports: [
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    PortalModule,
    FormsModule,
    IPEmailBuilderSettingsDirective,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe
  ],
  providers: []
})
export class IPEmailBuilderCoreModule {
}
