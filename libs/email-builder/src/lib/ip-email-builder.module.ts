import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CdkMenuModule } from "@angular/cdk/menu";
import { IIPEmailBuilderConfig, IPEmailBuilderCoreModule, withConfig } from "@wlocalhost/ngx-email-builder/core";

import { IpEmailBuilderComponent } from "./ip-email-builder/ip-email-builder.component";
import { StructureComponent } from "./structure/structure.component";
import { EmailBodyComponent } from "./email-body/email-body.component";
import { EmailAsideComponent } from "./email-aside/email-aside.component";

@NgModule({
  imports: [CommonModule, IPEmailBuilderCoreModule, CdkMenuModule],
  declarations: [
    IpEmailBuilderComponent,
    StructureComponent,
    EmailBodyComponent,
    EmailAsideComponent
  ],
  exports: [IpEmailBuilderComponent, IPEmailBuilderCoreModule]
})
export class IPEmailBuilderModule {
  static forRoot(config?: IIPEmailBuilderConfig): ModuleWithProviders<IPEmailBuilderModule> {
    return {
      ngModule: IPEmailBuilderModule,
      providers: [...withConfig(config)]
    };
  }
}
