// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

//solution1

function reverse1(str) {
  return str.split("").reverse().join("");
}

//solution2

function reverse2(str) {
  let reverseStr = "";
  for (const character of str) {
    reverseStr = character + reverseStr;
  }
  return reverseStr;
}

//solution3
function reverse3(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
