import { ConsultTypeSelectOPtions } from '../enums/types.enums'

export interface IOptionsSelectConsulta{
  [ConsultTypeSelectOPtions.transtornosOptions]: any[],
  [ConsultTypeSelectOPtions.repositoriosOptions]: any[],
  [ConsultTypeSelectOPtions.anosOptions]: any[],
}
