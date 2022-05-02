import { ConsultType } from 'src/app/shared/enums/types.enums';

export const MAIN_ROUTES = [
  {
    route:'search',
    label:'Pesquisa',
    inUse:false
  },
  {
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
    route:'analytics',
    label:'Analytcs',
    inUse:true,
  },
]
