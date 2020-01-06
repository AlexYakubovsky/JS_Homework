// Задание 1:

function testEmail(mail) {
    return /^([a-z]{3,10}_[a-z]{3,10}(-\d{4})?@([a-z\d](\.|\-)?){2,20}\.com)$/gi.test(mail);
}

testEmail('name_surname-1234@gmail.com');


// Задание 2:

function testNumber(number) {
    return /^(\+?375|8-?0)-?(25|29|33|44|17)-?[1-9](\d{6}|(\d{2}-?){3})$/gm.test(number);
}

testNumber('+375-25-777-77-77');
testNumber('375299999999');
testNumber('8-044-444-44-44');
testNumber('8033-6666666');


// Задание 3:

function countVowelLetters(text) {
    try {
        return text.match(/[аоиеёэыуюяaeiou]/gi).length;
    } catch(err) {
        return 'В данном тексте нет гласных!'
    }
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');
