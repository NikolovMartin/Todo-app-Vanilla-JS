((win, doc) => {
	const usernameField = doc.getElementById('usernameField');
	const head = doc.getElementsByClassName('head');
	const textField = doc.getElementById('inputText');
	const logBtn = doc.getElementById('btnLogIn');
	const createBtn = doc.getElementById('btnCreate');
	const noTodos = doc.getElementById('noTodos');

	let greet = doc.createElement('p');
	let username = '';

	// Log User
	logBtn.addEventListener('click', logUser);

	function logUser() {
		username = usernameField.value;

		if (logBtn.innerHTML == 'Log out') {
			greet.setAttribute('style', 'display:none');
			toggleVisibility(usernameField, true);
			setLogBtnText('Log in');
			clear();
			return;
		}

		if (!username) {
			alert('You must write Username!');
			clear();
			return;
		}

		greet.innerHTML = `Hello <strong>${username}</strong>`;

		head[0].prepend(greet);

		toggleVisibility(usernameField, false);
		setLogBtnText('Log out');
		clear();
	}

	// create new todo
	createBtn.addEventListener('click', newTodo);

	function newTodo() {
		if (!textField.value) {
			alert('You must write something!');
			return;
		}

		if (!username) {
			alert('First Log in Username!');
			return;
		}

		const deleteBtn = doc.createElement('span');
		const user = doc.createElement('span');

		user.innerHTML = `${username}:`;
		user.classList.add('userStyle');

		addXBtn(deleteBtn);
		createListItem(user, deleteBtn);
	}

	function addXBtn(deleteBtn) {
		deleteBtn.innerHTML = 'X';
		deleteBtn.classList.add('close');
		deleteBtn.addEventListener('click', deleteTodo);
		deleteBtn.setAttribute('id', 'delTodo');
	}

	function createListItem(user, deleteBtn) {
		const li = doc.createElement('li');
		li.classList.add('fLex');
		li.classList.add('style');
		li.addEventListener('click', function() {
			checked(this);
		});

		inputText = textField.value;

		//append to li
		let todo = doc.createTextNode(`${inputText}`);
		li.appendChild(todo);
		li.appendChild(deleteBtn);
		li.appendChild(user);

		doc.getElementById('ul').appendChild(li);
		toggleVisibility(noTodos, false);
		textField.value = '';
	}

	function checked(li) {
		li.classList.toggle('checked');
	}

	function toggleVisibility(item, show) {
		const display = show ? 'block' : 'none';
		item.setAttribute('style', `display: ${display}`);
	}

	function setLogBtnText(text) {
		logBtn.innerHTML = text;
	}

	// Delete
	function deleteTodo() {
		let that = doc.getElementById('delTodo');
		let li = that.parentElement;
		let ul = that.parentElement.parentElement;
		alert('Are you sure you want to delete this item?');
		ul.removeChild(li);

		if (ul.childNodes.length === 1) {
			toggleVisibility(noTodos, true);
		}
	}
	//clear
	function clear() {
		usernameField.value = '';
	}
})(window, document);
