var persons = require("../01. Make person/hw1.js")


function checkAge(age) {
  return function (item) {
    return item.age >= age;
  }
}

console.log(persons.every(checkAge(10)))
