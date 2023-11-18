import { TRANSTORNOS_LABELS } from '../const/transtornoHumanizade.const';
import { Colors, ChartColor } from '../enums/Colors';
import { IChartjsDataset } from '../interfaces/chart.interface';
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

/**
 * @function formatChartData
 * @param array array de objetos para ser filtrado e formatado
 * @param keys Propriedades dos objetos que serão formatados
 * @param configDataSet recebe as configurações basicas do dataSet sendo elas do tipo @Interface IChartjsDataset
 * Transtorma os dados em objeto de dataset do ChartJS.
 * @returns retorna um Objeto contendo as propriedades labels, values, e  dataset sendo do tipo @interface IChartjsDataset
 */
export function formatChartData(array: any[], keys: any, configDataSet?: any) {
  let { labels, values } = splitLabelsValues(array, keys);
  labels = formatLabels(labels);
  const dataset = createDataSet(labels, values, configDataSet);
  return { labels, values, dataset };
}

function splitLabelsValues(array: any[], keys: any) {
  const labels = [];
  const values = [];
  if (keys?.dinamic) {
    array.forEach((item) => {
      if (item[keys.labelName] === undefined || item[keys.labelName] === null) {
        labels.push('Não Definido');
      } else {
        labels.push(item[keys.labelName]);
      }
      if (item[keys.valueName] === undefined || item[keys.valueName] === null) {
        values.push(0);
      } else {
        values.push(item[keys.valueName]);
      }
    })
    return { labels, values };
  }

  array.forEach((item) => {
    Object.keys(keys).forEach((key) => {
      if (key === '_id') {
        if (item[key] === undefined || item[key] === null) {
          labels.push('Não Definido');
        }
        if (!!keys[key]) {
          if (Array.isArray(item[key][keys[key]])) {
            labels.push(item[key][keys[key]].join(', '));
          } else {
            labels.push(item[key][keys[key]]);
          }
        } else {
          labels.push(item[key]);
        }
      }
      if (key === 'total' || key === 'count') {
        if (item[key] === undefined || item[key] === null || isNaN(item[key])) {
          values.push(0);
        } else {
          values.push(item[key]);
        }
      }
    });
  });

  return { labels, values };
}

function formatLabels(labels) {
  const formatText = { ...structuredClone(TRANSTORNOS_LABELS) };
  let new_Labels = labels.map((label) => {
    return formatText[label] || label;
  });
  return new_Labels;
}

function createDataSet(labels: any[], values: any[], config?: any): any {
  let cor = ChartColor.Color_1;
  let cores = [];
  if (config?.multipleDataset) {
    const dataset = labels.map((value, index) => {
      if (config?.escalaCor) {
        cor = Object.values(ChartColor)[index];
      }
      return {
        data: [{ x: labels[index], y: labels[index] }],
        fill: config?.fill || false,
        barThickness: config?.barThickness || 1,
        backgroundColor: cor,
        borderColor: cor,
      };
    });
    return dataset;
  }

  if (config?.escalaCor) {
    cores = Object.values(ChartColor).slice(0, labels.length);
  }
  const data = labels.map((value, index) => {
    return { x: labels[index], y: values[index] };
  });

  return {
    label: config?.label ? config.label : labels,
    data: data,
    fill: config?.fill || false,
    barThickness: config?.barThickness || 1,
    backgroundColor: !!cores.length ? cores : cor,
    borderColor: !!cores.length ? cores : cor,
  };
}

/***
 * @method replaceStringIndex Serve para formatar uma string pelo seu index.
 * É passado como parametro o titulo do grafico e um array com as substiuições.
 * Exemplo: replaceStringIndex('Atividade {0}', ['1']) retorna Atividade 1
 * @param string : recebe o titulo do grafico.
 * @param values : recebe um array com as substituições.
 */
export function replaceStringIndex(string: string, values: any[]) {
  return string.replace(/{(\d+)}/g, (match, number) => {
    return typeof values[number] != 'undefined' ? values[number] : match;
  });
}
// function aaa(){
//   if (config?.escalaCor) {
//     cores = Object.values(ChartColor).slice(0, labels.length);
//   }
//   return {
//     label: labels,
//     data: values,
//     fill: config?.fill || false,
//     barThickness: config?.barThickness || 3,
//     backgroundColor: !!cores ? cores : cor,
//     borderColor: !!cores ? cores : cor,
//   };
// }
