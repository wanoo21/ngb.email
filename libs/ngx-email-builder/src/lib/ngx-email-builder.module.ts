import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApplyMiddlewarePipe } from "./pipes/apply-middleware.pipe";
import { ColumnStylesPipe } from "./pipes/column-styles.pipe";
import { IpCanPipe } from "./pipes/can.pipe";
import { ToHistoryOptionsPipe } from "./pipes/to-watch-options.pipe";
import { IPEmailBuilderHistoryHostDirective } from "./directives/email-builder-history-host.directive";
import { IPEmailBuilderSettingsDirective } from "./directives/email-builder-settings.directive";
import { ToBodyStructurePipe } from "./pipes/to-body-structure.pipe";
import { ToBodyBlockPipe } from "./pipes/to-body-block.pipe";
import { IPEmailBuilderColumnDirective } from "./directives/email-builder-column.directive";
import { IPEmailBuilderDynamicDirective } from "./directives/email-builder-dynamic.directive";
import { IPEmailBuilderStructuresDirective } from "./directives/email-builder-structures.directive";
import { SocialPathPipe } from "./pipes/social-path.pipe";
import { IpPreviewLinkPipe } from "./pipes/preview-link.pipe";

// https://github.com/jscutlery/semver

@NgModule({
  imports: [
    ApplyMiddlewarePipe,
    HttpClientModule,
    ColumnStylesPipe,
    IpCanPipe,
    ToHistoryOptionsPipe,
    IPEmailBuilderHistoryHostDirective,
    IPEmailBuilderSettingsDirective,
    ToBodyStructurePipe,
    ToBodyBlockPipe,
    IPEmailBuilderColumnDirective,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderStructuresDirective,
    SocialPathPipe,
    IpPreviewLinkPipe
  ],
  exports: [
    ApplyMiddlewarePipe,
    HttpClientModule,
    ColumnStylesPipe,
    IpCanPipe,
    ToHistoryOptionsPipe,
    IPEmailBuilderHistoryHostDirective,
    IPEmailBuilderSettingsDirective,
    ToBodyStructurePipe,
    ToBodyBlockPipe,
    IPEmailBuilderColumnDirective,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderStructuresDirective,
    SocialPathPipe,
    IpPreviewLinkPipe
  ]
})
export class NgxEmailBuilderModule {
}
