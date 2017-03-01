# DOM эффективность
## Как писать быстры клиентский JavaScript

### Использование клонирования для подобных элементов
- Используйте `node.cloneNode(true)` (**нативный**) или `$element.clone()` (**jQuery**) для лушей производительности для создания множества объектов
- Только тогда, когда они мало отличаются друг от друга
  - только если они отличаются аргументами `href` и содержимым `innerHTML`
- [Читать больше](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) about `node.cloneNode()`
- [Читать большеп](https://api.jquery.com/clone/) about `$element.clone()`


### Добавление элементов в DOM
- не добавляйте сразу множество элементов по отдельности в  DOM, это вызовет частую перерисовку дерева
- Изменения в DOM вызывают событие перерисовки дерева
  - Добавление и удаление DOM элементов
  - Изменение определенных атрибутов
  - Измененение стилей

- Пример вызова `1000` перерисовок дерева:

```js
var list = document.getElementById('list'),
    count = 1000;

for(var i = 0; i < count; i += 1) {
    var li = document.createElement('li');
    li.innerHTML = 'Item #' + i;
    // каждое добавление перерисовывает дерево
    list.appendChild(li);
}
```

### Фрагменты документов
- Используйте `DocumentFragment` для минимизации количества перерисовок DOM дерева.
  - The following code will trigger a single browser redraws:

```js
var docFragment = document.createDocumentFragment(),
    count = 1000;
// добавить созданный элемент в docFragment
for(var i = 0; i < count; i += 1) {
    docFragment.appendChild(document.createElement('div'));
}
// после этого добавить фрагмент в dom
container.appendChild(docFragment);
```

### Добавление в контейнеы

```js
var $list = $('<ul />');
// не добавляет List в  DOM здесь
// эта часть вызовет большое коичество перерисовок
for(var i = 0; i < count; i += 1){
    $('<li />').text('Item #' + i).appendTo(list);
}

//Добавить в DOM здесь - событие едиорозовой отрисовки
$list.appendTo(container);
```
### Удаление и манипуляции с элементами
- Иногда следует открепить DOM прежде чем манипулировать ими, это убережет от частых перерисовок:

```js
var manyItems = $('#many-items-container').detach();
// открепить элемент от контейнера
// прикрепить элемент оборатно к DOM
manyItems.appendTo(document.body);
```
### Изменение стилей
- Избегать установку инлайн стилей там, где это возможно
  - Добаляйте и удаляйте классы для изменения свойств объектов

```css
.nav-link {
    color: lightblue;
    text-decoration: none;
    font-size: 18px;
}
```

```js
$('#dynamic-menu').find('a').addClass('nav-link');
```

- При установке нескольких свойств в качестве инлайн стиля

```js
// предпочтительный способ
element.style = {
  color: 'blue',
  display: 'inline-block',
  width: '20%',
  margin: '5px'
};

// по сравнению с этим
element.style.color = 'blue';
element.style.display = 'inline-block';
element.style.width = '20%';
element.style.margin = '5px';
```

### Кэширование результатов заппосов
- Если Вы повторно используете одни и те же элементы, кешируйте элемент или свойство
- Предположим что есть панели на странице кнопка, которая скрывает их
  -  **without caching**:
```js
var hidePanelsBtn = document.getElementById('hide-panels-btn');

hidePanelsBtn.addEventListener('click', function () {
    // запрос будет повторяться при каждо нажатии на клавишу
    var panels = document.getElementsByClassName('panel');

    for(var i = 0, len = panels.length; i < len; i += 1) {
        panels[i].classList.add('panel-hidden');
    }
});
```
  - **with caching**:
  - Лучшая производительность - DOM не будет запрашиваться при каждом нажатии на кнопку

```js
// панели кешируются в массив здесь
var panels = [].slice.call(
                  document.getElementsByClassName('panel')),
    hidePanelsBtn = document.getElementById('hide-panels-btn');

hidePanelsBtn.addEventListener('click', function () {
  // Панели доступны из приведенной выше переменной
  // Никаково запроса к  DOM здесь не выполняется
    for(var i = 0, len = panels.length; i < len; i += 1) {
        panels[i].classList.add('panel-hidden');
    }
});
```

### Эффективные селекторы
- CSS слекоры интерпретируются справа налево
  - Следующий код сперва выбирает `li` а затем только те, у кого родители имеют id
 `names-list`

```js
// потенциально очень медленно
var nameItems = document.querySelectorAll('#names-list li');
```

- Для того, чтобы улучшить выше приведенную задачу
  - Нижеприведенный код выбирает элементы по id - очень быстрая операция, а затем извлекает все потомки

```js
var namesList = document.querySelector('#names-list'),
    nameItems = namesList.children;
```

- Попробуйте объяснить следующие выражения (предположим что они должны возвращать один и тот же результат):

```js
$('#some-id .some-class .another-class');

$('#some-id .some-class li.another-class');

$('#some-id').find('.another-class');
```

- Разбор:

```js
// потенциально очень медленно
$('#some-id .some-class .another-class');

// более быстрый но все же очень медленный
// более точный правый селектор
$('#some-id .some-class li.another-class');

// быстрее всего
$('#some-id').find('.another-class');
```

- Избегайте чрезмерно специфических запросов

```js
// очень специфический запрос
$('.navigation ul li a.nav-link');

// гораздо лучше
$('.navigation .nav-link');
```

### Делегация событий
- If many elements inside a common container have the same event, attach the event to the common container
- The following code will attach an event handler to every table element:

```js
// не оптимальное прикрепление множество обработчиков
var calendarButtons = document.getElementById('calendar')
                              .querySelectorAll('td');

for(var i = 0, len = calendarButtons.length; i < len; i += 1) {
    calendarButtons[i].addEventListener('click', function () {
        console.log(this.innerHTML);
    });
}
```

- Данный обработчик будет прикреплять событие к самой панели, а затем делегировать событий каждого элемента таблицы:

```js
// лучше создавать один обработчик
var calendar = document.getElementById('calendar');

calendar.addEventListener('click', function (event) {
    console.log(event.target.innerHTML);
});
```

### одноразовое события
- Когда событие должно быть вызвано только один раз, его обработчик должен быть удален после выполнения
  - Обработчик события должен быть удален с помошью `node.removeEventListener()`
  - Одно разовое событие может быть создано с помошью jQuery - `$element.one()`

```js
someElement.addEventListener('click', function () {
    // логика выполнения

    // этот код удаляет обработчик события
    this.removeEventListener('click', arguments.callee);
});
```

### Частые события
- Такие события как **скроллинг**, **перемещение мыши**, **изменение размера** могут вызываться с большой частотой, если при этом происходят какие либо логические операции, то такой поток вычисления может сильно затормозить систему

```js
document.addEventListener('mousemove', function () {
    console.log('handler executed!');
});
```

- Хорошим решением будет вызывать обработчик после нескольких вызовов или по истечению какого либо интервала

```js
function createIntervalFunction(func, interval) {
    var canExecute = true;

    return function () {
        if(!canExecute)
            return;

        canExecute = false;
        func.apply(this, arguments);

        setTimeout(function () {
            canExecute = true;
        }, interval);
    };
}
```

- Если событие происходит, то обработчик выполняет вычисления каждые `250ms`

```js
var handler = createIntervalFunction(function () {
    console.log('handler executed!');
}, 250);

document.addEventListener('mousemove', handler);
```
