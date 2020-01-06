var buttonStart = document.getElementsByTagName('button')[0],
    buttons = document.getElementById('buttons'),
    results = document.getElementById('results'),
    mm = document.getElementsByClassName('mm')[0],
    ss = document.getElementsByClassName('ss')[0],
    msms = document.getElementsByClassName('msms')[0],
    mmCounter = 0,
    ssCounter = 0,
    msmsCounter = 0,
    buttonSave,
    timer;

buttonStart.addEventListener('click', startTimer);
function startTimer(event) {
    var target = event.target;

    if (target.dataset.state === 'start') {
        changeDataset ('stop');

        buttons.insertAdjacentHTML('beforeEnd', '<button class="reset">RESET</button>' +
            '<button class="save">SAVE</button>');

        var buttonReset = document.getElementsByClassName('reset')[0];
        buttonSave = document.getElementsByClassName('save')[0];
        buttonReset.addEventListener('click', resetTimer);
        buttonSave.addEventListener('click', saveTimer);

        timer = setInterval(msmsRun, 10);
    }

    else if (target.dataset.state === 'stop') {
        changeDataset('run');
        clearInterval(timer);
    }

    else if (target.dataset.state === 'run') {
        changeDataset('stop');
        timer = setInterval(msmsRun, 10);
    }
}

function changeDataset(dataState){
    buttonStart.dataset.state = dataState;
    buttonStart.innerText = dataState.toUpperCase();

    return dataState;
}

function msmsRun() {
    ++msmsCounter;
    msms.innerText = getCorrectNumbers(msmsCounter);

    if (msmsCounter == 99) {
        msmsCounter = 0;
        ssRun();
    }
}

function ssRun() {
    ++ssCounter;
    ss.innerText = getCorrectNumbers(ssCounter);

    if (ssCounter == 60) {
        ssCounter = 0;
        ss.innerText = getCorrectNumbers(ssCounter);
        mmRun();
    }
}

function mmRun() {
    ++mmCounter;
    mm.innerText = getCorrectNumbers(mmCounter);

    if (mmCounter == 60) {
        clearInterval(timer);
        msms.innerText = '00';
        buttonStart.style.display = 'none';
        buttonSave.style.display = 'none';
    }
}

function getCorrectNumbers(num) {
    if (num.toString().length == 1) {
        return num = '0' + num;
    } else {
        return num;
    }
}

function resetTimer() {
    changeDataset('start');
    buttons.innerHTML = '';
    results.innerHTML = '';
    clearInterval(timer);
    mm.innerText = '00';
    ss.innerText = '00';
    msms.innerText = '00';
    mmCounter = 0;
    ssCounter = 0;
    msmsCounter = 0;
}

function saveTimer() {
    results.insertAdjacentHTML('afterBegin', '<li>' + getCorrectNumbers(mmCounter) + ':' + getCorrectNumbers(ssCounter) + ':' + getCorrectNumbers(msmsCounter) + '</li>');
}