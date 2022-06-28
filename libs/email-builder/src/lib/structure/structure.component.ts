import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPStructure } from '@wlocalhost/ngx-email-builder/core';

@Component({
  selector: 'ip-structure',
  template: `
    {{ text }}
    <div
      class="column"
      *ngFor="let column of structure.elements; let index = index"
    >
      <div class="block" *ngFor="let block of column">
        {{ block | json }}
        <ng-container
          *ipEmailBuilderDynamicBlockDirective="{ type: 'text_format' }"
        ></ng-container>
      </div>
    </div>
    <ng-container *cdk-portal>
      <input type="text" [(ngModel)]="text" />
    </ng-container>

    <button (click)="edit()">Edit me</button>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StructureComponent extends AIPStructure {
  text = '';
}
