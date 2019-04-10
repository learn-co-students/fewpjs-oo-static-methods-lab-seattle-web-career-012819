class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-z\-,' ]/gi, "")
  }

  static titleize(string) {
    const exception = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const words =  string.split(" ");
    const firstWord = this.capitalize(words.shift());
    const newSentence = words.map(word => {
      if (exception.includes(this.sanitize(word))) return word;
      return this.capitalize(word);
    })
    newSentence.unshift(firstWord);
    
    return newSentence.join(" ");
  }
}