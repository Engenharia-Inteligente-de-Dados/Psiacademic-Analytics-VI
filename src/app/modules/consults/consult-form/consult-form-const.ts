import { FormControl } from '@angular/forms';
import { FormType,ConsultTypeSelectOPtions,FormAtrributeConsult } from 'src/app/shared/enums/types.enums';
//TODO : Fazer interface
export const FORM_GROUPS = {
  anos: () => {
    return {
      ano: new FormControl(''),
      anoi: new FormControl(''),
      anof: new FormControl(''),
    };
  },
  expressoes: () => {
    return {
      titulo: new FormControl(''),
      resumo: new FormControl(''),
      palavraschave: new FormControl(''),
    };
  },
  repositorios: () => {
    return {
      repositorio: new FormControl(''),
    };
  },
  transtornos: () => {
    return {
      transtorno: new FormControl(''),
    };
  },
  avancada: () => {
    return {
      anoi: new FormControl(''),
      anof: new FormControl(''),
      titulo: new FormControl(''),
      resumo: new FormControl(''),
      palavraschave: new FormControl(''),
      transtorno: new FormControl(''),
      repositorio: new FormControl(''),
    };
  }
}
//TODO : Fazer interface
const formsDatasGroup = {
  anos: () => {
    return [
      {
      label: 'Ano',
      type: FormType.number,
      placeholder: '2022',
      attr: FormAtrributeConsult.Ano ,
      enabled: false,
    },
    {
      label: 'Ano Inicial',
      type: FormType.select,
      selectOptions: ConsultTypeSelectOPtions.anosOptionsI,
      placeholder: '2000',
      attr:  FormAtrributeConsult.AnoI,
      enabled: true,
    },
    {
      label: 'Ano Final',
      type: FormType.select,
      selectOptions: ConsultTypeSelectOPtions.anosOptionsF,
      placeholder: '2022',
      attr:  FormAtrributeConsult.AnoF,
      enabled: true,
    }
  ]
  },
  expressoes: () => {
    return [
      {
      label: 'Título',
      type: FormType.text,
      placeholder: 'Título',
      attr: FormAtrributeConsult.Titulo,
      enabled: true,
      },
      {
      label: 'Resumo',
      type: FormType.text,
      placeholder: 'Resumo',
      attr: FormAtrributeConsult.Resumo,
      enabled: true,
      },
      {
      label: 'Palavra Chave',
      type: FormType.text,
      placeholder: 'Palavra Chave',
      attr: FormAtrributeConsult.PalavrasChave,
      enabled: true,
      },
    ]
  },
  repositorios: () => {
    return [
      {
      label: 'Repositorio',
      type: FormType.select,
      selectOptions:'repositorioOptions',
      placeholder: 'Repositorio',
      attr: FormAtrributeConsult.Repositorio,
      enabled: true,
      },
    ]
  },
  transtornos: () => {
    return [
      {
      label: 'Transtorno',
      type: FormType.select,
      selectOptions:'transtornoOptions',
      placeholder: 'Transtorno',
      attr: FormAtrributeConsult.Transtorno,
      enabled: true,
      },
    ]
  }
}

export const FORM_TEMPLATE ={
  ...formsDatasGroup,
  avancada: () => {
    return [
      ...formsDatasGroup.anos(),
      ...formsDatasGroup.expressoes(),
      ...formsDatasGroup.transtornos(),
    ]
  }
}

export const ANOS_OPTIONS = [
  1500,
  1970,
  1971,
  1972,
  1973,
  1974,
  1975,
  1976,
  1977,
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
]

export const OPTIONS_CONSULT_FORM = {
  anosOptions:ANOS_OPTIONS,
  // anosOptionsI:ANOS_OPTIONS,
  // anosOptionsF:ANOS_OPTIONS,
  repositorioOptions:[
    `Todos`,
    `USP`,
    `UFRJ`,
    `UFSC`,
    `UFMG`,
    `UFPA`,
    `UFPR`,
    `UFPE`,
  ],
  transtornoOptions:[
    `Todos`,
    `TCC`,
    `TCC-S`,
    `TCC-S-P`,
    `TCC-S-P-I`,
    `TCC-S-P-I-F`,
    `TCC-S-P-I-F-R`,]
}
