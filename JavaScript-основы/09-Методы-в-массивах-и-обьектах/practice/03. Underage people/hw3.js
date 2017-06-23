var persons = require("../01. Make person/hw1.js");

function getLessAge(age) {
    return function(item) {
      return item.age < age;
    }
}

console.log(persons.filter(getLessAge(18)))
