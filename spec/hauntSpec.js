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
})
