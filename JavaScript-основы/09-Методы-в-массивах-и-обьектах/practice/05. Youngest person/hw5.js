var persons = require("../01. Make person/hw1.js");

function getYangestPerson(persons) {
  let min;
  item = persons.find(function(item, index) {
    if (index == 0) {
      min = item;
    }
    if (item.age < min.age) {
      min = item;
    }
  })
  return min;
};

let person = getYangestPerson(persons);
console.log(person.firstname + " " + person.secondname);
