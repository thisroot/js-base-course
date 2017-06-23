// сделать с помошью чайнинга

let str =

  'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>.' +
  'We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'

function parseTags(str, tag, modify) {
  if (modify == undefined) {
    modify = function(item) {
      return item;
    }
  }
  // ищем все совпадения внутри тегов
  let arr = str.match(new RegExp("<" + tag + ">(.*?)<\/" + tag + ">", "ig"))
  let res = new RegExp("<" + tag + ">(.*?)<\/" + tag + ">", "i")
  // перебираем массив
  for (item of arr) {
    // выделяем содержимое между тегов
    let substr = item.match(res)
    //заменяем в строке найденное содержимое с тегами
    //тем что между ними и применяем модификатор
    str = str.replace(substr[0], modify(substr[1]));
  }
  return str
}

let tag = "orgcase";

function upper(str) {
  return str.toUpperCase();
}

function lower(str) {
  return str.toLowerCase();
}


str = parseTags(str, "orgcase")
str = parseTags(str, "upcase",upper)
str = parseTags(str, "lowcase",lower)


console.log(str);
