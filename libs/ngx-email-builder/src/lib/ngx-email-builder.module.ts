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

@NgModule({
  declarations: [
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    IpEmailBuilderStructureDirective
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
    IpEmailBuilderStructureDirective
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IpEmailBuilderInterceptor, multi: true }
  ]
})
export class NgxEmailBuilderModule {
}
