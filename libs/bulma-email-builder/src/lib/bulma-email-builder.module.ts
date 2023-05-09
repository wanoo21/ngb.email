import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BulmaEmailBuilderComponent } from "./ip-email-builder/bulma-email-builder.component";
import { IIPEmailBuilderConfig, withConfig } from "@wlocalhost/ngx-email-builder";

@NgModule({
  imports: [CommonModule],
  declarations: [BulmaEmailBuilderComponent],
  exports: [BulmaEmailBuilderComponent]
})
export class BulmaEmailBuilderModule {
  static forRoot(
    config?: IIPEmailBuilderConfig
  ): ModuleWithProviders<BulmaEmailBuilderModule> {
    return {
      ngModule: BulmaEmailBuilderModule,
      providers: [...withConfig(config)]
    };
  }
}
