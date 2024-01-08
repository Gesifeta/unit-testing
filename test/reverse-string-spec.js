// Your code here
let { expect } = require("chai")
let reverseString = require("../problems/reverse-string")
describe("Reverse string", function () {
    let word = "classes";
    let word2 = "Try"
    it("Should reverse a given string", function () {
        expect(reverseString(word)).to.equal("sessalc");
        expect(reverseString(word2)).to.equal("yrT");
    })
    it("Should throw an error, if the word is not a string", function () {
        expect(reverseString(123)).to.eql("The input is not a number");

    })
})