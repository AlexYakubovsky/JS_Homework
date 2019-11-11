Задание 1:
Переписать задачу с использованием перебирающего метода массивов:

function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function(num) {
        return num > 0;
    });

    return newArr;
};

filterNumbersArr([-1, 0, 2, 34, -2]);


Задание 2:
Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число.

function firstPositiveNumber(numbers){
    var positiveNumber = numbers.find(function(num) {
        return num > 0;
    });

    return positiveNumber;
};

firstPositiveNumber([-1, 0, 2, 34, -2]);


Задание 3:
Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).

function isPalindrome(words) {
  return words.toLowerCase() === words.toLowerCase().split('').reverse().join('');
};

console.log(isPalindrome('шалаШ'))
console.log(isPalindrome('привет'));


Задание 4:
Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами (напр. кот и отк).
Регистр в словах учитываться не должен.

function areAnagrams(words, words2) {
    return words.toLowerCase().split('').sort().join('') === words2.toLowerCase().split('').sort().join('');
};

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));


Задание 5:
Написать функцию, которая будет разбивать массив на под-массивы определенной длины.

function divideArr(arr, amount) {
    var newArr = [];

    for (i = 0; i < arr.length; i += amount) {
        newArr.push(arr.slice(i, i + amount));
    };

    return newArr;
};
console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));

