import { FormControl } from '@angular/forms';
import { ConsultType,FormType,ConsultTypeSelectOPtions,FormAtrributeConsult } from 'src/app/shared/enums/types.enums';
//TODO : Fazer interface
export const FORM_GROUPS = {
  anos: () => {
    return {
      ano: new FormControl(''),
      anoI: new FormControl(''),
      anoF: new FormControl(''),
    };
  },
  expressoes: () => {
    return {
      titulo: new FormControl(''),
      resumo: new FormControl(''),
      palavrasChaves: new FormControl(''),
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
      ano: new FormControl(''),
      titulo: new FormControl(''),
      resumo: new FormControl(''),
      palavrasChaves: new FormControl(''),
      transtorno: new FormControl(''),
      repositorio: new FormControl(''),
    };
  }
}
//TODO : Fazer interface
export const FORM_DATA = {
  anos: () => {
    return [
      {
      label: 'Ano',
      type: FormType.number,
      placeholder: '2022',
      attr: FormAtrributeConsult.ano ,
      enabled: false,
    },
    {
      label: 'Ano Inicial',
      type: FormType.select,
      selectOptions: ConsultTypeSelectOPtions.anosOptionsI,
      placeholder: '2000',
      attr:  FormAtrributeConsult.anoI,
      enabled: true,
    },
    {
      label: 'Ano Final',
      type: FormType.select,
      selectOptions: ConsultTypeSelectOPtions.anosOptionsF,
      placeholder: '2022',
      attr:  FormAtrributeConsult.anoF,
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
      attr: FormAtrributeConsult.titulo,
      enabled: true,
      },
      {
      label: 'Resumo',
      type: FormType.text,
      placeholder: 'Resumo',
      attr: FormAtrributeConsult.resumo,
      enabled: true,
      },
      {
      label: 'Palavras Chaves',
      type: FormType.text,
      placeholder: 'Palavras Chaves',
      attr: FormAtrributeConsult.palavrasChaves,
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
      attr: FormAtrributeConsult.repositorio,
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
      attr: FormAtrributeConsult.transtorno,
      enabled: true,
      },
    ]
  },
  avancada: () => {
    return []
  }
}

export const ANOS_OPTIONS = [
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
