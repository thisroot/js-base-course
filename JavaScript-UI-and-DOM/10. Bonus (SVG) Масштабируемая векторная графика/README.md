# Scalable Vector Graphics
## Поднобно Canvas но красивее и медленнее</h2>

### SVG обзор
- SVG это технология для вывода двумерной векторной графики
    - Использует XML расширение
- SVG платформо независимая технология
    - Поддерживается многими браузерами

### Обзор Векторной графики
- Векторная графика основывается на математических выражениях
    - The same on any resolution and zoom level and are not pixelated
    - При любом разрешении и увеличении изображения оно не пикселизуется
- Содержит геометрические примитивы, такие как:
    - Точки
    - Линии и кривые
    - фигуры и полигоны
- Представляет изображения в компьютерной графике

### Использование SVG в веб браузере
- Для использования SVG необходимо просто открыть svg элемент и инициализировать изображения посредством описания их через XML

<svg width="300" height="200">
<rect x="50" y="50" width="150" height="150" fill="lightblue" />
<circle cx="125" cy="125" r="60" stroke="none" fill="darkblue" />
</svg>

```js
<svg width="300" height="450">
<rect x="50" y="50" width="150" height="150" fill="lightblue" />
<circle cx="125" cy="125" r="60" stroke="none" fill="darkblue" />
</svg>
```

### SVG фигуры
- Как упомяналось выше, векторная графика состоит из графических примитивов
    - Точек
    - Линий и кривых
    - Фигур: прямоугольников, окружностей и.т.д.
- SVG поддерживает большинство основных фигур
    - Более сложные фигуры строятся из совокупности определенных простых фигур

- `<line>` самая примитивная фигура
- Создается линия между 2 точками
    - **Линии** определяются начальной и конченой точками
    - Каждая точка имеет координаты: `(x, y)`


<svg width="300" height="450">
    <line x1="0" y1="0" x2="300" y2="450" stroke="black" />
    <line x1="300" y1="0" x2="0" y2="450" stroke="black" />
    <line x1="0" y1="150" x2="300" y2="150" stroke="black" />
    <line x1="0" y1="300" x2="300" y2="300" stroke="black" />
    <line x1="0" y1="150" x2="300" y2="300" stroke="black" />
    <line x1="0" y1="300" x2="300" y2="150" stroke="black" />
</svg>

```js
    <line x1="0" y1="0" x2="300" y2="450" stroke="black" />
    <line x1="300" y1="0" x2="0" y2="450" stroke="black" />
    <line x1="0" y1="150" x2="300" y2="150" stroke="black" />
    <line x1="0" y1="300" x2="300" y2="300" stroke="black" />
    <line x1="0" y1="150" x2="300" y2="300" stroke="black" />
    <line x1="0" y1="300" x2="300" y2="150" stroke="black" />
```

- `stroke` устанавливает **цвет** линии


### Прямоугольники и окружности

- `<rect>` создает прямоугольник от **верхнего левого угла**, **шириной** и **высотой**
- `<circle>` создает окружность с  **ценральной позицией** и **радиусом**


<svg width="300" height="300">
  <rect x="10" y="10" width="280" height="280" fill="#222"></rect>
  <circle cx="150" cy="150" r="135" fill="#333"></circle>
  <rect x="55" y="55" width="190" height="190" fill="#444"></rect>
  <circle cx="150" cy="150" r="95" fill="#555"></circle>
  <rect x="85" y="85" width="130" height="130" fill="#666"></rect>
  <circle cx="150" cy="150" r="65" fill="#777"></circle>
  <rect x="105" y="105" width="90" height="90" fill="#888"></rect>
  <circle cx="150" cy="150" r="45" fill="#999"></circle>
</svg>

```js
<rect x="10" y="10" width="280" height="280" fill="# 222"/>
<circle cx="150" cy="150" r="135" fill="# 333"/>
<rect x="55" y="55" width="190" height="190" fill="# 444"/>
<circle cx="150" cy="150" r="95" fill="# 555"/>
<rect x="85" y="85" width="130" height="130" fill="# 666"/>
<circle cx="150" cy="150" r="65" fill="# 777"/>
<rect x="105" y="105" width="90" height="90" fill="# 888"/>
<circle cx="150" cy="150" r="45" fill="# 999"/>
```

