Задание 1:
Переписать предыдущий пример с кошками на прототипный стиль ООП.

function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm () + ' корма.');
};

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50) {
        return 'Должно быть больше чем 50 гр.'
    }

    if (amount > 500) {
        return 'Должно быть меньше чем 500 гр.'
    }

    this._foodAmount = amount;
};

function Cat(name) {
    Animal.apply (this, arguments);
}
Cat.prototype.constructor = Cat;
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.animalFeed = function() {
    Animal.prototype.feed.apply (this, arguments);
    console.log('Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
}


var markiz = new Cat('Маркиз');
markiz.stroke().stroke().feed().feed().stroke().feed().stroke();


Задание 2:
Написать функцию глубокого клонирования объектов. Клонироваться должны значения всех типов данных (+ массивы
и функции), а также любого уровня вложенности. Метод isArray использовать можно.

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
            object3: {}
        },
        method: function() {
            alert('Hello');
    }
};


function deepClone(obj) {
    var newObj;

    if (typeof obj === 'object' && obj !== null) {
        newObj = {};

        for (var key in obj) {
            newObj[key] = deepClone(obj[key]);
        }
        return newObj;
    }

    if (Array.isArray(obj) && obj !== null) {
        newObj = [];

        for (var i = 0; i < obj.length; i++) {
            newObj[i] = deepClone(obj[i]);
        }
        return newObj;
    }

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    return newObj;
};


var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


Задание 3:
Написать функцию глубокого сравнения объектов. Сравниваться должны значения всех типов, а также любого уровня
вложенности. Хорошо протестировать работу функции.

function deepComparison(obj1, obj2) {
    if (obj1 !== obj2 && (typeof obj1 === 'object' && obj2 === 'object') && (obj1 !== null && obj2 !== null)){

        for (var key in obj1) {
            if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key))
                return false;
            }

        for (var key in obj2) {
            if (!deepComparison(obj1[key], obj2[key]))
                return false;
            }
        };
    return true;
}


console.log(deepComparison(initialObj, clonedObj));