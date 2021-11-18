import { SearchAttribute } from "../enums/SearchAttribute.enum";

export interface IAttribute {
  [SearchAttribute.TITLE]?: string;
  [SearchAttribute.WORDS]?: string;
  [SearchAttribute.AUTHOR]?: string;
  [SearchAttribute.FINAL_YEAR]?: string;
  [SearchAttribute.INITIAL_YEAR]?: string;
  [SearchAttribute.TYPE]?: string;
  [SearchAttribute.REP]?: string;
  [SearchAttribute.RESUME]?: string;
}
