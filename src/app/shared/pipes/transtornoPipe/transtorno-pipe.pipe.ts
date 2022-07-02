import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transtornoPipe'
})
export class TranstornoPipePipe implements PipeTransform {

  private readonly transtorno = {
    "esquizofrenia": "Esquizofrenia ",
    "ansiedade": "Ansiedade",
    "bipolar": "Transtorno bipolar",
    "depressao": "Depressão",
    "alimentar": "Transtorno Alimentar",
    "obssesivo_compulsivo": "Obsessivo-Compulsivo",
    "personalidade": "Transtornos de Personalidade",
    "traumas_estressesores": "Traumas Estressores"
  }

  transform(text: string): string {
    const transtorno: { [key: string]: string } = this.transtorno
    return transtorno[text] || text;
  }

}
