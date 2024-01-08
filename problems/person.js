class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Hello ${this.name}, how is your day?`
  }
  visit(obj) {
    return `${this.name} visited ${obj.name}`
  }
  switchVisit(obj) {
    return obj.visit(this)
  }
  update(obj) {
    if (typeof obj !== "object" || !obj.name || !obj.age) throw new Error("The input is not a valid object");

    this.name = obj.name;
    this.age = obj.age;
    return true;
  }
  tryUpdate(obj) {
    if (typeof obj !== "object") return false;
    let checkUpdate = this.update(obj);
    return checkUpdate;
  }
}

module.exports = Person;