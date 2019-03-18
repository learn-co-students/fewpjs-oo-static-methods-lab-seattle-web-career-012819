class Formatter {
  static capitalize(str) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
  }

  static sanitize(str) {
    let newStr = str.replace(/[^A-Za-z0-9\s-']+/g, '');
    return newStr
  }

  static titleize(str) {
    let newStr = str.split(' ');
    let nahWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    newStr = newStr.map(function(elmt, index) {
      if (index == 0) return elmt[0].toUpperCase() + elmt.slice(1);
      else if (nahWords.includes(elmt)) return elmt;
      else return elmt[0].toUpperCase() + elmt.slice(1);
    })
      .join(' ')

    return newStr;
  }
}
