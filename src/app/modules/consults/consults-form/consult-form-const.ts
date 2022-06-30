import { FormType,ConsultTypeSelectOPtions,FormAtrributeConsult } from 'src/app/shared/enums/types.enums';

const formsDatasGroup = {
  anos: () => {
    return [
    {
      label: 'Ano Inicial',
      type: FormType.select,
      selectOptions: ConsultTypeSelectOPtions.anosOptionsI,
      placeholder: '2000',
      attr:  FormAtrributeConsult.AnoI,
      accessibility:{
        name: 'Ano Inicial',
      },
      enabled: true,
    },
    {
      label: 'Ano Final',
      type: FormType.select,
      selectOptions: ConsultTypeSelectOPtions.anosOptionsF,
      placeholder: '2022',
      accessibility:{
        name: 'Ano Final',
      },
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
      accessibility:{
        name: 'Título',
      },
      },
      {
      label: 'Resumo',
      type: FormType.text,
      placeholder: 'Resumo',
      attr: FormAtrributeConsult.Resumo,
      enabled: true,
      accessibility: {
        name: 'Resumo',
      },
      },
    ]
  },
  repositorios: () => {
    return [
      {
      label: 'Repositório',
      type: FormType.select,
      selectOptions:'repositorioOptions',
      placeholder: 'Repositório',
      attr: FormAtrributeConsult.Repositorio,
      enabled: true,
      accessibility:{
        name: 'Repositório',
      },
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
      accessibility:{
        name: 'Transtorno',
      },
      },
    ]
  }
}

export const FORM_TEMPLATE ={
  ...formsDatasGroup,
  avancada: () => {
    return [
      {
        label: 'Ano',
        type: FormType.select,
        selectOptions: ConsultTypeSelectOPtions.anosOptions,
        attr: FormAtrributeConsult.Ano ,
        enabled: true,
        accessibility:{
          name: 'Ano',
        },
      },
       {
        label: 'Palavras-Chave',
        type: FormType.text,
        placeholder: 'Palavras-Chave',
        attr: FormAtrributeConsult.Palavras_chave,
        enabled: true,
        accessibility:{
          name: 'Palavras-Chave',
        },
        },
      ...formsDatasGroup.expressoes(),
      ...formsDatasGroup.transtornos(),
    ]
  }
}
