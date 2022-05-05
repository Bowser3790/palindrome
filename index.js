// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("")
}

// defines a Phrase Object
// its important to note the next 2 lines about parameters and properties
// Phrase(content) this is the parameter
// this.content = content;  this.content is  the named property
// let greeting = new Phrase("greetings to you!");  this is the constructor


function Phrase(content) {
  this.content = content;

// Returns content processed for palindrome testing.

// this.processedContent = function processedContent() {
//   return this.content.toLowerCase();
// }

// returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }


// Returns true for a palindrome, false otherwise
// essentially this.palendrome is a property that becomes a function ***
// Returns true for a palindrome, false otherwise. (see below)
// (string) *this.palendrome knows that the parameter is a string so you can
// take sting out of the parameter and also replace string.toLowerCase with
// this.content.toLowerCase
//
//function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
// }


  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return this.processedContent() === reverse(this.processedContent());
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase();


// Add a blank method to the String object prototype that returns true if
// the string is empty or consists solely of whitespace (spaces, tabs, or
// newlines). Hint: Use a regular expression. You will need the
// regex syntax for the start and end of a string.


String.prototype.blank = function blank() {
  return !!(this.match(/^\s*$/g));
}
console.log("foobar" .blank());
console.log("    foobar".blank())
console.log("   foobar   ".blank());
console.log("".blank());


// Using whichever method you prefer (direct indexing or slicing), add a last
// method to the Array object prototype that returns the last element of an
// array. Hint: Refer to Section 3.3.


a = [56, 60, 100, 110]

Array.prototype.last = function() {
	return this[this.length-1];
}

a.last();
