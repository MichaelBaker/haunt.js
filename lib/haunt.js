(function(exports) {
  var replaceGetOut = function(text, replacement) {
    return text.replace(/(\bget\b)/i, replacement)
  }

  var reverse = function(word) {
    return word.split("").reverse().join("")
  }

  haunt = exports.haunt = {
    getOut: function(text, cssClass) {
      if(cssClass)
        return replaceGetOut(text, "<span class='" + cssClass + "'>$1 out</span>")
      else
        return replaceGetOut(text, "$1 out")
    },

    styledGetOut: function(text) {
      return replaceGetOut(text, "<span style='transform: rotate(10deg);" +
                                 "-webkit-transform: rotate(10deg);" +
                                 "-o-transform: rotate(10deg);" +
                                 "display: inline-block'>$1 out</span>")
    },

    reverseWord: function(text, word) {
      var reversedWord = reverse(word)
      var regexWord = new RegExp(word, 'i')
      return text.replace(regexWord, reversedWord)
    }
  }
})(typeof exports === 'undefined'? {} : exports)
