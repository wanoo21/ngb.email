import { Component, OnInit } from '@angular/core';
import { AIPEmailBuilderService } from '@wlocalhost/ngx-email-builder/core';
import { AbsPage } from '@ngcomma/ngx-abstract';

@Component({
  selector: 'wlocalhost-nx-welcome',
  template: ` <ip-email-builder></ip-email-builder> `,
  styles: [],
})
export class NxWelcomeComponent extends AbsPage implements OnInit {
  constructor(readonly ngb: AIPEmailBuilderService) {
    super('Home', 'Wlocalhost description', true);
  }

  ngOnInit(): void {
    console.log(this.ngb.test);
    // console.log(JSON.stringify(new MyHTMLBlockComponent().toObject({
    //   padding: {}
    // })));
  }
}
