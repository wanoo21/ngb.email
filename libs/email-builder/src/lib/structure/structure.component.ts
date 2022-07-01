import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPStructure } from "@wlocalhost/ngx-email-builder/core";
import { ConnectedPosition } from "@angular/cdk/overlay";

@Component({
  selector: "ip-structure",
  template: `
    <div *ngFor="let column of structure.elements; let index = index"
         [ngStyle]="columnStyles(index)"
         class="column" [class.empty]="!column.length"
    >
      <ng-container *ngIf="column.length; else addNewBlockButton">
        <div class="relative group" *ngFor="let block of column">
          <ng-container [ipEmailBuilderDynamicBlockDirective]="block" #instance="instance">
            <div class="overflow">
              <button class="tool-button" (click)="instance.cmpInstance?.edit()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button class="tool-button cursor-move">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                        clip-rule="evenodd" />
                </svg>
              </button>
              <button class="tool-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                  <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                </svg>
              </button>
            </div>
          </ng-container>
        </div>
      </ng-container>
    </div>

    <div
      class="absolute top-0 -right-[31px] opacity-0 group-hover:opacity-100 group-hover:z-20 transition-opacity menu-container grid-rows-1"
      [class.active]="menuOpened">
      <button class="tool-button" (click)="edit()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>
      <button class="tool-button cursor-move">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                clip-rule="evenodd" />
        </svg>
      </button>
      <button class="tool-button" [class.active]="menuOpened" [cdkMenuTriggerFor]="sectionToolMenu"
              [cdkMenuPosition]="toolMenuPositions" (cdkMenuOpened)="menuOpened = true"
              (cdkMenuClosed)="menuOpened = false">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </div>

    <ng-template #sectionToolMenu>
      <div class="menu-container grid-rows-1" cdkMenu>
        <button class="tool-button" cdkMenuItem>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
        </button>
        <button class="tool-button" cdkMenuItem title="Save structure as module">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
          </svg>
        </button>
      </div>
    </ng-template>

    <ng-template #addNewBlockButton>
      <button type="button" class="tool-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd" />
        </svg>
      </button>
    </ng-template>

    <ng-container *ipEmailBuilderSettings>
      <input type="checkbox" [(ngModel)]="structure.options.fullWidth">
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .column.empty {
        @apply grid place-content-center bg-gray-200 h-24 min-h-fit rounded border-2 border-gray-300 #{!important};
      }

      .tool-button {
        @apply p-1 bg-gray-300 text-white hover:bg-gray-400 rounded-full transition-colors;
      }

      .tool-button.active {
        @apply bg-gray-400;
      }

      .overflow {
        @apply shadow-sm absolute inset-0 bg-gray-200 flex flex-wrap items-center justify-center gap-2 px-2;
        row-gap: 0;
      }

      .overflow:not(.active) {
        @apply opacity-0 group-hover:opacity-100 transition-opacity;
      }

      .overflow.active {
        @apply opacity-100;
      }

      .menu-container {
        @apply bg-white p-1 shadow-lg rounded border-[1px] grid gap-2;
      }

      .menu-container.active {
        @apply opacity-100 z-50;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureComponent extends AIPStructure {
  menuOpened = false;
  toolMenuPositions: ConnectedPosition[] = [
    { originX: "end", originY: "top", offsetY: 0, offsetX: 3, overlayX: "start", overlayY: "top" }
  ];
}
