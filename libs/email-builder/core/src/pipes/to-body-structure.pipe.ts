import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBodyStructure'
})
export class ToBodyStructurePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
