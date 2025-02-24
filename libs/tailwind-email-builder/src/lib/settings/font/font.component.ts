import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IFont, injectIPFonts } from '@wlocalhost/ngx-email-builder';
import { FormsModule } from '@angular/forms';

import { UIFormModule } from '../../directives/form/form-input.directive';
import { formViewProvider } from '../../directives/form-providers';

const stylesMap = new Map<IFont['style'], string>([
  ['normal', $localize`:@@font_style_normal:Normal`],
  ['italic', $localize`:@@font_style_italic:Italic`],
  ['oblique', $localize`:@@font_style_oblique:Oblique`],
]);

@Component({
  selector: 'tail-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UIFormModule, FormsModule],
  viewProviders: [formViewProvider()],
})
export class FontComponent {
  readonly fonts = injectIPFonts();
  readonly styleOptions = [...stylesMap.keys()].map((value) => ({
    value,
    label: stylesMap.get(value),
  }));
}
