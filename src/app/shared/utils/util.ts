    /***
	 * @method formatTitle Serve para formatar o titulo do grafico.
	 * É passado como parametro o titulo do grafico e um array com as substiuições.
   * Exemplo: formatTitle('Atividade {0}', ['1']) retorna Atividade 1
   * @param title : recebe o titulo do grafico.
   * @param values : recebe um array com as substituições.
	 */
     export function formatTitle(title: string, values: any[]) {
      return title.replace(/{(\d+)}/g, (match, number) => {
        return typeof values[number] != 'undefined' ? values[number] : match;
      });
    }
