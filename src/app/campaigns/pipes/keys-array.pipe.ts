import { Pipe, PipeTransform } from '@angular/core';

/**
 * KeysArray pipe
 *
 * This pipe transforms a map of values into an array with their keys
 */
@Pipe({
  name: 'keysarray'
})
export class KeysArrayPipe implements PipeTransform {

  transform(values: Map<any, any>, args?: any): any {
    return Array.from(values.keys());
  }

}
