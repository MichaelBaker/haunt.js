if(!window.haunt) window.haunt = {}

window.haunt.defaultRunner = function() {
  var randomEffect = function() {
    var paragraph = document.getElementsByTagName('p')[0]
    paragraph.innerHTML = paragraph.innerHTML + haunt.dropElement("This is some text")
    paragraph.innerHTML = haunt.styledGetOut(paragraph.innerHTML)

    setTimeout(randomEffect, 1000)
  }

  setTimeout(randomEffect, 1000)
}
