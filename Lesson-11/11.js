Задание 1:
Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}

function transformToObject(arr) {
    return arr.map(function(user) {
        return {name: user};
    });
};

console.log( transformToObject( ['Vasya', 'Petya', 'Kolya'] ));


Задание 2:
Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
Для решения использовать перебирающий метод массивов

function transformToCurrentTime(arr) {
    var newArr = arr.reduce(function(prev, current) {
        return prev + ' : ' + current;
    }, 'Текущее время');

    return newArr;
}

console.log( transformToCurrentTime(['00', '13', '24'] ));


Задание 3:
Написать чистую функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
должно быть "топорным"

function findVowels(str) {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    var amountVowels = 0;

    str.toLowerCase().split('').forEach(function(text) {
        vowels.forEach(function(vowel) {
            if (text === vowel) {
                amountVowels++;
            };
        });
    });

    return amountVowels;
};

console.log( findVowels('Шла Саша по шоссе и сосала сушку!') );


Задание 4:
Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
вопросительным знакам - убрав их - разрешается использовать регулярное выражение в методе split).
Для каждого из предложений вывести текст предложения и рядом количество букв в нем (без учета пробелов, запятых
и т.д. - именно букв)

function splitText(str) {
    var newStr = str.split(/[.?!]\s/);

    newStr.forEach(function(item) {
        console.log(item.trim() + '\nКоличество букв - ' + item.split(/[,\s]/).join('').length);
    });

};

console.log( splitText('Регулярные выражения? Они немного странные. Вроде обычные, но с подводными камнями, на которые натыкаются даже опытные разработчики!') );