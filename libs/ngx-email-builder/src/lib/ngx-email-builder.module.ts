import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgxEditorModule } from "ngx-editor";

import { IPEmailBuilderDynamicDirective } from "./directives/email-builder-dynamic.directive";
import { IPEmailBuilderSettingsDirective } from "./directives/email-builder-settings.directive";
import { IPEmailBuilderStructuresDirective } from "./directives/email-builder-structures.directive";
import { IPEmailBuilderHistoryActionDirective } from "./directives/email-builder-history-action.directive";
import { IPEmailBuilderColumnDirective } from "./directives/email-builder-column.directive";
import { IPHistoryModelDirective } from "./directives/email-builder-history-model.directive";
import { SocialPathPipe } from "./pipes/social-path.pipe";
import { ToBodyBlockPipe } from "./pipes/to-body-block.pipe";
import { ToBodyStructurePipe } from "./pipes/to-body-structure.pipe";
import { ApplyMiddlewarePipe } from "./pipes/apply-middleware.pipe";
import { IpEmailBuilderInterceptor } from "./ip-email-builder.interceptor";
import { ToHistoryOptionsPipe } from "./pipes/to-watch-options.pipe";
import { IpPreviewLinkPipe } from "./pipes/preview-link.pipe";
import { IpCanPipe } from "./pipes/can.pipe";
import { IIPEmailBuilderConfig } from "./public-tokens";
import { withConfig } from "./tools/core";
import { ColumnStylesPipe } from "./pipes/column-styles.pipe";
import { IPEmailBuilderHistoryHostDirective } from "./directives/email-builder-history-host.directive";
import { TemplateThumbPathPipe } from "./pipes/template-thumb-path.pipe";
import {
  IPEmailBuilderTextEditorDirective,
  IPEmailBuilderTextEditorMenuDirective
} from "./directives/email-builder-text-editor.directive";

// https://github.com/jscutlery/semver

@NgModule({
  declarations: [
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    IPEmailBuilderStructuresDirective,
    IPEmailBuilderTextEditorDirective,
    IPEmailBuilderTextEditorMenuDirective,
    IPEmailBuilderHistoryHostDirective,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    ToHistoryOptionsPipe,
    IPEmailBuilderHistoryActionDirective,
    IpPreviewLinkPipe,
    IpCanPipe,
    IPEmailBuilderColumnDirective,
    ColumnStylesPipe,
    IPHistoryModelDirective
  ],
  imports: [
    CommonModule,
    PortalModule,
    FormsModule,
    HttpClientModule,
    TemplateThumbPathPipe,
    NgxEditorModule
  ],
  exports: [
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
    IPEmailBuilderStructuresDirective,
    IPEmailBuilderTextEditorDirective,
    IPEmailBuilderTextEditorMenuDirective,
    IPEmailBuilderHistoryHostDirective,
    PortalModule,
    FormsModule,
    SocialPathPipe,
    ToBodyBlockPipe,
    ToBodyStructurePipe,
    ApplyMiddlewarePipe,
    HttpClientModule,
    ToHistoryOptionsPipe,
    IPEmailBuilderHistoryActionDirective,
    IpPreviewLinkPipe,
    IpCanPipe,
    IPEmailBuilderColumnDirective,
    ColumnStylesPipe,
    IPHistoryModelDirective,
    TemplateThumbPathPipe,
    NgxEditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IpEmailBuilderInterceptor,
      multi: true
    }
  ]
})
export class NgxEmailBuilderModule {
  static forRoot(
    config?: Partial<IIPEmailBuilderConfig>
  ): ModuleWithProviders<NgxEmailBuilderModule> {
    return {
      ngModule: NgxEmailBuilderModule,
      providers: [
        ...withConfig(config)
      ]
    };
  }
}
