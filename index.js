class Formatter {

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[!@#$%^&*(){}]/g, '')
    // alterante regex = /[^a-zA-Z0-9 '-]/g
  }

  static titleize(str){
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let answer = []

    let words = str.split(' ')

    for(let i = 0; i < words.length; i++){
      if(i ==0){
        answer.push(this.capitalize(words[i]))
      } else {
        if(exceptions.includes(words[i])){
          answer.push(words[i])
        } else{
          answer.push(this.capitalize(words[i]))
        }
      }
    }
    return answer.join(' ')
  }


}
