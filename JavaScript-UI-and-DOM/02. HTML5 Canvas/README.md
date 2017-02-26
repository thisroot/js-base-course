# The HTML5 Canvas</h1>
## Низкоуровневая графика в веб

### HTML5 холст
- Canvas (хост) это путь к графике  в беб
    - Используется JavaScript для вывода графики
    - Включает высококачественную графику
- Canvas (холст) является частью спецификации HTML5
    - Поддерживается большинством браузеров
        - Как для ПК, так и для мобилных устройств

### Использование Canvas
- Canvas это прямоугольная  таблица
    - Все присование происхоит внутри этой таблицы
- Canvas включает
    - `<canvas>` HTML элемент
    - JavaScript API для рисования

```js
    <canvas id="the-canvas" width="100" height="100" />


    var canvas = document.getElementById('the-canvas');
    var canvasCtx = canvas.getContext('2d');
    canvasCtx.fillRect(10, 10, 30, 30);
```

- Установить ширину и высоту


### HTML5 Canvas контекст
- Canvas преоставляет множество способов для рисования
    - Прямоунольное 2d рисование
    - 3d рисование
    - WebGL рисование
- HTML5 предоставляет API для всех этих типов рисования
 - Способ использовать специический API в соответствии с необходимым контекстом

### Применение HTML5 Canvas

### Рисование фигур - Прямые, Дуги, Окружности

# Canvas фигуры
- Canvas позволяет отображать любые виды фигур
    - Прямоугольники, дуги, окружности, линии
- Каждая из этих фигур может:
    - Быть закрашенной сплошным цветом (заливка)
    - Отрисованной только по границам

```js
    var canvas = document.getElementById('the-canvas');
    var canvasCtx = canvas.getContext('2d');
    canvasCtx.fillRect(10, 10, 25, 25);
    canvasCtx.strokeRect(10, 10, 25, 25);
```

# Рисование прямоугольников
- Рисование прямоугольников - это самый простой способ рисования в canvas
    - Встроенный функционал
    - `context.fillRect (x, y, width, height)`
        - Создает прямоугольную фигуру в позиции (x, y) от левого верхнего края холста
        - Фигура рисуется полноцветной
    - `context.strokeRect (x, y, width, height)` <!-- .element: style="font-size: 0.9em" -->
        - То же что и fillRect
        - Отрисовываются только границы

- Нарисовать прямоугольник залить светло-синим с темно-синими границами

```js
  <pre><code><canvas id="rects-canvas"> </canvas></code></pre>
  <pre><code>var canvas = document.getElementById('rects-canvas'),
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(107, 187, 201)';
  ctx.strokeStyle = 'rgb(2, 55, 155)';
  ctx.fillRect(20, 20, 140, 90);
  ctx.strokeRect(20, 20, 140, 90);</code></pre>
```


## Рисование дуг и линий

- В холсте могут рисоваться фигуры более сложные чем прямоугольники
    - Кривые Безье, элисоиды, дуги
    - Могут вырисовываться траектории отображения точек
- Путь это просто последовательность точек
    - В зависимости от используемого метода, точки могут соединяться  между собой с использованием прямых линий или кривых

- Контекст холста содержит несколько методов для рисования путей:
    - beginPath()
        - Начало пути
    - `moveTo(x, y)`
        - Изменение пути у маркера пути
    - `lineTo(x, y)`
        - Рисование прямой линнии от точки расположения маркера до позиции (x, y)
    - `fill()` / `stroke()`
        - Закрашивается линию пути

# Как это работает?
- Холст маркирует точки, которые распложены в таблице холста
    - And remembers how these dots are connected
    - И запоминает как эти точки соединяются
    - Когда вызывается метод `fill()` или `stroke()`, все точки соединяются вместе

