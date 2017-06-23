function createPerson(firstname, secondname,age,gender){
  return {
    firstname: firstname,
    secondname:secondname,
    age:age,
    gender:gender
  }
}

let person1 = new createPerson("Иван","Иванов",25,false);
let person2 = new createPerson("Петр","Петров",25,false);
let person3 = new createPerson("Игорь","Степанов",25,false);
let person4 = new createPerson("Степан","Петров",62,false);
let person5 = new createPerson("Юрий","Сидоров",84,false);
let person6 = new createPerson("Ирина","Иванова",12,true);
let person7 = new createPerson("Ольга","Петрова",26,true);
let person8 = new createPerson("Светлана","Сидорова",27,true);
let person9 = new createPerson("Сергей","Иванов",18,false);
let person10 = new createPerson("Наташа","Иванова",45,true);

module.exports = 
  [
    person1, person2, person3, person4,
    person5, person6, person7, person8,
    person9, person10
  ]
