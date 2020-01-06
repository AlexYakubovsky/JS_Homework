Задание 1:
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

Задание 2:
for (var i = 2; i <= 10; i+=2) {
  alert(i);
}

for (var i = 1; i <= 10; i++) {
  if (i % 2) continue;
  alert(i);
}

for (var i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

Задание 3:
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

Задание 4:
var arr = [];
while (true) {
  var numbers = prompt('Введите число');
  if (numbers === '' || isNaN(numbers) || numbers === null) break;
  arr.push(+numbers);
}
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
alert('Сумма: ' + sum);

Задание 5:
outer: for (var a = 2; a <= 10; a++) {
  for (var b = 2; b < a; b++) {
    if (a % b == 0) continue outer;
  }
  alert(a);
}