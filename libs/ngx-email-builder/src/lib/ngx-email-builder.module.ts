import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ColumnStylesPipe, IpPreviewLinkPipe, SocialPathPipe } from './pipes';
import {
  IPEmailBuilderColumnDirective,
  IPEmailBuilderDynamicDirective,
  IPEmailBuilderSettingsDirective,
  IPEmailBuilderStructuresDirective,
} from './directives';

@NgModule({
  imports: [
    HttpClientModule,
    ColumnStylesPipe,
    IPEmailBuilderSettingsDirective,
    IPEmailBuilderColumnDirective,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderStructuresDirective,
    SocialPathPipe,
    IpPreviewLinkPipe,
  ],
  exports: [
    HttpClientModule,
    ColumnStylesPipe,
    IPEmailBuilderSettingsDirective,
    IPEmailBuilderColumnDirective,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderStructuresDirective,
    SocialPathPipe,
    IpPreviewLinkPipe,
  ],
})
export class NgxEmailBuilderModule {}
