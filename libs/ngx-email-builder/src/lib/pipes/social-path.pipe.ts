import { inject, Pipe, PipeTransform } from "@angular/core";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../private-tokens";

/**
 * Return a full network path based on network name and {@link IPEmailBuilderConfig.socialIconsPath|socialIconsPath} configuration.
 */
@Pipe({
  name: "socialPath"
})
export class SocialPathPipe implements PipeTransform {
  readonly config = inject<IPEmailBuilderConfig>(IP_EMAIL_BUILDER_CONFIG);

  transform(network: string): string {
    return `${this.config.socialIconsPath}/${network}.png`;
  }
}
