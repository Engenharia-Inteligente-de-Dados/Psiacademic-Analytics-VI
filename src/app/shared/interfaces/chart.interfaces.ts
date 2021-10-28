export interface Ichart {
  chartTitle: IchartTitle;
  chartData: IChartData;
  chartType: IChartType;
  columnNames:string[];
  options: IchartOptions;
  chartColumns : IChartColumns;
}

export interface IchartOptions  {
  colors?:string[],
  height?:number,
  weith?:number,
  is3D?:boolean,
}

export interface IChartData {
  chartData: [] | any;
}

export interface IChartColumns {
  chartColumns: string[] | {type:string, role:string}[] | [];
}

export interface IChartType {
  chartType: string;
}

export interface IchartTitle {
  chartTitle: string;
}
