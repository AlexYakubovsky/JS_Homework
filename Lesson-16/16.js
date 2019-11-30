var button = document.getElementById('button');
var user = document.getElementById('user');
var info = document.getElementById('info');
var error = document.getElementById('error');

button.addEventListener('click', getUsers);
user.addEventListener('click', changeActive);

function getUsers() {
    if (localStorage.usersList) {
        users = JSON.parse(localStorage.getItem('usersList')).data;
        showUsers(users);
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open ('GET', 'https://reqres.in/api/users?page=2', true);

        xhr.onload = function() {
            var statusType = +String(this.status)[0];
            if (statusType === 2) {
                localStorage.setItem('usersList', this.response);
                users = JSON.parse(xhr.response).data;
                showUsers(users);
            } else {
                showError(this.status);
            }
        };

        xhr.send ();
    }
}

function showUsers(users) {
    user.innerHTML = '';

    for (var i = 0; i < users.length; i++) {
        user.insertAdjacentHTML('beforeEnd', '<div class="userTab" id="' + i + '">User ' + (i + 1) + '</div>');
    }

    document.getElementsByClassName('userTab')[0].classList.add('active');
    showInfo(users);
}

function showInfo (users) {
    info.innerHTML = '';

    for (var i = 0; i < users.length; i++) {
        var activeMarker = document.getElementById(i);

        if (activeMarker.classList.contains('active')) {
            info.insertAdjacentHTML('beforeEnd',  '<div class="photo">' +
                '<img src="' + users[i]['avatar'] + '"></div>');
            info.insertAdjacentHTML('beforeEnd', '<div class="infoTab">' +
                '<p>First Name: ' + users[i]['first_name'] + '</p>' +
                '<p>Last Name: ' + users[i]['last_name'] + '</p>' + '</div>');
        }
    }
}

function changeActive(event) {
    document.querySelectorAll('.active').forEach(function(userTab) {
        userTab.classList.remove('active')
    });

    var target = event.target;
    target.classList.add('active');
    showInfo(users);
}

function showError(status) {
    error.insertAdjacentHTML('beforeEnd', '<div class="error"> Ошибка! Статус: ' + status + '</div>');
}