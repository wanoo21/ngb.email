import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";
import { FormsModule } from "@angular/forms";
import { NgxAbstractModule } from "@ngcomma/ngx-abstract";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { IPEmailBuilderBlockDataPipe } from "./pipes/ipemail-builder-block-data.pipe";
import { IPEmailBuilderDynamicDirective } from "./directives/email-builder-dynamic.directive";
import { IPEmailBuilderSettingsDirective } from "./directives/ipemail-builder-settings.directive";
import { SocialPathPipe } from "./pipes/social-path.pipe";
import { ToBodyBlockPipe } from "./pipes/to-body-block.pipe";
import { ToBodyStructurePipe } from "./pipes/to-body-structure.pipe";
import { ApplyMiddlewarePipe } from "./pipes/apply-middleware.pipe";
import { IpEmailBuilderStructureDirective } from "./directives/ip-email-builder-structure.directive";
import { IpEmailBuilderInterceptor } from "./ip-email-builder.interceptor";
import { ToWatchOptionsPipe } from './pipes/to-watch-options.pipe';
import { IPHistoryDirective } from './directives/history.directive';
import { IpPreviewLinkPipe } from './pipes/preview-link.pipe';
import { CanPipe } from './pipes/can.pipe';

@NgModule({
  declarations: [
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    IpEmailBuilderStructureDirective,
    ToWatchOptionsPipe,
    IPHistoryDirective,
    IpPreviewLinkPipe,
    CanPipe
  ],
  imports: [CommonModule, PortalModule, FormsModule, HttpClientModule],
  exports: [
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    PortalModule,
    FormsModule,
    IPEmailBuilderSettingsDirective,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    NgxAbstractModule,
    HttpClientModule,
    IpEmailBuilderStructureDirective,
    ToWatchOptionsPipe,
    IPHistoryDirective,
    IpPreviewLinkPipe,
    CanPipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IpEmailBuilderInterceptor, multi: true }
  ]
})
export class NgxEmailBuilderModule {
}
