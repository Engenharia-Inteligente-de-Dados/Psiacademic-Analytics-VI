export function ordenaObjeto(objeto: Array<any>){
  return objeto.sort(function (a, b) {

    if(a._id != null && b._id != null){
      if(a._id > b._id) return 1;

      if (a._id < b._id) return -1;

    }
    return 0;
  });
}


export function percorrerArray(
  array: any[],
  keys: string[],
  defaultMessage: string
): any[][] {
  const chartData: any[][] = [];
  array.forEach((element) => {
    const row: any[] = [];
    keys.forEach((key) => {
      if (element[key] === undefined && element[key] === null) {
        element[key] = defaultMessage;
      }
      if (element[key] === '_id') {
        row.push(element[key]);
      } else {
        row.push({ v: element[key], f: element[key] });
      }
    });
    chartData.push(row);
  });
  return chartData;
}
