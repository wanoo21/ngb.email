import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { NavigationBlock } from "@wlocalhost/ngx-email-builder";

export const TEXT_DECORATION = [
  {key: $localize`:@@none:None`, label: 'none'},
  {key: $localize`:@@underline:Underline`, label: 'underline'},
  {key: $localize`:@@overline:Overline`, label: 'overline'}
]

@Component({
  selector: "tail-navigation-block",
  templateUrl: "./navigation-block.component.html",
  styleUrls: ["./navigation-block.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationBlockComponent extends NavigationBlock {
  textDecoration = TEXT_DECORATION;
}

