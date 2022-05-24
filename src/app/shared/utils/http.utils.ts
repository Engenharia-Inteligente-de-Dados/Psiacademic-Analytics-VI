  /***
	 * @method paramsValidate serve para retornar os parametros de uma query.
	 * Serve para caso tenha 1 ou mais requisitos para pesquisa/filtros
	 * Exemplo : Pesquisar Atividade
	 * @param values : recebe um array de objeto.
	 * @returns Retorna o parametro parametrizado de acordo com @param values e o transforma em uma query.
	 *  Exemplo: {name:"Atividade1"} retorna name=Atividade1
	 */
   export function paramsValidate(values: any): string {
    const valueObj:any = {}
    if(Array.isArray(values)){
      values.forEach((obj:any) => {
        valueObj[obj?.key] = obj[obj.key]
      })
    return URLParams(valueObj)
    }
    else{
      return URLParams(values)
    }
  }

  export function URLParams(valueObj: any): string {
    const params = new URLSearchParams()
    for (const key in valueObj) {
			if (valueObj[key] !== '' && valueObj[key] !== 'undefined' && valueObj[key] != null) {
				params.set(key, valueObj[key])
			  }
	  	}
    return `?${params.toString()}`
  }

