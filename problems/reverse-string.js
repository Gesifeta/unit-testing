module.exports = function reverseString(string) {
  // Your code here
  if (typeof string === "number")  return "The input is not a number"
  
  else {
    let newString = [];
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      newString.unshift(char);
    }
    return newString.join('');
  }
};