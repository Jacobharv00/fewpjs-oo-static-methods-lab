class Formatter {
  static capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\-\' ]+/g, '')
  }

  static titleize(string) {
    const exceptArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    return string.split(' ').map(function(word, index){
      if (index !== 0 && exceptArr.includes(word)) {
          return word
        } else {
          return this.capitalize(word)
        }
      }.bind(this)).join(' ') 
    }
  }

