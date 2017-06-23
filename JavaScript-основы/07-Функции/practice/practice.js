function printLogo() {
    console.log("Основы JavaScript");
    console.log("Курсы Веб-программирования");
}

printLogo()

var print = new Function(
    "console.log('Hello')"
);

print();

function pringTriangle(n) {
	  var line;
	  n = +n;

	  for (line = 1; line <= n; line += 1) {
	    printLine(1, line);
	  }

	  for (line = n-1; line >= 1; line -= 1) {
	    printLine(1, line);
	  }
	}

function printLine(start, end) {
	  var line = "",
	      i;
	  start = +start; end = +end;
	  for (i = start; i <= end; i += 1){
	    line += " " + i;
	  }
	  console.log(line);
}

pringTriangle(7)



function getRandomValue(str, start, end){
  start = start || 0;
  end = end || str.length;
  console.log(str,start,end);
}

getRandomValue("привет");
getRandomValue("привет",4);
getRandomValue("Привет",3,5);