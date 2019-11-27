var button = document.getElementById('button');
var user = document.getElementById('user');
var info = document.getElementById('info');

button.addEventListener('click', getUsers);
user.addEventListener('click', changeActive);

function getUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open ('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.onload = function() {
        var statusType = +String(this.status)[0];
        if (statusType === 2) {
            users = JSON.parse(xhr.responseText).data;
            showUsers(users);
        } else {
            alert('Error! Status: ' + this.status);
        }
    };

    xhr.send ();
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