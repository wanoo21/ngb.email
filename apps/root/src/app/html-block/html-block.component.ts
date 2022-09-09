import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPEmailBuilderBlock, TIPEmailBuilderStyles } from "@wlocalhost/ngx-email-builder";

interface HTMLOptions {
  paddingTop: number;
}

@Component({
  selector: "wlocalhost-html-block",
  templateUrl: "./html-block.component.html",
  styleUrls: ["./html-block.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlBlockComponent extends AIPEmailBuilderBlock<HTMLOptions> {
  options: HTMLOptions = {
    paddingTop: 30
  };

  get hostStyles(): TIPEmailBuilderStyles {
    return {
      paddingTop: `${this.options.paddingTop}px`
    };
  }
}
