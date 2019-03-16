class Formatter {
  //add static methods here
  static capitalize(str) {
    const restOfStr = str.slice(1);
    return str[0].toUpperCase() + restOfStr;
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str) {
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    const result = [];
    const wordsArr = str.split(' ');
    const firstWord = wordsArr[0];
    const restOfWords = wordsArr.slice(1);
    result.push(this.capitalize(firstWord));
    restOfWords.forEach((word) => {
      if (!exceptions.includes(word)) {
        result.push(this.capitalize(word));
      } else {
        result.push(word);
      }
    });
    return result.join(' ');
  }
}