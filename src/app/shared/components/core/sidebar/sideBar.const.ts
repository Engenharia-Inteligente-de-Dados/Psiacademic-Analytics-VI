import { ElementRef } from '@angular/core';
import { ConsultType } from 'src/app/shared/enums/types.enums';
export const TEXTOS = {
  Title: 'Psi Academic Analytics',
};

export const MAIN_ROUTES = [
  {
    Icon: 'fas fa-chart-line',
    Route: 'analytics',
    Label: 'Analytics',
    Hash:'#menuAnalytics',
    InUse: true,
    SubRoutes: [
      {
        Label: 'Dashboard',
        Route: [`analytics/dashboard/`],
        InUse: true,
        Icon: `fas fa-chart-line`,
        Hash:'#menuAnalyticsDashboard',
      },
    ],
  },
  // {
  //   Icon: 'fas fa-search',
  //   Route: 'consultas/anos',
  //   Label: 'Consultas',
  //   Hash:'#menuConsultas',
  //   SubRoutes: [
  //     {
  //       Label: 'Por Ano',
  //       Route: [`consultas/${ConsultType.Anos}/`],
  //       InUse: true,
  //       Icon: `fas fa-calendar`,
  //       Hash:'#menuConsultasAno',

  //     },
  //     {
  //       Label: 'Por Expressão',
  //       Route: [`consultas/${ConsultType.Expressoes}/`],
  //       InUse: true,
  //       Icon: `fas fa-comment-minus`,
  //       Hash:'#menuConsultasExpressao',

  //     },
  //     {
  //       Label: 'Por Repositorio',
  //       Route: [`consultas/${ConsultType.Repositorios}`],
  //       InUse: true,
  //       Icon: `fas fa-university`,
  //       Hash:'#menuConsultasRepositorio',

  //     },
  //     {
  //       Label: 'Por Transtornos',
  //       Route: [`consultas/${ConsultType.Transtornos}/`],
  //       InUse: true,
  //       Icon: `fas fa-brain`,
  //       Hash:'#menuConsultasTranstorno',

  //     },
  //     {
  //       Label: 'Avançada',
  //       Route: [`consultas/${ConsultType.Avancada}/`],
  //       InUse: true,
  //       Icon: `fas fa-search-plus`,
  //       Hash:'#menuConsultasAvancada',
  //     },
  //   ],
  //   InUse: true,
  // },
];