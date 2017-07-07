# Событийная модель
##  Тачскрин, Мышь, Клавиши

### JavaScript Событийная модель

- Событийная модель DOM позволяет пользователю взаимодействовать с элементами
- Событийная модель DOM содержит события и слушатели событий прикрепленные к DOM обьектам

### Event Types

- DOM позволяет устанавливать общие типы событий, которые используются в 99% случаев
    - События **Мыши**
    - События **Тачскрина**
    - События **Форм**
    - События **Клавиатура**
    - События **DOM**
- Полный лист типов событий:
    - http://www.w3.org/TR/DOM-Level-3-Events/#event-types-list
- Кроме того, Вы можете устанавливать собственные типы событий

### Общие типы событий

| **События мыши** | **События тачскрина** | **События клавиатуры** |
| :--------------: | :-------------------: | :--------------------: |
| `click`          | `tap`                 |  `keypress`            |
| `hover`          | `touchstart`          |  `keydown`             |
| `mouseup`        | `touchend`            |  `keyup`               |
| `mousedown`      | `touchmove`
| `mouseover`      | `touchcancel`
| `mouseout`       | `touchenter`
|                  | `touchleave`

### Общие типы событий

| **UI события**  | **События Фокуса**  |
| :-------------: | :-----------------: |
| `load`          |  `blur`
| `abort`         |  `focus`
| `select`        |  `focusin`
| `resize`        |  `focusout`
| `change`        |
| `input`         |

### Регистрация событий - Обработчики событий
- Регистрация событий производится с помошью **колбэк функций** для **определенных типов событий** и **DOM элементов**
- Три способа регистрации событий:
  - С помошью HTML атрибутов
  - Используя свойства DOM элементов
  - Используя обработчики событий DOM

### Как HTML атибуты

- Обработчики событий могут легко установлены в качестве значения для атрибута обработчика
    - Это значение является чистым JavaScript и не всегда является функцией

```html
<!-- html -->
<button onclick="onButtonClick()">Нажми на меня</button>
```

```js
// js
function onButtonClick() {
  console.log("Вы нажали на кнопку");
}
```

### Регистрация обоработчиков событий с помошью атрибутов

### Используя свойства DOM элементов
- Использовать стандартные DOM события на определенном DOM элементе и присвоить ссылку на функцию
  - функция может быть анонимной

```html
<!-- html -->
<button id="click-button">Нажми на меня</button>
```

```js
//js
var button = document.getElementById("click-button");
button.onclick = function onButtonClick() {
  console.log("Вы нажали на кнопку");
}
```

### Используя слушатели DOM событий

- стандартный способ для прикрепления обработчиков событий к DOM элементам

```js
domElement.addEventListener(eventType, eventHandler, isCaptureEvent);
```

```js
var button = document.getElementById("click-button");
button.addEventListener("click", function () {
  console.log("Вы нажали на кнопку");
}, false);
```

### Обьект событий - Получить данные события

- Обработчики событий имеют доступ к обьекту события переданного в качестве функции как аргумента
- Обьект события содержит следующую информацию:
  - **тип** события
  - **цель** события
  - **ключ который будет передан** когда будет выполнено событие клавиатуры
  - **Нажатая кнопка мыши** когда возникнет событие нажатия клавиши мыши
  - **позицию** курсора мыши на экране

- Объект события доступен в качестве единственного аргумента обработчика функции


```js
function onButtonClick(event) {
  console.log(event.target);
  console.log(event.type);
  console.log(event.clientX, event.clientY);
}
button.addEventListener("click", onButtonClick, false);
```

### Захват и всплытие событий - Цепочка событий
- когда пользователь нажимает на HTML елемент, событие вызывается и для всех его предков

```html
    <html>
      <body>
        <div>
          <button>
            Нажми меня
          </button>
        </div>
      </body>
    </html>
```

- Нажми меня
- Вызвано
- Вызвано
- Вызвано
- Вызвано

- **кнопка все еще является целью**, но событие нажатия вызвало все его родительские элементы
  - Событие вызвалось для всех элементов цепи

```html
  <body onload="onBodyLoad()">
      <div>
          <section>
              <div>
                  <div>
                      <a class="button" href="#">Нажми меня</a>
                  </div>
              </div>
          </section>
      </div>
</body>
```
```js
    function onClick() {
        console.log(this.nodeName);
    }

    function onBodyLoad() {
        var element = document.body;
        while (element) {
            element.addEventListener("click", onClick, false);
            element = element.firstElementChild;
        }
    }
```

### Два типа цепочек событий
- Есть два типа цепочек событий
 - Захват и всплытие
- обработчики **вплытия поднимаются вверх** по цепи
 - Первый вызывает обработчик события на цели
 - После этого его родитель, после этого родитель родителя
- Обработчики **захвата спускаются вниз** по цепи
-  Первым вызывается родительский элемент для всех элементов
 - Последним вызывается тот на котором установлен обработчик

### Захват цепи события
- Захват, спускается вниз по цепи событий
  - Первым вызывается обработчик, на цели являющейся родительским элементом

```js
function onBodyLoad() {
    var element = document.body;
    while (element) {
        element.addEventListener("click", onCaptureClick, true);
        element = element.firstElementChild;
    }
}
```

### Цепочка всплытия событий
- Всплывающие пузырьки по цепи событий
  - Первым запускается обработчик цели на которой устанавливается событие

```js
function onBodyLoad() {
    var element = document.body;
    while (element) {
        element.addEventListener("click", onBubbleClick, false);
        element = element.firstElementChild;
    }
}
```
