// Your code here
const { expect } = require("chai");
const { Triangle, Isosceles, Scalene } = require("../problems/triangle");
describe("Triangle", () => {
    let triangle, triangle2, triangle3, triangle4, triangle5;
    beforeEach(() => {
        triangle = new Triangle(3, 2, 10);
        triangle2 = new Triangle(-3, 5, 12)
        triangle3 = new Triangle(200, -10, 2000)
        triangle4 = new Triangle(16, 21, 45);
        triangle5 = new Triangle(45, 12, 74);
    })
    it("Should create successfuly", () => {
        expect(triangle).to.exist;
        expect(triangle.side1).to.equal(3);
        expect(triangle.side3).to.equal(10);
    })
    it("Should calculate perimeter of the triangle", () => {
        expect(triangle.getPerimeter()).to.equal(15)
    })
    it("It should be valid triangle,sum of two side should be greater than any other single side", () => {
        expect(triangle.hasValidSideLengths()).to.equal(true);
        expect(triangle2.hasValidSideLengths()).to.equal(false);
        expect(triangle4.hasValidSideLengths()).to.equal(true);
        expect(triangle3.hasValidSideLengths()).to.equal(false);
    })
    it("Should add isValid property to the triangle", () => {
        triangle.validate();
        triangle3.validate();
        triangle4.validate();
        triangle2.validate();
        triangle5.validate();
        expect(triangle.isValid).to.exist
        expect(triangle3.isValid).to.equal(false);
        expect(triangle.isValid).to.equal(true);
        expect(triangle2.isValid).to.equal(false);
        expect(triangle4.isValid).to.equal(true);
    })
    it("Should return array of valid trangles", () => {
        triangle.validate();
        triangle3.validate();
        triangle4.validate();
        triangle2.validate();
        triangle5.validate();
        const triangles = [triangle, triangle2, triangle3, triangle4, triangle5]
        console.log(triangle4.GetValidTriangles(...triangles))
        expect(triangle.GetValidTriangles(...triangles)).to.include.members([triangle, triangle4, triangle5])
        expect(triangle.GetValidTriangles(...triangles)).to.not.include.members([triangle3]);
    })
    context("should be inherit from the triangle", () => {
        let scalene = new Scalene(4, 5, 120);
        let scalene2 = new Scalene(45, 44, 120);
        let scalene3 = new Scalene(4, 4, 4);
        it("should have three sides", () => {
            expect(scalene).to.exist;
            expect(scalene).to.include.all.keys("side1", "side2", "side3")
            expect(scalene.side3).to.equal(120);
            expect(scalene.hasValidSideLengths).to.exist;
        })
        it("Should return true of the triangle is Scalene", () => {
            expect(scalene.isScalene()).to.false;
            expect(scalene3.isScalene()).to.true;
            expect(scalene2.isScalene()).to.false;
        })
        it("Should add validate property to Scalene triangle", () => {
            scalene.validate();
            expect(scalene.isValidScalene).to.exist;
            expect(scalene3.isValidScalene).to.true;
            expect(scalene3.isValidScalene).to.false;
            expect(scalene2.isValidScalene).to.exist;
        })
        context("If it is Isosceles triangle", () => {
            let isosceles = new Isosceles(3, 4, 6);
            let isosceles2 = new Isosceles(3, 4, 4);
            let isosceles3 = new Isosceles(5, 4, 5);
            it("Should inherit all scalene triangle properties", () => {
                expect(isosceles).to.include.all.keys("side1", "side2", "side3");
                expect(isosceles.isValidScalene).to.exist;
            })
            it("Should be valid Isosceles triangle", () => {
                expect(isosceles.validate()).to.false;
                expect(isosceles2.validate()).to.true;
                expect(isosceles3.validate()).to.true;
            })
        })


    })
})