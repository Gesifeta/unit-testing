// Your code here
const { expect } = require("chai")
const Person = require("../problems/person")

describe("Person class", function () {
    let person, person2;
    this.beforeEach(() => {
        person = new Person("Gemechu", 39)
        person2 = new Person("Erin", 24)
    })
    it("Should create person class successfully", function () {
        expect(person.name).to.exist;
        expect(person.age).to.exist;
    })
    it("Should set properties properly", function () {
        expect(person.age).to.equal(39);
        expect(person.name).to.equal("Gemechu");
    })
    it("Should display greeting message contianing name", () => {
        expect(person.sayHello()).to.eql("Hello Gemechu, how is your day?")
    })
    it("Should say a person visited other person", function () {
        expect(person.visit(person2)).to.eql("Gemechu visited Erin");
        expect(person.switchVisit(person2)).to.eql("Erin visited Gemechu")
    })
    let newPerson = new Person("Tigist", 28);
    let originalPerson = new Person("Alemayehu", 45);
    const student = { address: "aa", sex: "ale" }
    let original = new Person("ADAM", 39);
    let notAnObject = "This is not an Object";
    context("If supplied argument is a valid person", function () {
        it("Should update the properties to new person's properties", function () {
            let newPerson = new Person("Tigist", 28);
            let originalPerson = new Person("Alemayehu", 45);
            originalPerson.update(newPerson);
            expect(originalPerson.name).to.equal("Tigist");
            expect(originalPerson.age).to.equal(28);
        })
    })

    context("If the supplied argument is not valid person or does not have name and age", function () {
        it("Should explain the error to the user", () => {
            expect(() => original.update(student)).to.throw(Error);
            expect(() => original.update(notAnObject)).to.throw(Error);
        })
    })
    context("If the update is successful", function () {
        it("Should  return true", () => {
            expect(original.tryUpdate(newPerson)).to.true;
            expect(original.tryUpdate(notAnObject)).to.false;
        })
    })
})