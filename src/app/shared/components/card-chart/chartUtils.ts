import { ChartType } from "../../enums/chartTypes.enum";

export function  getTypeChart(type: any) {
  switch (type) {
    case ChartType.Bar:
      return 'Bar';
    case ChartType.PieChart:
      return 'PieChart';
    case ChartType.Line:
      return 'Line';
    case ChartType.ComboChart:
      return 'ComboChart';
    case ChartType.BubbleChart:
      return 'BubbleChart';
    case ChartType.Timeline:
      return 'Timeline';
    case ChartType.ScatterChart:
      return 'ScatterChart';
    case ChartType.Scatter:
      return 'scatter';
    case ChartType.CandlestickChart:
      return 'CandlestickChart';
    case ChartType.AreaChart:
      return 'AreaChart';
    case ChartType.SteppedAreaChart:
      return 'SteppedAreaChart';
    case ChartType.Table:
      return 'Table';
    case ChartType.Timeline:
      return 'Timeline';
    case ChartType.OrgChart:
      return 'OrgChart';
    case ChartType.ColumnChart:
      return 'ColumnChart';
    case ChartType.ComboChart:
      return 'ComboChart';
    case ChartType.Histogram:
      return 'Histogram';
    case ChartType.Gantt:
      return 'Gantt';
    case ChartType.Sankey:
      return 'Sankey';
    case ChartType.GeoChart:
      return 'GeoChart';
    case ChartType.BarChart:
      return 'BarChart';
    case ChartType.AnnotationChart:
      return 'AnnotationChart';
    default:
      return 'Bar';
  }
}
