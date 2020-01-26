// Задание 1:
{
    let {a, b, ...obj} = {a: 1, b: 2, c: 3, d: 4};
}

// Задание 2:
{
    let name = prompt(`Введите имя`);
    const user = {
        name,
        sayHi() {
            return `Hi ${this.name}!`
        }
    }
    user.sayHi()
}

// Задание 3:
{
    function func({a: x, b: y}, z = 1) {
        return x**y * z;
    }

    func({a: 2, b: 3})
}

// Задание 4:
{
    let arr = [`Alexander`, 23];

    function func(name, age) {
        return (`Hello, I'm ${name} and I'm ${age} years old.`)
    }

    func(...arr);
}

// Задание 5:
{
    function func(...arr) {
        for (let value of arr){
            console.log(value)
        }
    }

    func(1, 2, 3, 4, 5);
}

//     Задание 6:
{
    function countVowelLetters(text) {
        text = text.toLowerCase().split('');

        let counter = 0;
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

        text.forEach(value => vowelLetters.includes(value) && counter++);

        return counter;
    }

    countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12
}