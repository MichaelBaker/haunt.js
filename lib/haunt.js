(function(exports) {
  var replaceGetOut = function(text, replacement) {
    return text.replace(/(\bget\b)/i, replacement)
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
    }
  }
})(typeof exports === 'undefined'? {} : exports)
