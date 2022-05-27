import { ConsultType } from 'src/app/shared/enums/types.enums';

export const MAIN_ROUTES = [
  {
    icone: '',
    route:'search',
    label:'Pesquisa',
    inUse:false
  },
  {
    icone: 'search-outline',
    route:'consultas/anos',
    label:'Consultas',
    subRoutes:
      [
        {
          label: 'Por Ano',
          route: `consultas/${ConsultType.Anos}`,
          inUse: true
        },
        {
          label: 'Por Expressão',
          route: `consultas/${ConsultType.Expressoes}`,
          inUse: true
        },
        {
          label: 'Por Repositorio',
          route:  `consultas/${ConsultType.Repositorios}`,
          inUse: true
        },
        {
          label: 'Por Transtornos',
          route:  `consultas/${ConsultType.Transtornos}`,
          inUse: true
        },
        {
          label: 'Avançada',
          route:  `consultas/${ConsultType.Avancada}`,
          inUse: true
        },
      ],
    inUse:true,
  },
  {
    icone:'analytics-outline',
    route:'analytics',
    label:'Analytcs',
    inUse:true,
  },
]

export const MAIN_ROUTES_SUBROUTES = {
  Consultas: [
        {
          label: 'Por Ano',
          route: `consultas/${ConsultType.Anos}`,
          inUse: true
        },
        {
          label: 'Por Expressão',
          route: `consultas/${ConsultType.Expressoes}`,
          inUse: true
        },
        {
          label: 'Por Repositorio',
          route:  `consultas/${ConsultType.Repositorios}`,
          inUse: true
        },
        {
          label: 'Por Transtornos',
          route:  `consultas/${ConsultType.Transtornos}`,
          inUse: true
        },
        {
          label: 'Avançada',
          route:  `consultas/${ConsultType.Avancada}`,
          inUse: true
        },
      ],
      Analytcs: [
        {
          label: 'Teste',
          route: `consultas/${ConsultType.Anos}`,
          inUse: true
        },
       
      ]
    }