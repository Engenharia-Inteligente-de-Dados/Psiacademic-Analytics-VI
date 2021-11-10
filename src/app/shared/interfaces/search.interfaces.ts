import { SearchAttribute } from "../enums/SearchAttibute.enum";

export interface IOptionSearch {
  [SearchAttribute.TITLE]?: string;
  [SearchAttribute.WORDS]?: string;
  [SearchAttribute.AUTHOR]?: string;
  [SearchAttribute.MAX_YEAR]?: string;
  [SearchAttribute.MIN_YEAR]?: string;
  label: string;
  key: string;
  value?: string;
  hidden: boolean;
  id: number;
  type:string
}
