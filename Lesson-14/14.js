var x = document.getElementById('x');
var y = document.getElementById('y');
var button = document.getElementById('button');
var table = document.getElementById ('table');

x.addEventListener('keyup', checkValues);
y.addEventListener('keyup', checkValues);
button.addEventListener('click', checkTableValues);
table.addEventListener('click', changeColor);
button.setAttribute('disabled', 'disabled');

function checkValues() {
    if (x.value && y.value) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'disabled');
    }
}

function checkTableValues() {
    var valX = +x.value,
        valY = +y.value,
        totalX = '',
        totalY = '';

    if (valX < 0 || valX > 10 || isNaN(valX)) {
        alert ('Вветите значение X от 1 до 10');
        x.value = null;
        checkValues();
    } else {
        totalX = valX;
    }

    if (valY < 0 || valY > 10 || isNaN(valY)) {
        alert ('Вветите значение Y от 1 до 10');
        y.value = null;
        checkValues();
    } else {
        totalY = valY;
    }

    createTable(totalX, totalY);
}

function createTable(tableX, tableY) {
    var table = document.getElementById('table');
    table.innerHTML = '';

    for (i = 0; i < tableY; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (u = 0; u < tableX; u++) {
            var td = document.createElement('td');
            if (i % 2 !== u % 2) {
                td.className = 'black';
            }
            tr.appendChild(td);
        }
    }

    x.value = null;
    y.value = null;
    button.setAttribute('disabled', 'disabled');
}

function changeColor() {
    var td = table.getElementsByTagName('td');

    for (var i = 0; i < td.length; i++) {
        td[i].classList.toggle('black');
    }
}