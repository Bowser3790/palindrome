let assert = require("assert");
let Phrase = require("../index.js");


// "Phrase" <= This is a sting as an argument and an anonomous function as an
// arguement * its a function of 0 arguments
// Here we are going to be describing the palendrome method from index.js
// there is a standard way of denoting the method is part of an Object
// which is to say it can be called on instances of that Object like This
// Phrase#palindrome
// below shows a nested describe block
// it is a function that takes in an argument describing what we are testing

describe("Phrase", function(){
  // Phrase#palindrome
  describe("#palindrome", function(){

    it("should return false for a non-palindrome", function(){
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function(){
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it ("should return true for mixed case palindrome", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());

      });

    it ("should return true for mixed case palindrome", function() {
      let punctuationPal = new Phrase("Madam, I'm Adam.");
      assert(punctuationPal.palindrome());
    });

    describe("#letters", function(){
      it ("should return only letters", function() {
        let punctuatedPal = new Phrase("Madam, I'm Adam");
        assert.strictEqual(punctuatedPal.letters(), "MadamImAdam");
      });
      it ("should return empty string if there are only numbers", function() {
        let testPhrase = new Phrase("123.45");
        assert.strictEqual(testPhrase.letters(), "");
      });
    });
  });
});
