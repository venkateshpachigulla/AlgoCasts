// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

//my tried solution
function reverseInt1(n) {
  if (Math.sign(n) === -1) {
    return parseInt(
      "-" + n.toString().split("-")[1].split("").reverse().join("")
    );
  } else {
    return parseInt(n.toString().split("").reverse().join(""));
  }
}
// solution1
function reverseInt2(n) {
  const reversed = n.toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt(reversed) * -1;
  } else {
    return parseInt(reversed);
  }
}

//final solution
function reverseInt3(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
