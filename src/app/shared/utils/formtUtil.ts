export function ordenaObjeto(objeto: Array<any>) {
  return objeto.sort(function (a, b) {
    if (a._id != null && b._id != null) {
      if (a._id > b._id) return 1;

      if (a._id < b._id) return -1;
    }
    return 0;
  });
}

export function percorrerArray(
  array: any[][],
  keys: string[],
  defaultMessage: string
) {
  const label = 0;
  const value = 1;
  const labels = [];
  const values = [];
  array.forEach((item) => {
    if (item[keys[label]] === undefined || item[keys[label]] === null) {
      item[keys[label]] = defaultMessage;
    }
    if (
      item[keys[value]] === undefined ||
      item[keys[value]] === null ||
      item[keys[value]] === ``
    ) {
      item[keys[value]] = null;
    }
    labels.push(item[keys[label]]);
    values.push(item[keys[value]]);
  });
  return { labels, values };
}

/**
 *
 * @param array array de objetos para ser filtrado e formatado
 * @param keys Propriedades dos objetos que serão formatados
 * @param defaultMessage mensagem padrão caso seja null ou undefined no valor
 * @returns retorna um Objeto contendo as propriedades {labels,values}
 */
export function formtData(
  array: any[],
  keys: string[] = [],
  defaultMessage: string = 'Não Definido'
): any {
  const arrayOrdenado = ordenaObjeto(array);
  const chartData = percorrerArray(arrayOrdenado, keys, defaultMessage);
  return chartData;
}

/***
 * @method formatTitle Serve para formatar o titulo do grafico.
 * É passado como parametro o titulo do grafico e um array com as substiuições.
 * Exemplo: formatTitle('Atividade {0}', ['1']) retorna Atividade 1
 * @param title : recebe o titulo do grafico.
 * @param values : recebe um array com as substituições.
 */
export function formatTitle(title: string, values: any[]) {
  return title.replace(/{(\d+)}/g, (match, number) => {
    return typeof values[number] != 'undefined' ? values[number] : match;
  });
}
