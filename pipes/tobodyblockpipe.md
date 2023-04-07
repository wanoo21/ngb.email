# ToBodyBlockPipe

This pipe is used to return the right `AIPEmailBuilderBlockExtendedOptions` block based on `IIPEmailBuilderBlockData`.&#x20;

It is most commonly used for `cdkDragData` inside blocks list.

## **Example:**

```html
<ng-container *ngFor="let block of blocksData">
  <aip-block [block]="block" cdkDrag [cdkDragData]="block | toBodyBlock"></aip-block>
</ng-container>
```
