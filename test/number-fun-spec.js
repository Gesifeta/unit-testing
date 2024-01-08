// Your code here
const { expect } = require("chai");
const { reciprocal } = require("../problems/number-fun");
describe("Reciprocals", function () {
    let num1 = 1, num2 = 0.25, num3 = 5, num4 = "this not a number";
    it("Should reciprocate a number", function () {
        expect(reciprocal(num1)).to.eql(1);
        expect(reciprocal(num2)).to.equal(4);
        expect(reciprocal(num3)).to.equal(.2);
    })
    it("Should throw an error if input is not a number", function () {
        expect(reciprocal(num4)).to.NaN;
    })
})