var persons = require("../01. Make person/hw1.js");

function meanAge(persons, gender) {
    persons = persons.filter(function(item) {
      if(item.gender == gender) {
        return true
      } else {
        return false
      }
    })

    let count = persons.length
    let sum = persons.reduce(function (sum,item) {
      return sum + item.age;
    },0)

    return sum/count
}

console.log(meanAge(persons,true))
