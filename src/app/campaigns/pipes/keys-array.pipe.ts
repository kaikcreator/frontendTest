import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysarray'
})
export class KeysArrayPipe implements PipeTransform {

  transform(values: Map<any, any>, args?: any): any {
    return Array.from(values.keys());
  }

}
