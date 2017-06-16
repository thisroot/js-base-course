let people = [
     {Firstname: 'Георгий', lastname: 'Петров', возраст: 32},
     {Firstname: 'Владимир', lastname: 'Иванов', возраст: 81},
     {Firstname: 'Денис', lastname: 'Сидоров', возраст: 42}
];

function yangestPerson(persons) {
 let yangest;
  for(item in persons) {
      if(item == 0) {
      yangest = {
                age:persons[item].age,
                item: item
                }

    } else {
      if(persons[item].возраст < yangest.age) {
        yangest = {age: persons[item].age, item:item}
      }
    }
  }

  return persons[yangest.item].Firstname + " " +
        persons[yangest.item].lastname
}


console.log(yangestPerson(people))
