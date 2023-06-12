  import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
  import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
  import { TextBlock } from "@wlocalhost/ngx-email-builder";
  import { Validators, Editor, Toolbar } from 'ngx-editor';

  @Component({
    selector: "tail-text-block",
    templateUrl: "text-block.component.html",
    styleUrls: ["text-block.component.scss"],
    encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class TextBlockComponent extends TextBlock implements OnInit, OnDestroy {
    emailBuilderEditor!: Editor;
    emailAsideEditor!: Editor;
    override innerText = '';
    toolbar: Toolbar = [
      [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
      ["link", "image"],
      ["text_color", "background_color"],
    ];

    form = new FormGroup({
      editorContent: new FormControl("Hello world!", Validators.required())
    });

    get doc(): AbstractControl | null {
      return this.form.get("editorContent");
    }
    override ngOnInit(): void {
      this.emailBuilderEditor = new Editor({
        history: true,
        keyboardShortcuts: true,
        inputRules: true,
    });

    this.emailAsideEditor = new Editor({
        history: true,
        keyboardShortcuts: true,
        inputRules: true,
    });
    }

    override ngOnDestroy(): void {
      this.emailBuilderEditor.destroy();
      this.emailAsideEditor.destroy();
    }
  }
