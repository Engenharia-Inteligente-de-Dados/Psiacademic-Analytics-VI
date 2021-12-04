export interface Ichart{
  id: string;
  chartTitle?: string;
  chartData: any;
  chartType:any;
  columnNames:string[] | {type:string, role:string}[] | [];
  options: IchartOptions["option"] | any
}

export interface Icharts extends Array<Ichart>{}
export interface IchartOptions  {
 option: {
  colors?:string[],
  height?:number,
  weith?:number,
  is3D?:boolean,
  hAxis?:{
    title?:string,
    format?:string,
  },
  vAxis?:{
    title?:string,
    format?:string,
  }
  seriesType?:any,
  series?:any,}
}
