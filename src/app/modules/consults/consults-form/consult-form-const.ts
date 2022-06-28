import { FormType,ConsultTypeSelectOPtions,FormAtrributeConsult } from 'src/app/shared/enums/types.enums';

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
      {
        label: 'Ano',
        type: FormType.select,
        selectOptions: ConsultTypeSelectOPtions.anosOptions,
        attr: FormAtrributeConsult.Ano ,
        enabled: true,
      },
       {
        label: 'Palavras Chave',
        type: FormType.text,
        placeholder: 'Palavra Chave',
        attr: FormAtrributeConsult.Palavras_chave,
        enabled: true,
        },
      ...formsDatasGroup.expressoes(),
      ...formsDatasGroup.transtornos(),
    ]
  }
}
