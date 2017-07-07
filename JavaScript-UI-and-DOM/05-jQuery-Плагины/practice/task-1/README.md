# jQuery Plugins

## Задание 1
Создать выпадающий список для выбора значения.


* _Пример:_
  * Существующий HTML:

```html
          <select id="the-select">
            <option value="value-1">Option 1</option>
            <option value="value-2">Option 2</option>
            <option value="value-3">Option 3</option>
            <option value="value-4">Option 4</option>
            <option value="value-5">Option 5</option>
          </select>
```
  * JavaScript:


```js
          dropdownList('#the-select');
```

  * Создать нижеследующее и прикрепить события:


```html
          <div class="dropdown-list">
            <select style="display: none;">
              <option value="value-1">Option 1</option>
              <option value="value-2">Option 2</option>
              <option value="value-3">Option 3</option>
              <option value="value-4">Option 4</option>
              <option value="value-5">Option 5</option>
            </select>
            <div class="current" data-value="">Option 1</div>
            <div class="options-container" style="position: absolute; display: none;">
              <div class="dropdown-item" data-value="value-1" data-index="0">Option1</div>
              <div class="dropdown-item" data-value="value-2" data-index="1">Option 2</div>
              <div class="dropdown-item" data-value="value-3" data-index="2">Option 3</div>
              <div class="dropdown-item" data-value="value-4" data-index="3">Option 4</div>
              <div class="dropdown-item" data-value="value-5" data-index="4">Option 5</div>
            </div>
          </div>
```
