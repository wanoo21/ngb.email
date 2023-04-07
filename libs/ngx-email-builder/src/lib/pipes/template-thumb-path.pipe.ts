import { inject, Pipe, PipeTransform } from "@angular/core";
import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../private-tokens";

/**
 * Return the path of the thumbnail image for a given email template.
 */
@Pipe({
  name: "templateThumbPath",
  standalone: true
})
export class TemplateThumbPathPipe implements PipeTransform {
  readonly config = inject<IPEmailBuilderConfig>(IP_EMAIL_BUILDER_CONFIG);

  /**
   * @param template - The name of the email template
   * @param type - The file type of the thumbnail image (default is "jpg")
   * @returns The path of the thumbnail image for the given email template
   *
   * @example
   * ```
   * <img [src]="template | templateThumbPath:'png'" alt="Template Thumbnail">
   * ```
   */
  transform(template: string, type = "jpg"): string {
    return `${this.config.templatesThumbsPath}/${template}.${type}`;
  }
}

