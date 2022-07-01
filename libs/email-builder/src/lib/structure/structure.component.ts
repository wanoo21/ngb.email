import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPStructure } from "@wlocalhost/ngx-email-builder/core";

@Component({
  selector: "ip-structure",
  template: `
    <div *ngFor="let column of structure.elements; let index = index"
         [ngStyle]="columnStyles(index)"
         class="column" [class.empty]="!column.length" cdkDropList
    >
      <ng-container *ngIf="column.length; else addNewBlockButton">
        <div class="relative group" *ngFor="let block of column" cdkDrag [cdkDragData]="instance.cmpInstance">
          <ng-container [ipEmailBuilderDynamicBlockDirective]="block" #instance="instance">
            <div class="overflow">
              <button class="tool-button" (click)="instance.cmpInstance?.edit()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button class="tool-button cursor-move" cdkDragHandle>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                        clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </ng-container>
        </div>
      </ng-container>
    </div>

    <button class="absolute top-1 -left-5 text-red-500/50" tabindex="-1" type="button" (click)="edit()">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd" />
      </svg>
    </button>

    <div
      class="absolute top-0 -right-[31px] opacity-0 group-hover:opacity-100 group-hover:z-20 transition-opacity menu-container grid-rows-1">
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
    </div>

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
      <h2 ipH2>Actions</h2>
      <div class="flex gap-1">
        <button class="text-black/75" ipBtn ipTooltip="Duplicate">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
        </button>
        <button class="text-red-700/75" ipBtn ipTooltip="Delete">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd" />
          </svg>
        </button>
        <button class="text-green-700/75" ipBtn ipTooltip="Save as new module">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
          </svg>
        </button>
      </div>
      <h2 ipH2>Change structure type</h2>
      <div class="grid grid-cols-6 gap-1">
        <button *ngFor="let type of [1,2,3,4,5,6]" ipBtn>{{type}}</button>
      </div>
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

      .overflow {
        @apply shadow-sm absolute inset-0 bg-blue-100/50 flex flex-wrap items-center justify-center gap-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity;
        row-gap: 0;
      }

      .menu-container {
        @apply bg-white p-1 shadow-lg rounded border-[1px] grid gap-2;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureComponent extends AIPStructure {
}


// {
//   fullWidth: false,
//     border: {
//   color: "#cccccc",
//     style: "solid",
//     width: 0,
//     radius: 0
// },
//   background: {
//     color: "#ffffff",
//       url: "",
//       repeat: "repeat",
//       size: {
//       value: 100,
//         unit: "px",
//         auto: true,
//         units: ["px", "%", "cover", "contain"]
//     }
//   },
//   padding: {
//     top: 4,
//       right: 4,
//       bottom: 4,
//       left: 4
//   },
//   margin: {
//     top: 0,
//       bottom: 0
//   },
//   gaps: [8, 4]
// }
