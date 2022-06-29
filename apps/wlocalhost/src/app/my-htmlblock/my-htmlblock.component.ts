import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { AIPEmailBuilderBlock, IPadding } from "@wlocalhost/ngx-email-builder/core";

@Component({
  selector: "wlocalhost-my-htmlblock",
  template: `
    <p>my-htmlblock works! {{ innerText }}</p>
    <ng-container *ipEmailBuilderSettings>
      <input type="text" [(ngModel)]="innerText" placeholder="Change me" />
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyHTMLBlockComponent extends AIPEmailBuilderBlock<{
  padding: IPadding;
}> {
  innerText = "HTML";
  options = {
    padding: { top: 10 }
  };
}
