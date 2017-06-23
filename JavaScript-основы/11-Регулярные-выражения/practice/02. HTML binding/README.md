# Связывание HTML

## Описание

- Написать функцию которая заносит значение объекта в контент/атрибуты HTML-тегов.
   - Добавить функцию в `String.prototype` и использовать ее следующим образом:

```js
var html = '<div data-bind-content="name"></div>';
var data = { name: 'Pesho' };

var result = html.bind(data);
```

## Ввод
- Должен выглядить так

```js
[
	'{ name: "Steven" }',
	'<div data-bind-content="name"></div>'
]
```

## Вывод
- Строка.

## Условия
- HTML-теги могут иметь другие атрибуты. Другие атрибуты, если таковой имеется, всегда идут после  `data-bind-*`
  - _Пример_: `'<a data-bind-content="songName" href="https://www.youtube.com/watch?v=84m4hjF39A4"></a>`
- Не должно быть дублирования атрибутов для связывания
  - **Не допустимо**: `['{ "name": "Лера", "os": "linux" }', '<Лера data-bind-os="os" data-bind-name="Лера" data-bind-os="os"/>'`
  - **Не допустимо**: `['{ "name": "Лера" }', '<Лера data-bind-name="name" name="Лера"/>']`
- Входные строки не должны содержать более 500 символов


## Тесты

#### Тест 1
```js
[
	'{ "name": "Алексей" }',
	'<div data-bind-content="name"></div>'
]
```

#### Ввод 1
```html
<div data-bind-content="name">Алексей</div>
```

#### Вывод 1

```js
[
	'{ "name": "Елена", "link": "http://www.unn.ru/" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]
```

#### Вывод 1

```html
<a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://www.unn.ru/" class="Елена">Елена</а>
```
