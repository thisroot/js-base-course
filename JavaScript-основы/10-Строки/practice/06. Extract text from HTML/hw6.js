var arr = [
  	'<html>',
  	'  <head>',
  	'    <title>Пример сайта</title>',
  	'  </head>',
  	'  <body>',
  	'    <div>текст',
  	'      <div>больше текста</div>',
  	'      и еще больше...',
  	'    </div>',
  	'    на странице',
  	'  </body>',
  	'</html>'
  ]

  Array.prototype.getTextFromHTML = function() {

    let string = "";
    let tmp;
      this.forEach(function(item) {
        if(item.match(/<(.+)>/gi)) {
          tmp = item.match(/>(.+)</gi)
          if(tmp) {
            string += tmp[0].substr(1, tmp[0].length - 2)
          }
        } else {
          string +=item
        }
      })
      return string
  }

  console.log(arr.getTextFromHTML());
