import { SearchAttribute } from "../enums/SearchAttribute.enum";

export interface IAttribute {
  [SearchAttribute.TITLE]?: string;
  [SearchAttribute.WORDS]?: string;
  [SearchAttribute.AUTHOR]?: string;
  [SearchAttribute.MAX_YEAR]?: string;
  [SearchAttribute.MIN_YEAR]?: string;

}
