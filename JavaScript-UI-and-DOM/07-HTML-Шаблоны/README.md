# HTML Шаблоны с помошью Handlebars.js
## Используем JavaScript для шаблонизации!

### HTML Шаблоны
- HTML шаблоны или движки шаблонов:
  - Позволяют делать **HTML динамическим**
    - позволяет программировать логику построения HTML страниц.
  - Предлагает **чистый и стабильный** способ динамического создания DOM элементов
- HTML шаблонизаторов много:
  - Основные: Handlebars.js, mustache.js, underscore.js, jQuery templates
  - Продвинутые: KendoUI, AngularJS

### Обзор Handlebars.js
- **Handlebars.js** является открытым движком для шаблонизации
  - Позволяет делать **исполняемые в реальном времени компилируемые шаблоны** для рендеринга HTML
  - Предлагает **единый путь для савязывания данных** между HTML элементами и JavaScript обьектами
  - Produces HTML code based on **a template** and a given **JavaScript object**

### Установка и использование
- Получить handlerbars.js:
  - Скачать с сайта [handlebarsjs.com](http://handlebarsjs.com)
  - Использовать bower:  `bower install handlebars`
  - добавить скрипт в HTML файл

```js
<script src="path/to/handlebars.js"></ script>
```

- Создать шаблон

```html
<div class='post'>
  <h1 class="post-title">{{title}}</h1>
  <p class="post-content">{{{content}}}</p>
</div>
```
- Отрисовать шаблон с помошью JavaScript:

```js
    var post = {title: '…', content: '…'},
        htmlTemplate = postTemplateNode.innerHTML,
        postTemplate = Handlebars.compile(htmlTemplate),
    postNode.innerHTML = postTemplate(post);
```

### Шаблоны Handlebars.js
- HTML шаблоны формируются подобно функциям `string.Format()` в **C#**, **Java** и `stringWithFormat: @"…"` в **Objective-C**
  - Поместите заполнители в строку шаблона и они будут замещены переданными значениями
- Handlebars.js определяет заполнители с помошью **двойны кавычек** `{{value}}`
  - Когда происходит отрисовка, **заполнители** между двойных фигурных скобок **заменяются переданными значениями**

### Handlebars.js пример
- Создаем шаблон

```html
  <div class="post">
    <h1 class="post-title">{{title}}</h1>
    <p class="post-content">{{content}}</p>
  </div>
```
- Создаем **JavaScript обьект** и отрисовываем его в шаблоне **создавая чистый HTML** код

```js
  var post = { title: ' ... ', content: ' ... ' },
      tmplStr = document.getElementById('...').innerHTML
      template = Handlebars.compile(tmplStr);

  domNode.innerHTML = template(post);
```

### HTML Экранирование
- Handlebars.js удаляет все специальные символы перед выводом шаблона
- Если значения не должны быть экранированы:
    - Используйте **тройные фигурные кавычки** в строке шаблона:

```js
{{{value}}}
```
- Помечаем значение для того, **чтобы не экранировать содержимое**

```js
   var post = { title: '…',
       content: new Handlebars.SafeString('…')
   };
```
### Handlebars блоки и  выражения
- Handlebars.js поддерживает выражения в шаблонах
  - Выражения блоков
    - Для обхода по коллекции элементов
  - Условные выражения

### Блочные выражения
- Блочные выражения применяются длля обхода по коллеции объектов (подобно массивам)
  - Создается используя <br>`{{#collection}}` и `{{/collection}}`
    - Все что находится между этими тегами будет разбираться по каждому объекту этой коллекции

```html
  <ul class="categories-list">
    {{#categories}}
      <li class="category-item">
        <a href="#/categories/{{id}}">{{name}}</a>
      </li>
    {{/categories}}
  </ul>
```

- id и name по кажому объекту</span>

### Условные выражения
- Рендер фрагмента только если условие выполняется
  - используется `{{#if условие}}` `{{/if}}` или `{{#unless условие}} {{/unless}}`

```html
  <h1>Posts</h1>
  <ul class="posts">
    {{#posts}}
      <li>
        <strong>
          <a href="# /posts/{{id}}">{{title}}</a>
        </strong>
        {{#if author}}
          <span class="author">by {{author}}</span>
        {{/if}}
      </li>
   {{/posts}}
  </ul>
```

- Если author false подобное значение,  этот участок кода не будет выполнен

### Handlebars.js хелперы

- Handlebars.js хелперы подобны функциям которые выполняются до рендеринга
- Устройство хелперов:
  - `{{#each collection}} {{/each}}`
    - Подобно блочным выражениям только с большим контролем `{{@index}}` and `{{this}}`
  - `{{#with obj}} {{/with}}`
    - Ипользуется чтобы сократить путь для имен свойств
    - Пишите `{{prop}}` вместо `{{obj.prop}}`

### Регистрация собственных хелперов
- Handlebars.js поддерживает расширение функциональности.
  - Используется `Handlebars.registerHelper(…)`;

```js
  Handlebars.registerHelper ('tags', function(tags){
    var html = '<ul class="tags-list">',
        tag;
    for(tag in tags){
      html += '<li class="tag">' + tag + '</li>';
    }
    return new Handlebars.SafeString(html);
  });
```

- SafeString является здесь обязательным компонентом
- В противном случае результат будет экранирован
