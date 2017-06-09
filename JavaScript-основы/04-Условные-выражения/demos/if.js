let vasya = 5,
    petya = 6;

if (vasya < petya) {
    console.log(vasya) // 5
}

let day = 4;

switch (day) {
	case 1: console.log('Понедельник'); break;
	case 2: console.log('Вторник'); break;
	case 3: console.log('Среда'); break;
	case 4: console.log('Четверг'); break;
	case 5: console.log('Пятница'); break;
	case 6: console.log('Суббота'); break;
	case 7: console.log('Воскресенье'); break;
	default: console.log('Ошибка!'); break;
}

let score;

switch (false) {
  case !!score: console.log("Nan"); break; // true when score is NaN
  case !(score < 2 || score > 6):
    console.log('Неправильная оценка'); break;
  case !(score < 3.5):
    console.log('Плохая оценка' + score); break;
  case !(score < 4.5):
    console.log('Хорошая оценка ' + score); break;
  /* case for score < 4.5 */
  default:
    console.log('Превосходная оценка ' + score); break;
}