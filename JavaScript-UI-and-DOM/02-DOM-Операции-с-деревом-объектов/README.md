# Манипуляции с DOM деревом
## Создание динамических страниц

### DOM элементы
- **DOM элементы** это JavaScript обьекты которые представляют HTML
    - **Выбранные** используя различные DOM селекторы
    - **Созданные** динамически с помощью кода
- DOM могут быть изменены
    - Эти изменения происходят интерактивно и **немедленно** применяются к DOM, и HTML странице

```js
  //изменение контента в div
  selectedDiv.innerHTML = "changed";
  //изменить заливку div элемента на "#456"
  selectedDiv.style.background = "#456";
  var div = document.createElement("div");
```
### Обход DOM дерева
<img class="slide-image" showInPresentation="true" src="./imgs/01.png" style="left:0;" />

- DOM элементы имеют свойства указывающие на их **позицию** в DOM:
   - Их родительский элемент
   - Их потомки
   - Их соседи
      -  **предыдущий** и **следующий**
- Все эти свойства позволяют делать обход DOM дерева

- `element.parentNode`
    - Возвращает непосредственного **родителя** элемента
    - родитель тега `document` будет null
- `element.childNodes`
    - Возвращает лист (NodeList) **дочерних узлов**
        - Включая **текстовые узлы** (пробельные символы)

- Обход `<ul>` возвращает все `<li>`:

```js
function iterateList (listId) {
    var trainersList = document.getElementById(listId);
    var parent = trainersList.parentNode;
    log("parent of trainers-list: " + parent.nodeName +
        " with id: " + parent.id);

    var children = trainersList.childNodes;
    log("elements in trainers-list: " + children.length);
    log("element in trainers-list");

    for (var i = 0, len = children.length; i < len; i+=1) {
      var subItem = children[i];
      log(subItem.nodeName + " content: " +
          subItem.innerText);
    }
}
```

### Использование именованных элементов в DOM обьекте
- DOM обьект содержит свойства содержащие информацию о его окружении:
    - **первый** и **последний** дочерние узлы
    - Элемент **предыдущий**/**следующий** от выбранного узла
- Эти элементы именуются как:
    - `firstChild` и `lastChild`
    - `nextSibling` / `nextElementSibling`
    - `previousSibling` / `previousElementSibling`

### Манипуляции с DOM

- DOM деревом можно манипулировать динамически с использованием JS
    - HTML может быть **создан**
    - HTML может быть **удален**
    - HTML может быть **изменен**
        - Изменить его содержание
        - Изменить его стиль
        - Изменить его атрибуты

### Создание HTML элементов

- объект `document` содержит метод позволяющий создавать HTML элементы
    - `document.createElement(elementName)`
    - Возвращает обьект с указанным HTML типом

```javascript
  var liElement = document.createElement("li");
  console.log(liElement instanceof HTMLLIElement); //true
  console.log(liElement instanceof HTMLElement); //true
  console.log(liElement instanceof HTMLDivElement); //false
```

- После того как HTML элемент создан, он может быть обработан так как будто он выбран из DOM дерева
- Когда HTML элементы создаются динамически, они просто являются **JavaScript обьектами**
    - Они до сих пор еще не яваляются объектом DOM (содержимым веб страницы)
    - Новый HTML элемент должен быть **добавлен в DOM**

```javascript
  var studentsList = document.createElement("ul");
  var studentLi = document.createElement("li");
  studentsList.appendChild(studentLi);
  document.body.appendChild(studentsList);
```

### Добавление элементов до и после элемента
- DOM API поддерживает добавление элементов до и после выранного элемента
  - `appendChild()` добавляет элемент всегда в конец потомков выбранного элемента
  - `parent.insertBefore(newNode, specificElement)`


### Удаление элементов
- Элменты могут быть удалены из DOM
  - Используется `element.removeChild(elToRemove)`
  - Обратитесь к родительскому элементу для того, чтобы удалить сам элемент

```javascript
  var trainers = document.getElementsByTagName("ul")[0];
  var trainer = trainers.getElementsByTagName("li")[0];
  trainers.removeChild(trainer);
```

```javascript
  //удалить выбранный элемент
  var selectedElement = //выбрать элемент
  selectedElement.parentNode.removeChild(selectedElement);
```

### Редактирование элементов
- DOM элемнты могут быть удалены и / или изменены
  - Все потомки узла или сам узел
- С помошью DOM API каждый DOM элемент может быть отредактирован
  - Изменить свойства
  - Применить изменения

- Помните, что каждый HTML элемент является уникальным в DOM дереве
  - Если JS изменит его вид и свойства, он попрежнему останется тем же элементом

```html
  <div id="f"><p id="the-p">текст</p></div>
  <div id="s"></div>
```

```javascript
  var second = document.getElementById("s");
  var theP = document.getElementById("the-p");
  second.appendChild(theP);
```

```html
  //DOM это:
  <div id="f"></div>
  <div id="s"><p id="the-p">текст</p></div>
```

### Редактирование стиля
- JavaScript так же позволяет менять стиль каждого HTML элемента
  - Это означает что меняются значения атрибута **style**
    - Именно инлайн стили а не CSS

```javascript
  var div = document.getElementById("content");
  div.style.display = "block";
  div.style.width = "123px";
```

# DOM оптимизация
### Добавление DOM элементов
- DOM API имеет методы для добавления DOM элементов к выбранному элементу
  - `appendChild()`
- `parentNode.appendChild(node)`
  - Добавляет DOM элемент `node` к DOM элементу **parentNode**
  - Если **parentNode** будет добавлен в DOM, то  **node** будет то же добавлен

- Добавление элементов в DOM это **очень медленная операция**
  - Когда к DOM добавляется новый элемент происходит **перерисковка DOM дерева**
  - Вновь созданные элементы могут быть добавлены в DOM все вместе
- Здесь это называется `DocumentFragment` элемент
  - Это **атомарный DOM элемент**, без родителей
  - Он используется как **сохраненный и готовый для добавления** со всеми остальными объектами в  DOM

- Применение `DocumentFragment`
  - Добавить элемент в `DocumentFragment`
  - Применить `DocumentFragment` к DOM добавляя только его дочерние элементы

```js
    var dFrag = document.createDocumentFragment();
    dFrag.appendChild(div);

    //добавить больше элементов
    document.body.appendChild(dFrag);
```

### Быстрое создание элементов
- **Создание DOM элементов** это очень медленная операция
  - Создать элемент
  - Установить его **содержимое**
  - Уставновить его **стили**
  - Установить его **атрибуты**

- Создание **динамического листа** элементов
  - Все `<li>` элементы имеют **одинаковые классы**, **стили**, **атрибуты**
  - Отличается только их содержимое
- Можно применять `DomElement.cloneNode(true)`
  - Создание полной копии (глубокое копирование) элемента

```js
    var clonedNode = someElement.cloneNode(true)
```
