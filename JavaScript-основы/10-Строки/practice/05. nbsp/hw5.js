var str = 'hello world and other people';
str = str.replace(new RegExp(" ",'ig'),"&nbsp")
console.log(str);
