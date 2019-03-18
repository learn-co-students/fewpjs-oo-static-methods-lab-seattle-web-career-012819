class Formatter {
  static capitalize(str) {
    let strnew = str[0].toUpperCase()+str.slice(1);
    return strnew;
  }
  static sanitize(str) {
    let strnew = str.replace(/[^A-Za-z0-9\s-']+/g, '');
    return strnew
  }

  static titleize(str) {
    let parseString = str.split(' ');
    let ignoreThese = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    parseString = parseString.map(function(elt, index) {
      if (index == 0) return elt[0].toUpperCase() + elt.slice(1);
      else if (ignoreThese.includes(elt)) return elt;
      else return elt[0].toUpperCase() + elt.slice(1);
    }).join(' ')
    return parseString;
  }
}
