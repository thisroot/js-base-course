# Форматирование заполнителями

## Описание
- Напишите функцию которая форматирует строку и подставляет значение вместо заполнителей
   - Добавить функцию в **String.prototype**

## вход
- Ввод выглядит так

`` `Js

{ "Name": "Женя", Age: 13}, // переменные в виде JSON массива
Меня зовут #{name} и я # {age} лет "// шаблон

`` `

- _Подсказка_: вы можете использовать `метод JSON.stringify`

## Вывод
- Строка


## Тест

| 	Input								| 					Output					 |
|---------------------------------------------------------------------------------------------------|--------------------------------------------|
| <br>'{ "name": "Женя" }',<br/>"Привет! Тебя зовут #{name}?"<br> 							| 'Привет! Тебя зовут Женя?'				 |
| <br>'{ "name": "Женя", "age": 13 }',<br/>"Меня зовут #{name} и мне #{age} лет"<br>	| 'Меня зовут Женя и мне 13 лет' 	 |
