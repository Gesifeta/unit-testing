function returnsThree() {
  // Your code here
}

function reciprocal(n) {
  // Your code here
  if (typeof n !== "number") return NaN;
  else {
    return 1 / n;
  }
}

module.exports = {
  returnsThree,
  reciprocal
};