### SVG контура

- SVG могут рисовать более сложные фигуры чем базовые формы
    - Создает прямую линию от начальной до конечной точки
    - Создает кривую меджу двумя точками
    - Использует элемент `<path>`
        - **Добавляет команду** и  **точки** в линию используя атрибут `"d"`

```js
<path d="M 50 50 L 175 310 H210"></path>
```

### Команды
- Команды для контура определяются:
    - `M x y` or `m x y`
        - **Переместить** маркер контура с  **позицией (x, y)**
    - `L x y` or `l x y`
        - Создает **прямую линию** между **меркром** и точкой **point (x, y)**
    - (`H x` or `h x`) and (`V y` or `v y`)
        - Создание **горизонтальной**/**вертикальной** линии от **меркера** до **выбранной точки**
    - `Z` or `z`
        - **Завершение контура**, соединяет первую и последнюю точи контура


- Нарисовать букву **"R"**

```js
    <path stroke="yellowgreen" fill="green"
        d="M 475 50 V 150 M 475 50 H 525 L 550 75 V 100 H 475 L 550 150" />
```

- Нарисовать букву **"E"**

```js
  <path stroke="yellowgreen" fill="none"
     d="M 375 50 H 450 M 375 50 V 150 H 450 M 375 100 H 430" />
```

### Кривые
- `C x1 y1 x2 y2 x y`
    - Квадратная кривая Безье
    - **Две контрольные** точки: `(x1, y1)` и `(x2, y2)`
    - **Завершающая точка** `(x, y)`
    - `S x2 y2 x y` продолжение кривой
- `Q x1 y1 x y`
    - Квадратичная кривая Безье
    - **одна контрольная точка** point: `(x1, y1)`
    - **Завершающая точка** `(x, y)`
    - `T x y` продолжает кривую


- Кубическая кривая Безье:

```js
    <path d="M50 200 C60 450 145 300 200 200 S225 50 300 200" />
```

- Квадратичная кривая Безье:

```js
    <path d="M350 200 Q360 450 400 200 T525 200" />
```

<svg width="900" height="450">
  <g>
    <rect x="90" y="345" width="140" height="40" fill="purple" stroke="black">				</rect>
    <text x="100" y="370" fill="white">Кубичская кривая Безье</text>
    <path stroke="purple" fill="none" stroke-width="5" d="M50 200 C60 450 145 300 200 200 S225 50 300 200"></path>
  </g>
  <g>
    <rect x="360" y="345" width="165" height="40" fill="green" stroke="black">				</rect>
    <text x="370" y="370" fill="white">Квадратичная кривая Безье</text>
    <path stroke="green" fill="none" stroke-width="5" d="M350 200 Q360 450 400 200 T525 200"></path>
  </g>
</svg>


### SVG DOM API

- SVG явяляется старым, добрым XML
    - SVG элементы **могут быть выделены** просто как DOM элементы
    - `getElementsByXXX(…)` и `querySelector(…)`
    - SVG элементы могут **создаваться динамический**
        - `document.createElement('rect')`

```js
    var svgNS = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgNs, 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    document.getElementById('the-svg').appendChild(rect);
```

### SVG стили
- SVG могут быть стилизованы с помощью CSS

```js
<pre style="width:40%; display: inline-block; margin-right: 5px">
  <code><!-- SVG -->
    <svg id='the-svg' …>
      <rect … />
      </rect>
      <circle … />
    </svg>
  </code>
</pre>
<pre style="width:40%; display: inline-block; margin-right: 5px">
  <code>/* CSS */
    # the-svg rect{
      fill: white;
      stroke: purple;
      stroke-width: '5';
    }
  </code>
</pre>

```

<div><img src="imgs/svg-styles-sample.png" height="250" class="fragment"/></div>
