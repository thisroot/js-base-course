# https://vk.com/javascriptnn



# HTML шаблоны

## Задание 1 - Просто таблица

- Определить функцию, которая устанавливает шаблон внутри предоставленного элемента.
   - Шаблон должен генерировать таблицу с классом `.items-table`, следуя правилам:
     -  **Объект данных** предоставляется и содержит два свойства:
       - `headers` - массив строк, который должен использоваться в шаблоне для генерации заголовков таблицы
       - `items` - массив объектов, где каждый объект имеет ключи` col1`, `col2` и` col3`

  - _Пример:_
    - имеем:
```js
data = {
  headers : ['Vendor', 'Model', 'OS'],
  items : [{
    col1: 'Nokia',
    col2: 'Lumia 920',
    col3: 'Windows Phone'
  }, {
    col1: 'LG',
    col2: 'Nexus 5',
    col3: 'Android'
  }, {
    col1: 'Apple',
    col2: 'iPhone 6',
    col3: 'iOS'
  }]
};
```
  - шаблон должен генерировать:
```html
<table class="items-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Vendor</th>
      <th>Model</th>
      <th>OS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>Nokia</td>
      <td>Limia 920</td>
      <td>Windows Phone</td>
    </tr>
    <tr>
      <td>1</td>
      <td>LG</td>
      <td>Nexus 5</td>
      <td>Android</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Apple</td>
      <td>iPhone 6</td>
      <td>iOS</td>
    </tr>
  </tbody>
</table>
```

## Задание 2 - Бэтмен и Животные

- Определить функцию, которая создает div, содержащий список с животными
   - Многие элементы имеют классы, см. Их в примере
   - div должен содержать 2 элемента:
     - `h1`, который всегда имеет содержимое `Животные`,
     - `ul` со многими `li`
   - Каждый элемент `li` имеет один элемент - ссылку (` <a> `)
     - ссылка имеет href и содержание
     - href ссылки может исходить от **объекта данных** или если он отсутствует, всегда указывает URL-адрес по умолчанию
       - URL-адрес по умолчанию: «http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg»
     - Содержание ссылки всегда построено из **объекта данных**, но отличается, если href доступен или нет:
       - Если доступно href, содержимое должно быть 'name'
       - В противном случае контент должен быть «Нет ссылки для 'name', вот Бэтмен!»

  - _Пример:_
    - имеем:
```js
var data = {
  animals: [{
   name: 'Lion',
   url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
  }, {
   name: 'Turtle',
    url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
  }, {
    name: 'Dog'
  }, {
    name: 'Cat',
    url: 'http://i.imgur.com/Ruuef.jpg'
  }, {
    name: 'Dog Again'
  }]
}
```
  - Должно получиться:
```html
<div class="container">
  <h1>Animals</h1>
  <ul class="animals-list">
    <li>
      <a href="https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg">Lion</a>
    </li>
    <li>
      <a href="http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg">Turtle</a>
    </li>
    <li>
      <a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">Нет ссылки для Dog, вот Бэтмен!</a>
    </li>
    <li>
      <a href="http://i.imgur.com/Ruuef.jpg">See a Cat</a>
    </li>
    <li>
      <a href="http://cdn.playbuzz.com/cdn/3170bee8-985c-47bc-bbb5-2bcb41e85fe9/d8aa4750-deef-44ac-83a1-f2b5e6ee029a.jpg">Нет ссылки для Dog again, вот Бэтмен!</a>
    </li>
  </ul>
</div>
```


## Задача 3 - ЛистПредставлений
- Создайте плагин jQuery для ЛистПредставлений
   - Применить шаблон для каждого элемента коллекции
   - Используя атрибут data-template, задайте идентификатор шаблона, который будет использоваться для элементов
   - Должен работать с различными коллекциями и шаблонами


  - _Пример:_
    - Имеется HTML:
```html
<ul id="books-list" data-template="book-item-template"></ul>
<script id="book-item-template" type="…">
  <li class="book-item">
    <a href="/#books/{{id}}">
      <strong>{{title}}</strong>
    </a>
  </li>
</script>
```
  - Вызываем:
```js
$('#books-list').listview(books);
```
  - Должно генерировать:
```html
 <ul id="books-list" data-template="book-item-template">
  <li class="book-item">
    <a href="/#books/1">
      <strong>JavaScript: The Good Parts</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/2">
      <strong>Secrets of the JavaScript Ninja</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/3">
      <strong>Core HTML5 Canvas</strong>
    </a>
  </li>
  <li class="book-item">
    <a href="/#books/4">
      <strong>JavaScript Patterns</strong>
    </a>
  </li>
 </ul>
```
