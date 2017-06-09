// Создадим два объекта
var a = {a: 1, b: 2};
var b = {a: 1, b: 2};

// Сравнение объектов происходит не по значениям, а по ссылкам.

// a и b — разные переменные, поэтому они будут не равны, даже если все их поля равны.

console.log(a == b, a === b); // false false

var c = a;

// c — указывает в памяти на тот же объект, что и a. Мы сравняли ссылки.

console.log(a == c, a === c); // true true

// Но теперь, если мы поменяем что-то в `c`, оно же поменяется и в `a`.
c.a = 2;

console.log(a, c); // Object {a: 2, b: 2} Object {a: 2, b: 2}

// Глубокая копия — проходит по всем полям объекта и создаёт новый с такими же полями
var d = clone(a);

console.log(a == d, a === d); // false false

// Можно безболезненно менять все поля в d, это не отразится на a
d.a = 3;

console.log(a, d); // Object {a: 2, b: 2} Object {a: 3, b: 2}


function clone(obj) {
	if (obj === null || typeof(obj) !== 'object') {
		return obj;
	}

    // назначаем тип обьекта для нового объекта
	var temp = obj.constructor(); // changed
    
	for (var key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			temp[key] = clone(obj[key]);
		}
	}    

	return temp;
}

//var objToCreate = JSON.parse(JSON.stringify(cloneThis));