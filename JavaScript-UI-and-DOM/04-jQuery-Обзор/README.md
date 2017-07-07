# jQuery обзор
## Познаем силу jQuery

### Что такое jQuery?
- jQuery это кроссбраузерная JavaScript библиотека 
  - Спроектирована для облегчения разработки скриптов на стороне клиента HTML
  - Самая популярная JavaScript библиотека на сегодняшний день
  - Свободно распространяемое программное обеспечение
- jQuery's синтаксис спроектирован, так чтобы максимально облегчить
  - Навигацию по документу и выбор DOM элементов
  - Создания анимаций
  - Обработчиков событий

- jQuery так же ползволяет писать плагины, осуществляющие:
  - Низкоуровневую интерактивность и анимации
  - Продвинутые эффекты и тематические виджеты
  - Создания мощных динамических веб страниц
- Microsoft адаптировал jQuery для работы в Visual Studio
  - Используется в Microsoft's ASP.NET AJAX Фреймворк и ASP.NET MVC Фреймворк

### Почему jQuery так популярен?
- Легкость изучения
  - Свободный стиль программирования
- Легко расширяемая
  - Вы создаете новые jQuery плагины использующие JavaScript функции
- Мощная система DOM селекторов
  - Разработано под CSS 3.0
- Легковесная
- Большое сообщество разработчиков

### Добавляем jQuery на веб страницу?
- Скачиваем JQuery с сайта [jquery.com](http://www.jquery.com)
- Размещаем на своем хостинге
  - Вы можете выбрать для размещения файлы с расширением **.js**
  - К примеру **jquery-3.1.0.js** или **.min.js**
- Использовать CDN (content delivery network)
  - Microsoft, jQuery, Google CDNs
  - пример [code.jquery.com/jquery-3.1.0.min.js](https://code.jquery.com/jquery-3.1.0.min.js)
  - [ajax.microsoft.com/ajax/jquery/jquery-3.1.0.min.js](http://ajax.microsoft.com/ajax/jquery/jquery-3.1.0.min.js)

### Селекторы
- Выборка DOM элементов в jQuery очень проста, почти как в JavaScript
  - Выборка элементов использует CSS селекторы
  - Подобно querySelectorAll

```javascript
$(selector)
```

```javascript
//по тегу
$("div") //document.querySelectorAll("div");
//по классу
$(".menu-item")
//document.querySelectorAll(".menu-item");
//по id
$("#navigation")
//по комбинации селекторов
$("ul.menu li")
```

### Селекторы в jQuery
- Выбирать элемены с помошью jQuery
  - Можно выбирать как один так и коллекции элементов
  - Монжо сохранять в переменной и манипуляровать по своему усмотрению
  - Методы одинаковы как для работы поэлементно так и для работы с коллекциями
- Узнать больше можно: [learn.jquery.com](http://learn.jquery.com/using-jquery-core/selecting-elements)

```javascript
// Выбрать элемент
$("#something").hide();
$(".widgets").fade(1);
```

### Обход DOM дерева
- Как и в JavaScript, DOM дерево можно обойти с помощью jQuery
  - Все что угода:
    - Следующие и предыдущие соседи
    - Родители и потомки

### Обход DOM: Следующие и предыдущие
- `jQuery.next()`, `jQuery.prev()`
  - Возвращает следующий или предыдщий элемент
  - Возвращает HTML элемент
    - Не `[текст]`, а  `[узел]`

```js
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
```js
var $first = $("li").first();
log($first);
//Выведет "Item 1"
log($first.next());
//Выведет "Item 2"
```
### Обход DOM: Родительский элемент
- `jQuery.parent()`
  - Возвращает родительский элемент
- `jQuery.parents(selector)`
  - Возвращает ближайшего предка, который удовлетворяет условию в селекторе

```html
<div id="wrapper">
 <ul id="items-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li class="special">Item 3</li>
  <li>Item 4</li>
 </ul>
</div>
```

```javascript
var $node = $(".special");
$node.parent().attr("id"); //выведет "items-list"
$node.parents("div").attr("id"); //Выведет "wrapper"
$node.parents("#wrapper").attr("id"); //Выведет "wrapper"
```

### Добавление элементов
- Добавляет элементы налету
  - `jQuery.appendTo()`/`prependTo()`
  - `jQuery.append()`/`prepend()`

```js
$("<ul><li>Hello</li></ul>").appendTo("body");
$("body").prepend("<h1>header</h1>");
```
- Создание элементов так же достаточно просто

```js
var $divElement = $('<div>');
var $anotherDivElement = $('<div />');
```

### Удаление элементов
- Вы так же можете удалять элементы DOM
  - Очень просто

```html
// Before
<div>
  <p>Red</p>
  <p>Green</p>
</div>
```
```javascript
// удалить элементы
$('p').remove();
```

- После этого будет так:

```html
<div>
</div>
```
### jQuery объекты
- Выбранные с помошью jQuery DOM элементы не являются чистыми DOM элементами
  - Они расширены
  - Имеют дополнительные методы и свойства
    - `addClass()`, `removeClass()`, `toogleClass()`
    - `on(event, callback)` для добавления событий
    - `animate()`, `fade()`, и.т.д.

```js
// Взять DOM элемент в JQuery
var content = document.createElement("div");
var $content = $(content);
```

### Свойства jQuery элементов
- jQuery элемент расширяет стандартный DOM элемент
- Методы для редактировая элемента
  - `jQuery.css("color", "#f3f")`
  - `jQuery.html()` возвращает innerHTML
    - `jQuery.html(content)` устанавливает innerHTML
  - `jQuery.text(content)` устанавливает в innerHTML, содержимое

### jQuery события
- jQuery наделен удобным способом для установки и деактивации событий
  - работает во всех браузерах
  - используя методы **on()** и **off()**

```javascript
function onButtonClick(){
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
}

$("a.button").on("click", onButtonClick);
```

- Оптимизация событий
  - Добавить событие к родительскому элементу
  - Немного отличающийся синтаксис

```javascript
function onListItemClick(){
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
}

$("ul").on("click", "li", onListItemClick);
```

### jQuery цепочки методов
- Парадигма цепочек методов означает:
  - Если метод возвращает **результат** -> Ok, возвращается   **результат**
  - Если метод **ничего не возвращает** результатом будет -> сам элемент **this**
- jQuery использует эту парадигму:

```javascript
$('<button>')
  .addClass('btn-success')
  .html('Нажми для доступа')
  .on('click', onSuccessButtonClick)
  .appendTo(document.body);
```

### jQuery AJAX
- **AJAX** означает **A**synchronous **J**avaScript **a**nd **X**ML (Асинхронный JavaScrit и XML)
  - Означает асинхронное получение данных с удаленного ресурса и динамический рендер
- jQuery имеет несколько методов для AJAX
  - `jQuery.ajax(options)` – HTTP запрос с полным контролем (заголовки, данные, методы, и.т.д.)
  - `jQuery.get(url)` – HTTP GET запрос
  - `jQuery.post(url)` – HTTP POST запрос
  - `jQuery(selector).load(url)` – загрузска содержимого непосредственно в выбранный элемент
