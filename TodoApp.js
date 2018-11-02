const usernameField = document.getElementById('usernameField');
const head = document.getElementsByClassName('head');
const textField = document.getElementById('inputText');
const logBtn = document.getElementById('btnLogIn');

let greet = '';
let input = '';
let todo = '';
let username = '';

// Log User
function logUser() {
	console.log(`'1- ${username}`);

	if (logBtn.innerHTML == 'Log in') {
		console.log(usernameField.value);
		username = usernameField.value;

		console.log(`'2-' ${username}`);
		if (!username) {
			alert('You must write Username!');
			clear();
			username = '';
		} else {
			greet = document.createElement('p');
			greet.innerHTML = `Hello <strong>${username}</strong>`;
			head[0].prepend(greet);
			usernameField.setAttribute('style', 'display:none');
			logBtn.innerHTML = 'Log out';
		}
	} else {
		greet.setAttribute('style', 'display:none');
		usernameField.setAttribute('style', 'display:block');
		logBtn.innerHTML = 'Log in';
		console.log(`'3-' ${username}`);
		clear();
	}
}

// create new todo

function newTodo() {
	let del = document.createElement('span');
	del.innerHTML = 'X';
	del.classList.add('right');
	del.setAttribute('onclick', 'deleteTodo()');
	del.setAttribute('id', 'delTodo');

	let li = document.createElement('li');
	li.classList.add('fLex');
	let input = document.getElementById('inputText');
	let inputText = input.value;

	let todo = document.createTextNode(`${username} ${inputText}`);
	li.appendChild(todo);
	li.appendChild(del);
	if (inputText == '') {
		alert('You must write something!');
	} else {
		document.getElementById('ul').appendChild(li);
	}

	input.value = '';
}

// Delete
function deleteTodo() {
	let that = document.getElementById('delTodo');
	let li = that.parentElement;
	let ul = that.parentElement.parentElement;
	console.log(ul);
	ul.removeChild(li);
}
//clear

function clear() {
	usernameField.value = '';
}
