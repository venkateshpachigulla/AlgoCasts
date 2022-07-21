// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution 2  - best solution
// sort strings by removing special characters and convert with lower case then compare strings
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// solution1
function anagrams2(stringA, stringB) {
  const testACharMap = buildCharMap(stringA);
  const testBCharMap = buildCharMap(stringB);

  if (Object.keys(testACharMap).length !== Object.keys(testBCharMap).length) {
    return false;
  } else {
    return Object.keys(testACharMap).every(
      (item) => testACharMap[item] === testBCharMap[item]
    );
  }
}

function buildCharMap(str) {
  const charMap = {};
  for (const key of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[key] = charMap[key] + 1 || 1;
  }
  return charMap;
}

// my solution
function anagrams1(stringA, stringB) {
  const testA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const testB = stringB.replace(/[^\w]/g, "").toLowerCase();

  const testACharMap = {};
  const testBCharMap = {};
  for (const key of testA) {
    testACharMap[key] = testACharMap[key] + 1 || 1;
  }
  for (const key of testB) {
    testBCharMap[key] = testBCharMap[key] + 1 || 1;
  }
  if (Object.keys(testACharMap).length === Object.keys(testBCharMap).length) {
    return Object.keys(testACharMap).every(
      (item) => testACharMap[item] === testBCharMap[item]
    );
  } else {
    return false;
  }
}

console.log(anagrams("A tree, a life, a bench", "A tree, a fence, a yard"));

module.exports = anagrams;
