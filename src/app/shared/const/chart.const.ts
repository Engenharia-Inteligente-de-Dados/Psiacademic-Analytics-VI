import {
  DADOS_POR_CONTEUDO_MORBIDADE,
  NUMERO_CASO_ESTADO_DATASUS,
  NUMERO_CASO_ESTADO_SISAB,
  NUMERO_CASO_MORBIDADE_ANO,
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
        Key: "repositorio",
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
        Key: `repositorio`,
        Options: [],
      },
      {
        Label: 'Ano',
        InUse: false,
        Value: "",
        Key: "ano",
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



//Gráficos Dados Públicos

const CASOS_ESTADO_CHARTJS: IChartjs = {
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
          color: Colors.Gray,
        },
        display: true,
        grid: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Casos',
        },
        ticks: {
          color: Colors.Gray,
        },
        grid: {
          borderDash: [2],
          borderDashOffset: [2],
          drawBorder: false,
          color: '#dcdcdc',
          zeroLineColor: '#f5f5f5',
          zeroLineBorderDash: [1],
          zeroLineBorderDashOffset: [1],
        },
      },
    },
  },
};

const CASOS_MORBIDADE_ATENDIMENTO_CHARTJS: IChartjs = {
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
          color: Colors.Gray,
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
          text: 'Casos',
        },
        ticks: {
          color: Colors.Gray,
        },
        grid: {
          borderDash: [3],
          borderDashOffset: [3],
          drawBorder: false,
          color: '#dcdcdc',
          zeroLineColor: Colors.Gray,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
    },
  },
};

const DADOS_CONTEUDO_CHARTJS: IChartjs = {
  type: ChartTypejs.Pie,
  data: {
    labels: [],
    datasets: []
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Posicionando a legenda na parte inferior
        align: 'start',
        labels: {
          color: Colors.CoolGray,
          boxWidth: 20, // Tamanho da caixa do ícone da legenda
          padding: 5, // Espaçamento entre as legendas
          font: {
            size: 11, // Ajuste o tamanho da fonte conforme necessário
          }
        }
      },
    },
  }

};


export const CASOS_POR_ESTADO: IChart = {
  Id: 5,
  Title: 'Número de casos por Estado ',
  Url: NUMERO_CASO_ESTADO_DATASUS,
  Loading: false,
  Keys: { labelName: 'siglaestado', valueName: `total_casos`, dinamic: true },
  Chart: CASOS_ESTADO_CHARTJS,
  Actions: {
    Filters: [
      {
        Label: 'Conteúdo',
        InUse: false,
        Value: ``,
        Key: `conteudo`,
        Options: [],
      },
      {
        Label: 'Ano',
        InUse: false,
        Value: "",
        Key: "ano",
        Options: [],
      },
    ],
  },
  DatasetConfig: {
    escalaCor: true,
    barThickness: 25,
    fill: true,
    label: 'Estado',
  },
};

export const CASOS_MORBIDADE_ATENDIMENTO: IChart = {
  Id: 6,
  Title: 'Número de casos por morbidade ou tipo de atendimento',
  Url: NUMERO_CASO_MORBIDADE_ANO,
  Keys: { labelName: 'ano', valueName: 'total_casos', dinamic: true },
  Chart: CASOS_MORBIDADE_ATENDIMENTO_CHARTJS,
  Loading: false,
  Actions: {
    Filters: [
      {
        Label: 'Conteúdo',
        InUse: false,
        Value: ``,
        Key: "conteudo",
        Options: [],
        Visible: true,
      },
      {
        Label: 'Estado',
        InUse: false,
        Value: ``,
        Key: "estado",
        Options: [],
        Visible: true,
      },
      {
        Label: 'Morbidade',
        InUse: false,
        Value: ``,
        Key: "morbidade",
        Options: [],
        Visible: true,
      },
      {
        Label: 'Tipo de atendimento',
        InUse: false,
        Value: ``,
        Key: "tipo_atendimento",
        Options: [],
        Visible: false,
      },
    ],
  },
  DatasetConfig: {
    label: 'Casos',
    replaceTitle: true,
  }
};


export const DADOS_CONTEUDO: IChart = {
  Id: 7,
  Title: 'Dados por conteúdo ',
  Url: DADOS_POR_CONTEUDO_MORBIDADE,
  Loading: false,
  Keys: { labelName: 'morbidade', valueName: `total_casos`, dinamic: true },
  Chart: DADOS_CONTEUDO_CHARTJS,
  Actions: {
    Filters: [
      {
        Label: 'Conteúdo',
        InUse: false,
        Value: ``,
        Key: `conteudo`,
        Options: [],
      },
    ],
  },
  DatasetConfig: {
    escalaCor: true,
    barThickness: 25,
    fill: true,
    label: 'Morbidade',
  },
};