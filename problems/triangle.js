// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getPerimeter() {
        let perimeter = this.side1 + this.side2 + this.side3
        return perimeter;
    }
    hasValidSideLengths() {
        if (this.side1 >= 0 && this.side2 >= 0 && this.side3 >= 0) return true;
        return false;
    }
    validate() {
        this.isValid = this.hasValidSideLengths();
    }
    GetValidTriangles(...triangles) {
        let validTriangles = [];
        for (let i = 0; i < triangles.length; i++) {
            triangles[i].validate();
            if (triangles[i].isValid === true) {
                validTriangles.push(triangles[i])
            }
        }
        return validTriangles;

    }
}
class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3)
    }

}
class Isosceles extends Scalene {

}
module.exports = {
    Triangle, Scalene, Isosceles
}