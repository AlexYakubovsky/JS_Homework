function Animal(name) {
    this._name = name;

    var self = this;

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm () + ' корма.');
    };

    var foodAmount = 50;

    function formatFoodAmount () {
        return foodAmount + ' гр';
    };

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50) {
            return 'Должно быть больше чем 50 гр.'
        }

        if (amount > 500) {
            return 'Должно быть меньше чем 500 гр.'
        }

        foodAmount = amount;
    }
}

function Cat(name) {
    Animal.apply(this, arguments);

    var parentEnable = this.feed;
    this.feed = function() {
        parentEnable();
        console.log('Кот доволен ^_^' );
        return this;
    }

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    }
}

var markiz = new Cat('Маркиз');
markiz.stroke().stroke().feed().feed().stroke().feed().stroke();