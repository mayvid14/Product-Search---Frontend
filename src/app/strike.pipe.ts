import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strike'
})
export class StrikePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
