import { SearchAttribute } from "src/app/shared/enums/SearchAttribute.enum";
import { IOptionSearch } from "src/app/shared/interfaces/search.interfaces";

export const OPTIONS_SEARCH : IOptionSearch[]= [
  {
    [SearchAttribute.TITLE]: '',
    key: SearchAttribute.TITLE,
    label: 'Titulo',
    hidden: false,
    type: 'text',
    id:1,
  },
  {
    [SearchAttribute.AUTHOR]: '',
    key: SearchAttribute.AUTHOR,
    label: 'Autor',
    hidden: false,
    type: 'text',
    id:2,
  },
  {
    [SearchAttribute.MAX_YEAR]: '',
    key: SearchAttribute.MAX_YEAR,
    label: 'Ano Maximo',
    hidden: false,
    type: 'text',
    id:3,
  },
  {
    [SearchAttribute.MIN_YEAR]: '',
    key: SearchAttribute.MIN_YEAR,
    label: 'Ano Minino',
    hidden: false,
    type: 'text',
    id:4,
  },
  {
    [SearchAttribute.WORDS]: '',
    key: SearchAttribute.WORDS,
    label: 'Ano Minino',
    hidden: true,
    type: 'text',
    id: 5,
  }
];

export const MULT_ATRIBUTE_SEARCH = false;
