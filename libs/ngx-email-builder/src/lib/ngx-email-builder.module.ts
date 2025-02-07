import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ColumnStylesPipe } from './pipes/column-styles.pipe';
import { IPEmailBuilderSettingsDirective } from './directives/email-builder-settings.directive';
import { IPEmailBuilderColumnDirective } from './directives/email-builder-column.directive';
import { IPEmailBuilderDynamicDirective } from './directives/email-builder-dynamic.directive';
import { IPEmailBuilderStructuresDirective } from './directives/email-builder-structures.directive';
import { SocialPathPipe } from './pipes/social-path.pipe';
import { IpPreviewLinkPipe } from './pipes/preview-link.pipe';

// https://github.com/jscutlery/semver

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
