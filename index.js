class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let array = string.split(' ')
    array[0] = Formatter.capitalize(array[0])
    for (let i = 1; i < array.length; i++) {
      if (array[i] != 'a' && array[i] != 'the' && array[i] != 'an' && array[i] != 'but' && array[i] != 'of' && array[i] != 'and' && array[i] != 'for' && array[i] != 'at' && array[i] != 'by' && array[i] != 'from'){
        array[i] = Formatter.capitalize(array[i])
      }
    }
    return array.join(' ')
  }
}
