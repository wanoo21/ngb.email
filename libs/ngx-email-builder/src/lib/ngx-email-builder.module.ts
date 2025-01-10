import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { IpEmailBuilderInterceptor } from "./ip-email-builder.interceptor";
import { IIPEmailBuilderConfig } from "./public-tokens";
import { withConfig } from "./tools/core";

// https://github.com/jscutlery/semver

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    PortalModule,
    FormsModule,
    HttpClientModule
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
