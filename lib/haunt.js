(function() {
  var replaceGetOut = function(text, replacement) {
    return text.replace(/(\bget\b)/i, replacement)
  }

  exports.haunt = {
    getOut: function(text, cssClass) {
      if(cssClass)
        return replaceGetOut(text, "<span class='" + cssClass + "'>$1 out</span>")
      else
        return replaceGetOut(text, "$1 out")
    },

    styledGetOut: function(text) {
      return replaceGetOut(text, "<span style='transform: rotate(10deg)'>$1 out</span>")
    }
  }
})()
