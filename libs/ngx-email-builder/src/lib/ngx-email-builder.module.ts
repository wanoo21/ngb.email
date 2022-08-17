import { APP_INITIALIZER, ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";
import { FormsModule } from "@angular/forms";
import { NgxAbstractModule } from "@ngcomma/ngx-abstract";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import "@angular/localize/init";

import { IPEmailBuilderDynamicDirective } from "./directives/email-builder-dynamic.directive";
import { IPEmailBuilderSettingsDirective } from "./directives/email-builder-settings.directive";
import { IPEmailBuilderStructuresDirective } from "./directives/email-builder-structures.directive";
import { IPEmailBuilderHistoryDirective } from "./directives/email-builder-history.directive";
import { IPEmailBuilderColumnDirective } from "./directives/email-builder-column.directive";
import { SocialPathPipe } from "./pipes/social-path.pipe";
import { ToBodyBlockPipe } from "./pipes/to-body-block.pipe";
import { ToBodyStructurePipe } from "./pipes/to-body-structure.pipe";
import { ApplyMiddlewarePipe } from "./pipes/apply-middleware.pipe";
import { IpEmailBuilderInterceptor } from "./ip-email-builder.interceptor";
import { ToWatchOptionsPipe } from "./pipes/to-watch-options.pipe";
import { IpPreviewLinkPipe } from "./pipes/preview-link.pipe";
import { IpCanPipe } from "./pipes/can.pipe";
import { IIPEmailBuilderConfig } from "./public-tokens";
import { withConfig } from "./tools/core";
import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "./private-tokens";


// https://github.com/jscutlery/semver

@NgModule({
  declarations: [
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    IPEmailBuilderStructuresDirective,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    ToWatchOptionsPipe,
    IPEmailBuilderHistoryDirective,
    IpPreviewLinkPipe,
    IpCanPipe,
    IPEmailBuilderColumnDirective
  ],
  imports: [CommonModule, PortalModule, FormsModule, HttpClientModule],
  exports: [
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    IPEmailBuilderStructuresDirective,
    PortalModule,
    FormsModule,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    NgxAbstractModule,
    HttpClientModule,
    ToWatchOptionsPipe,
    IPEmailBuilderHistoryDirective,
    IpPreviewLinkPipe,
    IpCanPipe,
    IPEmailBuilderColumnDirective
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IpEmailBuilderInterceptor, multi: true }
  ]
})
export class NgxEmailBuilderModule {
  static forRoot(config?: IIPEmailBuilderConfig): ModuleWithProviders<NgxEmailBuilderModule> {
    return {
      ngModule: NgxEmailBuilderModule,
      providers: [
        {
          provide: APP_INITIALIZER, useFactory: (config: IPEmailBuilderConfig) => {
            return () => config.fetchLicense();
          }, deps: [IP_EMAIL_BUILDER_CONFIG], multi: true
        },
        ...withConfig(config)
      ]
    };
  }
}
