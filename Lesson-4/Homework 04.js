Задание 1:

function pow(x, n) {
  var xResult = x;

  for (var i = 1; i < n; i++) {
    xResult *= x;
  }

  return xResult;
}

var x = +prompt('Введите x');
var n = +prompt('Введите n');

if ( (n < 1) || (parseInt(n) !== n) ) {
  alert('Введите другое число');
} else {
  alert( pow(x, n) );
}

Задание 2:

function sumTo(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
  alert(sumTo(15));

function sumTo(n) {
  if (n === 1) {
    return n;
  } else {
    var sum = n + sumTo(n - 1);
    n--;
    return sum;
  }
}
alert(sumTo(15));

function sumTo(n) {
  return (1 + n) * n / 2;
}
alert(sumTo(15));

3 вариант самый быстрый, т.к. для получения результата достаточно выполнить 3 математические операции
2 вариант самый медленный, т.к. для получения результата используется головная рекурсия с сохранением промежуточных данных
Нельзя. Это обусловлено ограничением максимальной глубины рекурсии


Задание 3:
function treeSum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {

    if ( typeof (arr[i]) === 'number' && !(isNaN(arr[i])) ) {
      sum += arr[i];

    } else if ( typeof(arr[i]) === 'object' && arr[i] !== null && array.length !== null && array.length > 0) {
      sum += treeSum(arr[i]);

    } else {
      sum = 'Ошибка';
      break;
    }
  }

  return (typeof(sum) === 'number') ? sum : 'Массив некорректен!';
}
