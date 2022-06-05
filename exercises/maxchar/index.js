// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// my solution

function maxChar1(str) {
  const chars = {};
  for (const char of str) {
    chars[char] = chars[char] + 1 || 1;
    // if (!chars[char]) {
    //   chars[char] = 1;
    // } else {
    //   chars[char]++;
    // }
  }
  const mostUsedChar = Object.keys(chars).sort(
    (a, b) => chars[b] - chars[a]
  )[0];

  return mostUsedChar;
}

// solution1

function maxChar2(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// console.log(maxChar("abcccccccd"));
// console.log(maxChar("apple 1231111"));

module.exports = maxChar;
