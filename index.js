class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^0-9-' ]/g, "")
  }

  static titleize(string) {
    return string.split(" ").map((word) => this.capitalize).join(" ");
  }
}