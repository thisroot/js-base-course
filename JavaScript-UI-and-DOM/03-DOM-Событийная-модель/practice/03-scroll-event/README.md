# Задача: Отображение прокрутки

### Задание:
Напишите html + js документ в котором будет размещен прогресс бар, отображающий текущее положение прокрутки от высоты страницы в процентах.

_Примечание_
- задайте фиксированную высоту страницы
- текущее положение скроллинга страницы можно получить функцией `pageYOffset`
- максимальную высоту страницы можно получить с помошью `document.body.scrollHeight - innerHeight;`

### Используйте следующую заготовку

```html
<!DOCTYPE HTML>
<html lang="ru-ru">

<head>
    <meta charset="utf-8">
    <title>Заготовка</title>
</head>

<body>
    <style>
        .progress {
            border: 1px solid blue;
            width: 100px;
            position: fixed;
            top: 10px;
            right: 10px;
        }

        .progress>div {
            height: 12px;
            background: blue;
            width: 0%;
        }

        body {
            height: 2000px;
        }
    </style>
    <header></header>
    <div class="progress">
        <div></div>
    </div>
    <p>Scroll me</p>
    <footer></footer>
    <script>

      // ваш код здесь

    </script>
</body>

</html>

```
