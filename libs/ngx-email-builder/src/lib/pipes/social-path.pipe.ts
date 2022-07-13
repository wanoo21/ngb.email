import { inject, Pipe, PipeTransform } from "@angular/core";

import { IP_EMAIL_BUILDER_CONFIG } from "../private-tokens";

@Pipe({
  name: "socialPath"
})
export class SocialPathPipe implements PipeTransform {
  readonly config = inject(IP_EMAIL_BUILDER_CONFIG);

  transform(network: string): string {
    return `${this.config.socialIconsPath}/${network}.png`;
  }
}
