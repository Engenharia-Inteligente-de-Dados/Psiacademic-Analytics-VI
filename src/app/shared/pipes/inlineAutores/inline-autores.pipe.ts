import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inlineAutores'
})
export class InlineAutoresPipe implements PipeTransform {

  transform(value: string[]): unknown {
    if(Array.isArray(value)){
      return value.join('; ');
    }
    return value;
  }

}
