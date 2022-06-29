import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPStructure } from "@wlocalhost/ngx-email-builder/core";

@Component({
  selector: "ip-structure",
  template: `
    <div
      class="column"
      *ngFor="let column of structure.elements; let index = index"
    >
      <div class="block" *ngFor="let block of column">
        <ng-container *ipEmailBuilderDynamicBlockDirective="block"></ng-container>
      </div>
    </div>

    <button class="p-2 bg-gray-200 text-white" (click)="edit()">Editme</button>

    <ng-container *ipEmailBuilderSettings>
      <input type="checkbox" [(ngModel)]="structure.options.fullWidth">
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureComponent extends AIPStructure {
}
