var number = parseFloat(prompt('Введите число', ''));
var sumNumber = parseFloat(prompt('Сколько прибавить?',''));
var subNumber = parseFloat(prompt('Сколько отнять от предыдущего результата?',''));
var multiNumber = parseFloat(prompt('На сколько умножить от предыдущего результата?',''));
var divNumber = parseFloat(prompt('На сколько разделить от предыдущего результата?',''));
var result = (number + sumNumber - subNumber) * multiNumber / divNumber;
alert('Формула: ' + number + ' + ' + sumNumber + ' - ' + subNumber + ' * ' + multiNumber + ' / ' + divNumber + '\nРезультат: ' + result);



var admin = prompt('Введите логин','');
if (admin == "Админ") {
  var password = prompt('Введите пароль', '');
  if (password == 'Чёрный Властелин') {
    alert('Добро пожаловать!');
  } else if (password == null) {
    alert('Вход отменён');
  } else {
    alert('Пароль неверен');
  }
} else if (admin == null) {
  alert ('Вход отменён');
} else {
  alert ('Я вас не знаю');
}



var message;
message = (login === 'Вася') ?  'Привет':
  (login === 'Директор') ? 'Здравствуйте':
    (login === '') ? 'Нет логина':
      '';