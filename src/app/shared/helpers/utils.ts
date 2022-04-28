

export class Utils {

  public static sortByProperty(array:any,property:any, inverse = false ){
    const arraySortered = array.sort((a:any, b:any) => {
        if (a[property] > b[property]) {
            return 1;
        }
        if (a[property] < b[property]) {
            return -1;
        }

        return 0;
    });

    if(inverse) {
        return arraySortered.reverse();
    }
    return arraySortered;
  }

  public static removeAccentMark(cadena: string){
    const acentos: any = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();
  }
}
