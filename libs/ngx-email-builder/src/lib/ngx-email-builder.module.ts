import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";
import { FormsModule } from "@angular/forms";
import { NgxAbstractModule } from "@ngcomma/ngx-abstract";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import "@angular/localize/init";

import { IPEmailBuilderDynamicDirective } from "./directives/email-builder-dynamic.directive";
import { IPEmailBuilderSettingsDirective } from "./directives/ipemail-builder-settings.directive";
import { SocialPathPipe } from "./pipes/social-path.pipe";
import { ToBodyBlockPipe } from "./pipes/to-body-block.pipe";
import { ToBodyStructurePipe } from "./pipes/to-body-structure.pipe";
import { ApplyMiddlewarePipe } from "./pipes/apply-middleware.pipe";
import { IpEmailBuilderInterceptor } from "./ip-email-builder.interceptor";
import { ToWatchOptionsPipe } from "./pipes/to-watch-options.pipe";
import { IPHistoryDirective } from "./directives/history.directive";
import { IpPreviewLinkPipe } from "./pipes/preview-link.pipe";
import { IpCanPipe } from "./pipes/can.pipe";
import { IIPEmailBuilderConfig } from "./public-tokens";
import { withConfig } from "./tools/core";


// https://github.com/jscutlery/semver

@NgModule({
  declarations: [
    // IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    // IpEmailBuilderStructureDirective,
    ToWatchOptionsPipe,
    IPHistoryDirective,
    IpPreviewLinkPipe,
    IpCanPipe
  ],
  imports: [CommonModule, PortalModule, FormsModule, HttpClientModule],
  exports: [
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    PortalModule,
    FormsModule,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    NgxAbstractModule,
    HttpClientModule,
    ToWatchOptionsPipe,
    IPHistoryDirective,
    IpPreviewLinkPipe,
    IpCanPipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IpEmailBuilderInterceptor, multi: true }
  ]
})
export class NgxEmailBuilderModule {
  static forRoot(config?: IIPEmailBuilderConfig): ModuleWithProviders<NgxEmailBuilderModule> {
    return {
      ngModule: NgxEmailBuilderModule,
      providers: [...withConfig(config)]
    };
  }
}
