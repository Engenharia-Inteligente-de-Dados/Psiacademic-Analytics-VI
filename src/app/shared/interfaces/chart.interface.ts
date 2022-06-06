import {
  ChartTypejs,
  ChartModejs,
  ChartAlignPosition,
} from '../enums/chartTypes.enum';

interface IChartAxes {
  display?: boolean;
  /**
   * @description Labels dos eixos X e Y
   */
  ticks?:{
    color?: string;
    backdropColor?: string;
    display?: boolean;
    callback?: any;
  }
  title?: {
    display?: boolean;
    labelString?: string;
    color?: string;
    align?: ChartAlignPosition;
    text: string | string[];
    padding?: 'top' | 'bottom' | number;
  };
  grid?: {
    /**
     * @description circular
     * If true, gridlines are circular (on radar chart only).
     */
    circular?: boolean;
    display?: boolean;
    borderDash?: number[];
    drawBorder?: boolean;
    borderDashOffset?: number[];
    color?: string;
    zeroLineColor?: string;
    zeroLineBorderDash?: number[];
    zeroLineBorderDashOffset?: number[];
    tickColor?: string;
  };
}

interface IChartjsDataset {
  label?: string | number | Date | any;
  data: number[] | any[] | { x: any; y: any }[] | string | string[] | any;
  //data: any
  fill: boolean;
  barThickness?: number;
  backgroundColor?: string;
  borderColor?: string;
}

interface IChartjsData {
  labels?: string[];
  datasets: IChartjsDataset[];
}

export interface IChartjsOptions {
  maintainAspectRatio: boolean;
  responsive: boolean;
  plugins?: {
    legend?: {
      labels?: {
        color: string;
      };
      align?: string | ChartAlignPosition;
      position?: string | ChartAlignPosition;
    };
    title?: {
      display?: boolean;
      text?: string;
      color?: string;
    };
    tooltip?: {
      mode: string | ChartModejs;
      intersect: boolean;
    };
    hover?: {
      mode: string | ChartModejs;
      intersect: boolean;
    };
  }
  scales?: {
    x?: IChartAxes | IChartAxes[];
    y?: IChartAxes | IChartAxes[];
  };
}

export interface IChartjs {
  type: ChartTypejs|string;
  data: IChartjsData;
  options?: IChartjsOptions;
}

export interface IChartActions {
  Config?: boolean;
  Expand?: boolean;
  Filter?: {
    InUse?: boolean;
    Value?: any;
    Options?: any[];
  };
}

export interface IChart {
  Id: string | number;
  Title?: string;
  Chart: IChartjs;
  Actions?: IChartActions;
  Url?: string;
  Loading?: boolean;
  Keys?: string[]
}
