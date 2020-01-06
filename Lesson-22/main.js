// Задание 7:
{
    const users = [
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ]

    function sortUsers(arr) {
        return ({
            'Пользователи младше 40': usersAge = arr.filter(v => v.age < 40),
            'Пользователь с именем Федор': usersName = arr.find(v => v.name.startsWith('Fedor'))
        })
    }

    sortUsers(users)
}


// Задание 8:
{
    const users = ['Vasya', 'Ivan', 'Fevor'];

    function numberUsers(arr) {
        return arr.map((v,i) => ({[`Пользователь ${++i}`]: v}))
    }

    numberUsers(users)
}


// Задание 9:
{
    const user = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ]

    function combineObj(arr) {
        return arr.reduce((r, v) => Object.assign(r, v), {})
    }

    combineObj(user)
}


// Задание 10:
{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр`
        }

        dailyNorm (amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                throw new Error ('Недопустимое количество корма');
            }

            this._foodAmount = amount;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super(name);
        }

        feed() {
            super.feed();
            console.log('Кот доволен ^_^');
            return this;
        }

        stroke() {
            console.log('Гладим кота.');
            return this;
        }

    }

    let markiz = new Cat('Маркиз');
    markiz.stroke().stroke().feed().feed();
}


// Задание 11:
{
    function showNumbersInRange (num1, num2) {
        return new Promise((resolve, reject) => {
            if ((wholeNum1 = Math.round(num1)) && (wholeNum2 = Math.round(num2))) {
                let timerId = setInterval(() => {
                    if (wholeNum1 === wholeNum2) {
                        clearInterval(timerId);
                        resolve(wholeNum2);
                    }

                    if (wholeNum1 < wholeNum2) {
                        console.log(wholeNum1++);
                    } else {
                        console.log(wholeNum1--);
                    }
                }, 1000);
            } else {
                reject('Введите корректное число');
            }

        })
    }

    showNumbersInRange(8, 11)
        .then(result => console.log(`последнее запомненное число: ${result}`))
        .catch(error => console.log(`Возникла ошибка: ${error}`))
}