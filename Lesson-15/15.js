var addRow = document.getElementById('addRow');
var table = document.getElementsByTagName('table')[0];

addRow.addEventListener('click', addString);
table.addEventListener('click', addInput);

function addString() {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td></td><td></td><td></td>';
    table.insertAdjacentElement('afterbegin', tr);
}

function addInput(event) {
    var target = event.target;

    if (target.tagName === 'TD' && target.id !== 'addRow') {
        var input = document.createElement('input');
        input.value = target.innerHTML;
        target.innerHTML = '';
        target.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            target.innerHTML = input.value;
            input.value = '';
        });

        input.addEventListener('keypress', function(event) {
            if (event.keyCode === 13) {
                input.blur();
            }
        });
    }
}