import { ChartType } from 'angular-google-charts';
import { TOTAL_ANOS_REP } from 'src/app/shared/consts/analytics.urls';
import { IChart } from 'src/app/shared/interfaces/chart.interfaces';

export const TITULO_TOTAL_TRABALHO_POR_REP = ` Quantidade de trabalhos por repositórios - {0}`;

export const TITULO_TOTAL_ANO = 'Total trabalhos por ano';

export const TITULO_TOTAL_TRABALHOS_POR_REP = `Total trabalhos por repositórios`;

export const TOTAL_TRABALHO_POR_REP: IChart = {
  id: '1',
  chartType: ChartType.Line,
  chartTitle: TITULO_TOTAL_TRABALHO_POR_REP,
  originalTitle: TITULO_TOTAL_TRABALHO_POR_REP,
  columnNames: ['Ano', 'Total'],
  chartData: [],
  options: {},
  keys: [`_id`, `total`],
  url: TOTAL_ANOS_REP,
  actions: {
    config: false,
    expand: true,
    filter: {
      inUse: true,
      value: '',
      options: [],
    },
  },
};

export const TOTAL_ANOS: IChart = {
  id: '2',
  chartType: ChartType.Bar,
  chartTitle: TITULO_TOTAL_ANO,
  originalTitle: TITULO_TOTAL_ANO,
  columnNames: ['Ano', 'Total'],
  chartData: [],
  options: {},
  keys: [`_id`, `count`],
  url: '',
  actions: {
    config: false,
    expand: false,
    filter: {
      inUse: false,
      value: '',
      options: [],
    },
  },
};

export const TOTAL_TRABALHOS_POR_REP: IChart = {
  id: '3',
  chartType: ChartType.Bar,
  chartTitle: TITULO_TOTAL_TRABALHOS_POR_REP,
  originalTitle: TITULO_TOTAL_TRABALHOS_POR_REP,
  columnNames: ['Repositórios', 'Total'],
  chartData: [],
  options: {},
  keys: [`_id`, `total`],
  url: '',
  actions: {
    config: false,
    expand: false,
    filter: {
      inUse: false,
      value: '',
      options: [],
    },
  },
};
