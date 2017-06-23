# Анализатор тегов

## Описание
Вам дается текст. Написать функцию которая делает изменения в тексте:

```
<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<orgcase>text</orgcase> does not change casing
```
_Примечание: Регионы могут быть вложенными._

## Ввод
- Строка

## Вывод
- Сктрока

## Примеры тестов

#### Ввод

```js
 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'
```

#### Вывод
```
We are liViNg in a YELLOW SUBMARINE. We doN't have anything else.
```
