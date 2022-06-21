import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumePipe'
})
export class ResumePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const resumo = value.split(".")

    return `${resumo[0]}...`;
  }

}
