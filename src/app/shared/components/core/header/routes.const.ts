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
          route: `consultas/anos`,
          inUse: true
        },
        {
          label: 'Por Expressão',
          route: `consultas/expressoes`,
          inUse: true
        },
        {
          label: 'Por Repositorio',
          route: `consultas/repositorios`,
          inUse: true
        },
        {
          label: 'Por Transtornos',
          route: `consultas/transtornos`,
          inUse: true
        },
        {
          label: 'Avançada',
          route: `consultas/avancado`,
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
