# Фреймворки для графики
## Упрощаем работу с холстам

### KineticJS обзор
- KineticJS это JavaScript framework для работы с холстом
    - Представляет функциональный API для работы с холстом
    - Имеет набор инструментов (сцены, слои) для большей производительности
        - Слои содержат различные наборы объектов, тем самым служат для разделения поведения объектов

### KineticJS установка
- Для того чтобы пользоваться KineticJS:
  - Скачайте (библиотеку)[http://kineticjs.com/] с сайта
  - Добавьте библиотеку в ваш HTML код
```js
<script src="scripts/…/kinetic-vX.X.X.js"></script>
```
  - Создайьте `<div>` элемент с идентификатором, и назначте его в качестве контейнера для Вашего холста
```js
  <div id="canvas-container"></div>
```


- Для использования KineticJS:
    - следуйте инициализирующим инструкциям в нижеприведенном примере:
```js
    function initKinetic(){
        var stage = new Kinetic.Stage({
          container: 'canvas-container',
          width: 450,
          height: 350
        });
        var layer = new Kinetic.Layer();
        var rect = new Kinetic.Rect(options);
        var circle = new Kinetic.Circle(options);
        layer.add (rect);
        layer.add (circle);
        stage.add(layer);
    }
```

### Рисование фигур с помощью KineticJS

- KineticJS позволяет реализовать все стандартные фигуры холста, и даже несколько больше:
  - **Прямоугольники**
```js
rect = new Kinetic.Rect({
  fill: 'yellowgreen',
  stroke: '# CCCCCC',
  x: 250,
  y: 350,
  width: 57,
  height: 93
});
```
  - **Окружности**
```js
circle = new Kinetic.Circle({
  radius: 45,
  fill: 'purple',
  stroke: 'blue',
  strokeWidth: 3,
  x: 450,
  y: 350,
});
```
  - **Прямые линии**
```js
straight = new Kinetic.Line({
points: [x1, y1, x2, y2],
stroke: 'green',
strokeWidth: 2,
lineJoin: 'round'
});
```
  - **Кривые**
```js
  curved = new Kinetic.Line({
points: [x1, y1, x2, y2],
stroke: 'green',
strokeWidth: 2,
tension: 1
});
```

  - **Полигоны**
```js
  polygon = new Kinetic.Line({
    points: [ … ]
    stroke: 'green',
    fill: 'yellowgreen'
    strokeWidth: 2,
    closed: true
  });
```

  - **Капли (Blob)**
  ```js
  blob = new Kinetic.Line({
  points: [ … ],
  stroke: 'green',
  fill: 'purple',
  closed: true,
  tension: 0.5
  });
```
