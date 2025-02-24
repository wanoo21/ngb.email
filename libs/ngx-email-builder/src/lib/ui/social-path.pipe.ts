import { inject, Pipe, PipeTransform } from '@angular/core';
import { IP_EMAIL_BUILDER_CONFIG } from '../config/config';

/**
 * Returns a full network path based on the network name and configuration.
 *
 * @param network The name of the social network.
 * @returns The full network path.
 * @example
 * ```html
 * <img [src]="'facebook' | socialPath" alt="Facebook Icon">
 * ```
 */
@Pipe({
  name: 'socialPath',
})
export class SocialPathPipe implements PipeTransform {
  readonly config = inject(IP_EMAIL_BUILDER_CONFIG);

  transform(network: string): string {
    return `${this.config.socialIconsPath}/${network}.png`;
  }
}
