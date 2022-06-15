import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPEmailBuilderService } from '@wlocalhost/ngx-email-builder';

@Component({
  selector: 'wlocalhost-nx-welcome',
  template: ` <ip-email-builder></ip-email-builder> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor(readonly ngb: IPEmailBuilderService) {}

  ngOnInit(): void {
    console.log(this.ngb.test);
  }
}
