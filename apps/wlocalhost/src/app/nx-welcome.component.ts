import { Component, OnInit } from '@angular/core';
import { AIPEmailBuilderService } from '@wlocalhost/ngx-email-builder/core';

@Component({
  selector: 'wlocalhost-nx-welcome',
  template: ` <ip-email-builder></ip-email-builder> `,
  styles: [],
})
export class NxWelcomeComponent implements OnInit {
  constructor(readonly ngb: AIPEmailBuilderService) {}

  ngOnInit(): void {
    console.log(this.ngb.test);
  }
}
