var haunt = require("../lib/haunt.js").haunt

describe("haunt", function() {
  describe("getOut", function() {
    it("returns text if no 'get' in content", function() {
      expect(haunt.getOut("Hello World")).toEqual("Hello World")
    })

    it("doesn't alter a string that has 'get' embeddd in another word", function() {
      expect(haunt.getOut("Hegetllo World")).toEqual("Hegetllo World")
    })

    it("changes the word after the first occurrence of the word 'get' to 'out'", function() {
      expect(haunt.getOut("Get your hotdogs here")).toEqual("Get out your hotdogs here")
      expect(haunt.getOut("get your hotdogs here")).toEqual("get out your hotdogs here")
    })

    it("changes the word at the end of a sentence", function() {
      expect(haunt.getOut("hello get.")).toEqual("hello get out.")
    })

    it("replaces only one 'get'", function() {
      expect(haunt.getOut("hello get get.")).toEqual("hello get out get.")
    })

    describe("getOut with text styling", function() {
      it("would create a span with class with the word", function() {
        expect(haunt.getOut("get my sandwich", "spooky-word")).toEqual("<span class='spooky-word'>get out</span> my sandwich")
      })
    })
  })

  describe("styledGetOut", function() {
    it("adds an inline style to the text to make it ~spooky~", function() {
        expect(haunt.styledGetOut("get my sandwich")).toContain("style")
    })
  })

  describe("reverseWord", function() {
    it("reverses a given word", function() {
        expect(haunt.reverseWord("Meat is murder", "murder")).toEqual("Meat is redrum")
    })

    it("doesn't reverse a string that has the word embed in another word", function() {
        expect(haunt.reverseWord("Meat is hellmurderyo", "murder")).toEqual("Meat is hellredrumyo")
    })

    it("reverses only one word", function() {
      expect(haunt.reverseWord("Meat is murder murder", "murder")).toEqual("Meat is redrum murder")
    })

    it("does nothing when word does not exist", function() {
      expect(haunt.reverseWord("Meat is healthy", "murder")).toEqual("Meat is healthy")
    })
  })

  describe("dropElement", function() {
    it("moves the given text down on the page", function() {
      expect(haunt.dropElement("This is some text to drop")).toEqual("<span style='display: inline-block; position: relative; top: 10px'>This is some text to drop</span>")
    })
  })

  describe("raiseElement", function() {
    it("moves the given text up on the page", function() {
      expect(haunt.raiseElement("This is some text to drop")).toEqual("<span style='display: inline-block; position: relative; bottom: 10px'>This is some text to drop</span>")
    })
  })

  describe("bumpElementLeft", function() {
    it("moves the given text up on the page", function() {
      expect(haunt.bumpElementLeft("This is some text to drop")).toEqual("<span style='display: inline-block; position: relative; right: 10px'>This is some text to drop</span>")
    })
  })

  describe("bumpElementRight", function() {
    it("moves the given text up on the page", function() {
      expect(haunt.bumpElementRight("This is some text to drop")).toEqual("<span style='display: inline-block; position: relative; left: 10px'>This is some text to drop</span>")
    })
  })
})
