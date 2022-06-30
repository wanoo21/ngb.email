import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

import { IFont, ILineHeight, IPadding } from "../../interfaces";
import { AIPEmailBuilderBlock } from "../../core/block";

/**
 * Builder {@link TextBlockComponent} options interface.
 */
export interface ITextBlockOptions {
  color: string;
  font: IFont;
  lineHeight: ILineHeight;
  padding: IPadding;
}

@Component({
  selector: "ip-text-block",
  template: `
    <p>ipemail-builder-block {{ innerText }}!</p>
    <ng-container *ipEmailBuilderSettings>
      <input type="text" [(ngModel)]="innerText" placeholder="Change me" />
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      p, ol, ul, pre, blockquote, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBlockComponent extends AIPEmailBuilderBlock<ITextBlockOptions> {
  innerText = "TEXT";
  options: ITextBlockOptions = {
    color: "#000000",
    font: {
      fallback: "Arial, Helvetica, sans-serif",
      family: "Roboto",
      style: "normal",
      size: 16,
      weight: 400
    },
    lineHeight: {
      value: 40,
      unit: "none"
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    }
  };

  override toObject(options?: Partial<ITextBlockOptions>, innerText = this.innerText) {
    return { ...super.toObject(options), innerText };
  }
}
