// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution 2 - using regex
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// solution 1
function vowels1(str) {
  let vowelCount = 0;
  const checker = ["a", "e", "i", "o", "u"];
  for (const char of str.toLowerCase()) {
    if (checker.includes(char)) {
      vowelCount++;
    }

    // if (
    //     char == "a" ||
    //     char == "e" ||
    //     char == "i" ||
    //     char == "o" ||
    //     char == "u"
    //   ) {
    //     vowelCount++;
    //   }
  }
  return vowelCount;
}

module.exports = vowels;
