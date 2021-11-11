import { SearchAttribute } from "../enums/SearchAttribute.enum";
import { IAttribute } from './atribute.interfaces';
export interface IOptionSearch extends IAttribute {
  label: string;
  key: SearchAttribute;
  value?: string;
  hidden: boolean;
  id: number;
  type:string
}
