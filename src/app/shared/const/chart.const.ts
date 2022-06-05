import { TOTAL_ANOS_REP } from 'src/app/modules/analytics/analytics.urls';
import {
  ChartAlignPosition,
  ChartModejs,
  ChartTypejs,
} from '../enums/chartTypes.enum';
import { IChart, IChartjs } from '../interfaces/chart.interface';

const TOTAL_ANOS_CHARTJS: IChartjs = {
  type: ChartTypejs.Line,
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: 'Quantidade de trabalhos por red',
      fontColor: 'white',
    },
    legend: {
      labels: {
        fontColor: `white`,
      },
      align: `end`,
      position: `bottom`,
    },
    tooltips: {
      mode: ChartModejs.Index,
      intersect: true,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,.7)",
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: `Month`,
            fontColor: "white",
          },
          gridLines: {
            display: false,
            borderDash: [2],
            borderDashOffset: [2],
            color: `rgba(33, 37, 41, 0.3)`,
            zeroLineColor: `rgba(0, 0, 0, 0)`,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,.7)",
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: `BBBBBB`,
            fontColor: `white`,
          },
          gridLines: {
            borderDash: [3],
            borderDashOffset: [3],
            drawBorder: false,
            color: 'rgba(255, 255, 255, 0.15)',
            zeroLineColor: 'rgba(33, 37, 41, 0)',
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
    },
  },
};
export const TOTAL_ANOS_CHART: IChart = {
  Id: 1,
  Title: `Quantidade de trabalhos por repositórios - {0}`,
  Url: TOTAL_ANOS_REP,
  Chart: TOTAL_ANOS_CHARTJS,
  Actions: {
    Filter: {
      InUse: false,
      Value: ``,
      Options: [],
    },
  },
};
