let score = 4;

switch (false) {
  case !!score: console.log("Переменная не существует"); break; // true when score is NaN
  case !(score < 2 || score > 6):
    console.log('Неправильная оценка'); break;
  case !(score < 3.5):
    console.log('Плохая оценка' + score); break;
  case !(score < 4.5):
    console.log('Хорошая оценка ' + score); break;
  /* case for score < 5.5 */
  default:
    console.log('Превосходная оценка ' + score); break;
}