class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^\w- ']/g,'')
  }

  static titleize(string){
    return Formatter.capitalize(string.split(' ').map(string=>{
      if (string.concat(' ').match(/^the[\W]|a[\W]|an[\W]|but[\W]|of[\W]|and[\W]|for[\W]|at[\W]|by[\W]|from[\W]/)){
        return string
      }else{
        return Formatter.capitalize(string);
      }
    }).join(' '));
  }
}