<img src="imgs/canvas-path-demo.png" height="330px" style="float:right; margin-top: -10px; margin-left:15px"/>

    ctx.beginPath();
    ctx.lineTo(200, 50);
    ctx.lineTo(50, 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(200,300);
    ctx.lineTo(50, 300);
    ctx.closePath();
    ctx.fill();

# Рисование окружностей
- The Canvas has a built-in methods for drawing ellipses
- Холст имеет методы для рисования окружностей
- arc(x, y, радиус, от, до, counterclockwise)
- Draws a circle with center at (x, y) from position "from" to position "to"
- Рисует окружность с центром в точке (x,y) со стартовой позиции до конечной
- Positions in ellipses are described using radians (degrees)
- Позиции в окружностях определяются в радианах (градусах)
- Формула перевода градусов в радианы следующая:
    - **`radians = degrees * PI/180`**

# Градусы и радианы
<div style="text-align: center; padding-top:5px">
    <img src="imgs/degrees-radians.png" width="600px"/>
</div>


- To draw ellipses, a path must be started:
```js
            ctx.beginPath();

        - Draw a full circle:

            //clockwise
            ctx.arc(x, y, r, 0, 2- Math.PI);
            //counter clockwise
            ctx.arc(x, y, r, 2- Math.PI, 0, true);

        - Draw a segment of an ellipse:

            //The smaller part (clockwise)
            ctx.arc(x, y, r, Math.PI/2, 2- Math.PI);

            //the bigger part (counterclockwise)
            ctx.arc(x, y, r, Math.PI/2, 2- Math.PI, true);
```


# Рисование секторов окружностей

- Сектор окружности это часть дуги окружности замыкающаяся двумя радиусами
- Холст имеет несколько методов для создания секторов окружностей
   - Тем не менее холст так же поддерживает рисование путями
- Сектор окружности может быть получен созданием секора и линиями из центра окружости к его крайним точкам

<div style="text-align: center">
    <img src="imgs/drawing-ellipses-sector-small.png" width="250" style="margin-right:20px"/>
    <img src="imgs/drawing-ellipses-sector-big.png" width="250" />
</div>


- **context.closePath()** соединяет начальную и конечную точки пути

    function drawSector(x, y, r, from, to, isCounterClockwise) {
      ctx.beginPath();
      ctx.arc(x, y, r, from, to, isCounterClockwise);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
    }

# Рисование кривых

- The Canvas supports two types of curves:
- Холст поддерживает два способа рисования кривых
    - **Квадратичные** кривые
        - Простое рисование кривой основанное на контрльной точке
    - Кривые **Безье**
        - A more complex curve based on two control points
        - Более комплексный подход, основанный на двух контрольных точках
- Оба типа кривых могут быть получены с помощью рисованием путей


# Квадратичные кривые
- Quadratic curves are basic curves
- Квадратичные кривые являются базовыми кривыми
    - Применяются **две точки контекста** и **контрольная точка**
        - The first is the last point from the path (sx, sy)
        - The second is the one from the curve (cx, cy)
    - `context.quadraticCurveTo(cx, cy, ex, ey)`

<div style="text-align: center">
    <img src="imgs/qudratic-curve-sample.png" width="450px" />
</div>


# Кривые Безье
- Кривые Безье подобны квадратичным кривым, только они имеют **две точки контекста** и **две контрольные точки**

<div style="text-align: center; margin-top: 15px">
    <img src="imgs/bezier-curve-sample.png" width="450px" style="border-radius: 15px; border: 1px solid black"/>
</div>

# Рисование текста
- HTML5 холст, так же может **отрисовывать текст**:
    - Методы:
        - `context.fillText (text, x, y)` – заполнить цветом пространство текста
        - `context.strokeText (text, x, y)` – заполнить цветом только границы шрифта текста
    - Свойства:
        - `context.font` – устаовить размер и семейство шрифта
        - `context.fillStyle` – цвет заливки шрифта
        - `context.strokeStyle` – цвет границ шрифта

- Вывести текст 'Курсы Веб программирования'
    - Заполнить **желто-зеленым цветом** , с границами шрифта **темно-зеленого цвета**
    - Семейство шрифтом – `Arial`
    - Размер шрифта от `28px` до `48px`

```js
    var minFontSize = '28';
    var currentFontSize = 48;
    while (minFontSize <= currentFontSize) {
      ctx.font = currentFontSize + 'px ' + 'Arial';
      ctx.fillText(text, x, y);
      ctx.strokeText(text, x, y);
      y += currentFontSize + offset;
      currentFontSize -= 4;
    }
```

<img class="fragment" src="imgs/drawing-text-demo.png" width="300" style="position: absolute; top: 30%; left: 70%" />

# Стили холста

- Холст поддерживает два стиля
    - Стили для **заливки** и **контура**
        - Может быть как сплошным цветом, так и паттерном
    - Стили для **отобажения контура**
        - Прерывистая и сплошная

# Трансформации в холстах

- Холст так же может трансформироваться
    - i.e. it can be rotated, scaled or transformed
    - т.е может быть повернутым, растянутым и.т.д
- `context.scale(dx, dy)` – all coordinates and points are scaled
    - `fillRect(X, X, W, H)` will draw a rectangle
    - At position **(dx * X, dy * Y)**
    - With width **(dx* W)** and height **(dy* H)**
- `context.rotate(D)` – all drawing is rotated with angle **D degrees**


# Canvas Per-pixel Manipulation
## Change only portions of the canvas

<!-- attr: { hasScriptWrapper:true } -->
# Canvas Per-pixel Manipulation
- Canvas supports **per-pixel manipulation**
    - All the pixels can be **manipulated one-by-one**
- Use the `context.getImageData(x, y, w, h)` <!-- .element: style="font-size: 40px" -->
    - Returns the image data object
        - The image data is for the rectangle with **top-left corner at (x, y)** with **width w** and **height h**
    - The image data contains **an array of numbers** for each of the pixels

<!-- attr: { hasScriptWrapper:true } -->
# Canvas Per-pixel Manipulation (2)
- The array of pixels holds values between `0` and `255`
    - Each value represents a **color component** from **RGBA**
    - The pixels are grouped in triples in the array
    - The color values for the **i-th pixel** are at positions:
        - `pixels[i]` holds the **RED** component
        - `pixels[i+1]` holds the **GREEN** component
        - `pixels[i+2]` holds the **BLUE** component

<!-- attr: { hasScriptWrapper:true } -->
# Canvas Per-pixel Manipulation: Example
- Invert all the colors of an canvas
    - Change each color component `CC` with `255-CC`

    var i,
        len,
        width = canvas.width,
        height = canvas.height,
        imageData = ctx.getImageData(150, 150, width, height),
        data = imageData.data;
    for(i = 0, len = data.length; i < len; i+=4){
        data[i+1] = 255 - data[i+1];
        data[i] = 255 - data[i];
        data[i+2] = 255 - data[i+2];
    }
    ctx.putImageData(imageData, 0, 0);

<!-- attr: { hasScriptWrapper:true, class:"slide-section" } -->
# Canvas Per-pixel Manipulations
## Live Demo

<!-- attr: { hasScriptWrapper:true, id:"questions" class:"slide-questions" } -->
# The HTML5 Canvas
## Questions
