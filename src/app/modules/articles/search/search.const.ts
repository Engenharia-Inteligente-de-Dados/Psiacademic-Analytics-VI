import { SearchAttribute } from "src/app/shared/enums/SearchAttribute.enum";
import { IOptionSearch } from "src/app/shared/interfaces/search.interfaces";

export const OPTIONS_SEARCH : IOptionSearch[]= [
  {
    [SearchAttribute.TITLE]: '',
    key: SearchAttribute.TITLE,
    label: 'Título do trabalho',
    hidden: false,
    type: 'text',
    id:1,
  },
  {
    [SearchAttribute.AUTHOR]: '',
    key: SearchAttribute.AUTHOR,
    label: 'Autor(a) do trabalho',
    hidden: false,
    type: 'text',
    id:2,
  },
  {
    [SearchAttribute.INITIAL_YEAR]: '',
    key: SearchAttribute.INITIAL_YEAR,
    label: 'Ano Inicial',
    hidden: true,
    type: 'text',
    id:3,
  },
  {
    [SearchAttribute.FINAL_YEAR]: '',
    key: SearchAttribute.FINAL_YEAR,
    label: 'Ano Final',
    hidden: true,
    type: 'text',
    id:4,
  },
  {
    [SearchAttribute.WORDS]: '',
    key: SearchAttribute.WORDS,
    label: 'Plavra-chave',
    hidden: false,
    type: 'text',
    id: 5,
  },
  {
    [SearchAttribute.REP]: '',
    key: SearchAttribute.REP,
    label: 'Repositório que se encontra o trabalho, como exemplo UFMG ou UFRJ',
    hidden: true,
    type: 'text',
    id: 6,
  },
  {
    [SearchAttribute.TYPE]: '',
    key: SearchAttribute.TYPE,
    label: 'Tipo do trabalho, como exemplo Dissertação ou Tese',
    hidden: false,
    type: 'text',
    id: 7,
  }
];

export const MULT_ATRIBUTE_SEARCH = true;
