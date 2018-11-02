((win, doc) => {
	const usernameField = doc.getElementById('usernameField');
	const head = doc.getElementsByClassName('head');
	const textField = doc.getElementById('inputText');
	const logBtn = doc.getElementById('btnLogIn');
	const createBtn = doc.getElementById('btnCreate');
	const noTodos = doc.getElementById('noTodos');

	let greet = '';
	let input = '';
	let todo = '';
	let username = '';

	// Log User
	logBtn.addEventListener('click', logUser);

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
				greet = doc.createElement('p');
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

		usernameField.value = '';
	}

	// create new todo
	createBtn.addEventListener('click', newTodo);

	function newTodo() {
		const deleteBtn = doc.createElement('span');
		const user = doc.createElement('span');
		user.innerHTML = `${username}:`;
		user.classList.add('userStyle');

		//Add X button
		deleteBtn.innerHTML = 'X';
		deleteBtn.classList.add('close');
		deleteBtn.addEventListener('click', deleteTodo);
		deleteBtn.setAttribute('id', 'delTodo');

		// create li el.
		const li = doc.createElement('li');
		li.classList.add('fLex');
		li.classList.add('style');
		li.addEventListener('click', done);

		let inputText = textField.value;

		//create todo
		let todo = doc.createTextNode(`${inputText}`);
		li.appendChild(todo);
		li.appendChild(deleteBtn);
		li.appendChild(user);
		if (inputText == '') {
			alert('You must write something!');
		} else {
			if (username == '') {
				alert('First Log in Username!');
			} else {
				doc.getElementById('ul').appendChild(li);
				noTodos.setAttribute('style', 'display:none');
				clear();
			}
		}
		//clear input value
		textField.value = '';

		//done
		function done() {
			li.classList.toggle('checked');
		}

		//check li
	}

	// Delete
	function deleteTodo() {
		let that = doc.getElementById('delTodo');
		let li = that.parentElement;
		let ul = that.parentElement.parentElement;
		alert('Are you sure you want to delete this item?');
		ul.removeChild(li);

		if (ul.childNodes.length == 1) {
			noTodos.setAttribute('style', 'display:block');
		}
	}
	//clear
	function clear() {
		usernameField.value = '';
	}
})(window, document);
