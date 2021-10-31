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
        ["", 8, 12],
        ["", 4, 5.5],
        ["", 11, 14],
        ["", 3, 3.5],
        ["", 6.5, 7]
      ],
      options:{},
      columnNames: [`Id`,`Produção`,'Universidade']
    },

  ]

export {LISTCHARTS}
