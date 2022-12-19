import { inject, Pipe, PipeTransform } from "@angular/core";
import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../private-tokens";

@Pipe({
  name: "templateThumbPath",
  standalone: true
})
export class TemplateThumbPathPipe implements PipeTransform {
  readonly config = inject<IPEmailBuilderConfig>(IP_EMAIL_BUILDER_CONFIG);

  transform(template: string, type = "jpg"): string {
    return `${this.config.templatesThumbsPath}/${template}.${type}`;
  }
}
