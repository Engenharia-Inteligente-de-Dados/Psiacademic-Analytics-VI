import {
  TOTAL_ANOS_REP,
  TRANSTORNOS_REP_ANO,
} from 'src/app/modules/analytics/analytics.urls';
import {
  ChartAlignPosition,
  ChartModejs,
  ChartTypejs,
} from '../enums/chartTypes.enum';
import { Colors } from '../enums/Colors';
import { IChart, IChartjs } from '../interfaces/chart.interface';

const TOTAL_ANOS_POR_REPOSITORIO_CHARTJS: IChartjs = {
  type: ChartTypejs.Line,
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: Colors.CoolGray,
        },
        align: ChartAlignPosition.End,
        position: ChartAlignPosition.Bottom,
      },
      tooltip: {
        mode: ChartModejs.Index,
        intersect: false,
      },
      hover: {
        mode: ChartModejs.Nearest,
        intersect: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: Colors.CoolGray,
        },
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Quantidade de Trabalhos',
        },
        ticks: {
          color: Colors.CoolGray,
        },
        grid: {
          borderDash: [3],
          borderDashOffset: [3],
          drawBorder: false,
          color: Colors.Gray,
          zeroLineColor: Colors.Gray,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
    },
  },
};

const TOTAL_TRABALHOS_REP_CHARTJS: IChartjs = {
  type: ChartTypejs.Bar,
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: Colors.CoolGray,
        },
        align: ChartAlignPosition.End,
        position: ChartAlignPosition.Bottom,
      },
      tooltip: {
        mode: ChartModejs.Index,
        intersect: false,
      },
      hover: {
        mode: ChartModejs.Nearest,
        intersect: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: Colors.CoolGray,
        },
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Total de Trabalhos',
        },
        ticks: {
          color: Colors.CoolGray,
        },
        grid: {
          borderDash: [3],
          borderDashOffset: [3],
          drawBorder: false,
          color: Colors.Gray,
          zeroLineColor: Colors.Gray,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
    },
  },
};

const TOTAL_TRABALHOS_ANOS_CHARTJS: IChartjs = {
  type: ChartTypejs.Line,
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: Colors.CoolGray,
        },
        align: ChartAlignPosition.End,
        position: ChartAlignPosition.Bottom,
      },
      tooltip: {
        mode: ChartModejs.Index,
        intersect: false,
      },
      hover: {
        mode: ChartModejs.Nearest,
        intersect: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: Colors.CoolGray,
        },
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Total de Trabalhos',
        },
        ticks: {
          color: Colors.CoolGray,
        },
        grid: {
          borderDash: [3],
          borderDashOffset: [3],
          drawBorder: false,
          color: Colors.Gray,
          zeroLineColor: Colors.Gray,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
    },
  },
};

const TRANSTORNOS_REPOSITORIO_ANO_CHARTJS: IChartjs = {
  type: ChartTypejs.Bar,
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: Colors.CoolGray,
        },
        align: ChartAlignPosition.End,
        position: ChartAlignPosition.Bottom,
      },
      tooltip: {
        mode: ChartModejs.Index,
        intersect: false,
      },
      hover: {
        mode: ChartModejs.Nearest,
        intersect: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: Colors.CoolGray,
        },
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Quantidade de Trabalhos',
        },
        ticks: {
          color: Colors.CoolGray,
        },
        grid: {
          borderDash: [3],
          borderDashOffset: [3],
          drawBorder: false,
          color: Colors.Gray,
          zeroLineColor: Colors.Gray,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
    },
  },
};

export const TOTAL_ANOS_POR_REP_CHART: IChart = {
  Id: 1,
  Title: `Quantidade de trabalhos por repositórios - {0}`,
  Url: TOTAL_ANOS_REP,
  Keys: { _id: null, total: null },
  Chart: TOTAL_ANOS_POR_REPOSITORIO_CHARTJS,
  Loading: false,
  Actions: {
    Filters: [
      {
        Label: 'Repositórios',
        InUse: false,
        Value: ``,
        Key:"repositorio",
        Options: [],
      },
    ],
  },
  DatasetConfig: {
    label: 'Quantidade de Trabalhos',
    replaceTitle: true,
    }
};

export const TOTAL_TRABALHOS_REP_CHART: IChart = {
  Id: 2,
  Title: `Total trabalhos por repositórios`,
  Url: '',
  Keys: { _id: null, total: null },
  Chart: TOTAL_TRABALHOS_REP_CHARTJS,
  Loading: false,
  DatasetConfig: {
    escalaCor: true,
    barThickness: 25,
    fill: true,
  },
};

export const TOTAL_TRABALHOS_ANOS: IChart = {
  Id: 3,
  Title: `Evolução de trabalhos`,
  Url: '',
  Keys: { _id: null, count: null },
  Chart: TOTAL_TRABALHOS_ANOS_CHARTJS,
  Loading: false,
};

export const TRANSTORNOS_REPOSITORIO_ANO: IChart = {
  Id: 4,
  Title: 'Trabalho x Transtorno ',
  Url: TRANSTORNOS_REP_ANO,
  Loading: false,
  Keys: { _id: 'transtonos', total: null },
  Chart: TRANSTORNOS_REPOSITORIO_ANO_CHARTJS,
  Actions: {
    Filters: [
      {
        Label: 'Repositórios',
        InUse: false,
        Value: ``,
        Key:`repositorio`,
        Options: [],
      },
      {
        Label: 'Ano',
        InUse: false,
        Value: "",
        Key:"ano",
        Options: [],
      },
    ],
  },
  DatasetConfig: {
    escalaCor: true,
    barThickness: 25,
    fill: true,
    label: 'Transtornos',
  },
};
