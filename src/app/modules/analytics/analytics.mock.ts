import { Icharts } from '../../shared/interfaces/chart.interfaces';
const LISTCHARTS:Icharts = [
    {
      id: '1',
      chartTitle: 'Chart 1',
      chartType: `Bar`,
      chartData: [
        [`CEULP`,500],
        [`UFT`,250],
        [`USP`,1050],
        [`UCP`,250],
        [`UFRJ`,600],
        [`UFLA`,150],
        [`UFMG`,568],
      ],
      options:{
        colors: ['#0054c2', '#0ed840', '#92949c','#FFCC00','#146aff','#ff6600','#e60a27'],
      },
      columnNames: [`Universidade`,`Quantidade`],
    },
    {
      id: '2',
      chartTitle: 'Chart 2',
      chartType: `ColumnChart`,
      chartData: [
        [`2019`,50,10],
        [`2020`,42,20],
        [`2021`,55,30],
      ],
      columnNames: [`Ano`, `Producao`,`Eventos`],
      options:{
        colors: ['#0054c2', '#0ed840', '#92949c'],
        hAxis: {
          title: 'Month'
       },
       vAxis:{
          title: 'Temperature'
       },
      },
    },
    {
      id: '3',
      chartTitle: 'Chart 3',
      chartType: `BubbleChart`,
      chartData: [
        ["Hemodialise", 10, 2],
        ["Luto", 16, 6],
        ["Qualidade de vida", 12, 6],
        ["Idoso", 10, 3],
        ["Criançãs", 6, 3]
      ],
      options:{},
      columnNames: [`Id`,`Total de produção`,'Media Anual']
    },

  ]

const TOTAL_REP = [{"_id":"UFPE","count":4275},{"_id":"UNB","count":1807},{"_id":"UFG","count":1591},{"_id":"UFRJ","count":1745},{"_id":"UFPA","count":4114},{"_id":"UFRN","count":4179},{"_id":"UFMG","count":21916},{"_id":"UFSC","count":4108},{"_id":"USP","count":711},{"_id":"UFAM","count":3255},{"_id":"UFRGS","count":8669},{"_id":"UFPB","count":3167}]

const TOTAL_YEARS = [{"_id":"1980","count":18},{"_id":"2001","count":364},{"_id":"1972","count":9},{"_id":"1970","count":2},{"_id":"2011","count":4717},{"_id":"2014","count":5107},{"_id":"1989","count":33},{"_id":"1981","count":11},{"_id":"0005","count":1},{"_id":"1984","count":14},{"_id":"2020","count":18},{"_id":"2000","count":207},{"_id":"1976","count":6},{"_id":"1974","count":3},{"_id":"2012","count":5235},{"_id":null,"count":188},{"_id":"2008","count":2526},{"_id":"2018","count":3799},{"_id":"2010","count":3752},{"_id":"1971","count":1},{"_id":"2006","count":1803},{"_id":"1994","count":40},{"_id":"1986","count":13},{"_id":"1973","count":4},{"_id":"1997","count":80},{"_id":"1998","count":94},{"_id":"2009","count":2983},{"_id":"1982","count":16},{"_id":"1978","count":9},{"_id":"1995","count":61},{"_id":"1968","count":1},{"_id":"1979","count":14},{"_id":"2019","count":3094},{"_id":"2002","count":680},{"_id":"2004","count":952},{"_id":"1996","count":53},{"_id":"2015","count":5084},{"_id":"2013","count":5139},{"_id":"1983","count":9},{"_id":"2017","count":4022},{"_id":"1988","count":19},{"_id":"1991","count":26},{"_id":"2007","count":2107},{"_id":"1992","count":25},{"_id":"1977","count":10},{"_id":"1993","count":34},{"_id":"1985","count":18},{"_id":"2003","count":795},{"_id":"1975","count":2},{"_id":"1990","count":32},{"_id":"1987","count":23},{"_id":"2005","count":1114},{"_id":"1999","count":140},{"_id":"2016","count":5029},{"_id":"1946","count":1}]

export {LISTCHARTS,TOTAL_REP,TOTAL_YEARS}
