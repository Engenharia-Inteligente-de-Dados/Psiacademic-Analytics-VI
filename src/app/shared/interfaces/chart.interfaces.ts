import { Row } from "angular-google-charts";

export interface Ichart {
  chartTitle?: IchartTitle;
  chartData: IChartData["chartData"];
  chartType: IChartType;
  columnNames:string[];
  options: IchartOptions;
}

export interface IchartOptions  {
  colors?:string[],
  height?:number,
  weith?:number,
  is3D?:boolean,
  hAxis?:{
    title?:string,
  },
  vAxis?:{
    title?:string,
  }
  seriesType?:any,
  series?:any,
}

export interface IChartData {
  chartData: any;
}

export interface IChartColumns {
  chartColumns: string[] | {type:string, role:string}[] | [];
}

export interface IChartType {
  chartType:any;
}

export interface IchartTitle {
  chartTitle: string;
}
