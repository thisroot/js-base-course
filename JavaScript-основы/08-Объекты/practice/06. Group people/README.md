# Группа людей

## Описание
Напишите функцию, которая группирует массив людей по возрасту.
Функция должна возвращать ассоциативный массив с ключами - возрастом и значениями - массивами с людьми в этих группах.

_Пример:_

```js
var people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 },
  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

var groupedByAge = group(people);
```

- `groupedByAge` must be:

```js
{
  '22': [
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
  ],
  '32': [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 }
  ],
  '42': [
    { firstname: 'John', lastname: 'Doe', age: 42 }
  ],
  '81': [
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 }
  ]
}
```
