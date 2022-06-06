/**
 * Enum ChartTypeGoogleChart está deprecated devido ao não uso da Biblioteca Google Charts
 * Usar o ChartTypejs
 * @deprecated
 */
export enum ChartTypeGoogleChart {
  AnnotationChart = 'AnnotationChart',
  AreaChart = 'AreaChart',
  Bar = 'Bar',
  BarChart = 'BarChart',
  BubbleChart = 'BubbleChart',
  Calendar = 'Calendar',
  CandlestickChart = 'CandlestickChart',
  ColumnChart = 'ColumnChart',
  ComboChart = 'ComboChart',
  PieChart = 'PieChart',
  Gantt = 'Gantt',
  Gauge = 'Gauge',
  GeoChart = 'GeoChart',
  Histogram = 'Histogram',
  Line = 'Line',
  LineChart = 'LineChart',
  Map = 'Map',
  OrgChart = 'OrgChart',
  Sankey = 'Sankey',
  Scatter = 'Scatter',
  ScatterChart = 'ScatterChart',
  SteppedAreaChart = 'SteppedAreaChart',
  Table = 'Table',
  Timeline = 'Timeline',
  TreeMap = 'TreeMap',
  WordTree = 'wordtree',
}

export enum ChartTypejs {
  Bar = 'bar',
  Line = 'line',
  Pie = 'pie',
  Doughnut = 'doughnut',
  Bubble = 'bubble',
  Radar = 'radar',
  Scatter = 'scatter',
  /**
   * descricao: Ao utilizar área chart validar na documentação do Chart.js sua real utilização
   * https://www.chartjs.org/docs/latest/charts/area.html
   */
  Area = 'area',
}

export enum ChartModejs {
  Index = 'index',
  Nearest = 'nearest',
}

/**
 * Enum ChartAlignPosition precisa validar todas as posições e alimentos de acordo com a documentação do Chart.js
 */
export enum ChartAlignPosition {
  /**
   * @description Posições
  */
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
  /**
   * @description Alinhamentos
  */
  Start = 'start',
  Center = 'center',
  End = 'end',
}
