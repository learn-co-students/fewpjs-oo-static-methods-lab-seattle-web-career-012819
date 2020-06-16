

class Formatter {
  static capitalize(string) {

     return string.charAt(0).toUpperCase() + string.slice(1);
   }

   static sanitize(string) {
     return string.replace( /[^A-Za-z0-9 '-]/g, '' );

   }

   static titleize(string) {
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let cleanString = string.split( " " )
    for ( let n = 0; n < cleanString.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( cleanString[ n ] ) )
      } else {
        if ( exceptions.includes( cleanString[ n ] ) ) {
          result.push( cleanString[ n ] )
        } else {
          result.push( this.capitalize( cleanString[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}
