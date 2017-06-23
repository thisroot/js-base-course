let vars = {
  name: "Женя",
  age: 13
}

let tmpl = "Меня зовут #{name} и мне #{age} лет"

String.prototype.writeTmpl = function(vars) {

  let str = JSON.stringify(this);

  for (item in vars) {
    var re = new RegExp("#{" + item + "}", 'g')
    str = str.replace(re, vars[item])
  }

  return str
}

console.log(tmpl.writeTmpl(vars))
