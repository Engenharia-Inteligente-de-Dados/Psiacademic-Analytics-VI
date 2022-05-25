import { FormType } from '../enums/types.enums';

export interface IChart {
  id: string;
  chartTitle?: string;
  originalTitle?: string;
  chartData: any;
  chartType: any;
  columnNames: string[] | { type: string; role: string }[] | [];
  options: IChartOptions['option'] | any;
  actions?: IChartActions;
  url?: string;
  keys?: string[];
}

export interface Icharts extends Array<IChart> {}
export interface IChartOptions {
  option: {
    colors?: string[];
    height?: number;
    width?: number;
    dynamicResize?: boolean;
    is3D?: boolean;
    hAxis?: {
      title?: string;
      format?: string;
    };
    vAxis?: {
      title?: string;
      format?: string;
    };
    seriesType?: any;
    series?: any;
  };
}

export interface IChartActions {
  config?: boolean;
  expand?: boolean;
  filter?: {
    inUse?: boolean;
    value?: any;
    options?: any[];
  };
}
