function todoApp(win, doc) {
	this.usernameField = doc.getElementById('usernameField');
	this.head = doc.getElementsByClassName('head');
	this.textField = doc.getElementById('inputText');
	this.logBtn = doc.getElementById('btnLogIn');
	this.createBtn = doc.getElementById('btnCreate');
	this.noTodos = doc.getElementById('noTodos');

	this.greet = doc.createElement('p');
	this.username = '';

	// Log User

	this.logUser = () => {
		username = this.usernameField.value;

		if (this.logBtn.innerHTML == 'Log out') {
			this.greet.setAttribute('style', 'display:none');
			this.toggleVisibility(usernameField, true);
			this.setLogBtnText('Log in');
			this.clear();
			return;
		}

		if (!username) {
			alert('You must write Username!');
			this.clear();
			return;
		}

		this.greet.innerHTML = `Hello <strong>${username}</strong>`;
		this.greet.setAttribute('style', 'display:block');
		this.head[0].prepend(this.greet);
		this.toggleVisibility(this.usernameField, false);
		this.setLogBtnText('Log out');
		//this.clear();
	};

	// create new todo

	this.newTodo = () => {
		if (!this.textField.value) {
			alert('You must write something!');
			return;
		}

		if (!username) {
			console.log(username);
			alert('First Log in Username!');
			return;
		}

		const deleteBtn = doc.createElement('span');
		const user = doc.createElement('span');

		user.innerHTML = `${username}:`;
		user.classList.add('userStyle');

		this.addXBtn(deleteBtn);
		this.createListItem(user, deleteBtn);
	};

	this.addXBtn = deleteBtn => {
		deleteBtn.innerHTML = 'X';
		deleteBtn.classList.add('close');
		deleteBtn.addEventListener('click', this.deleteTodo);
		deleteBtn.setAttribute('id', 'delTodo');
	};

	this.createListItem = (user, deleteBtn) => {
		const li = doc.createElement('li');
		li.classList.add('fLex');
		li.classList.add('style');
		li.addEventListener('click', () => {
			this.checked(li);
		});

		inputText = this.textField.value;

		//append to li
		let todo = doc.createTextNode(`${inputText}`);
		li.appendChild(todo);
		li.appendChild(deleteBtn);
		li.appendChild(user);

		doc.getElementById('ul').appendChild(li);
		this.toggleVisibility(noTodos, false);
		this.textField.value = '';
	};

	this.checked = li => {
		li.classList.toggle('checked');
	};

	this.toggleVisibility = (item, show) => {
		const display = show ? 'block' : 'none';
		item.setAttribute('style', `display: ${display}`);
	};

	this.setLogBtnText = text => {
		this.logBtn.innerHTML = text;
	};

	// Delete
	this.deleteTodo = () => {
		let that = doc.getElementById('delTodo');
		let li = that.parentElement;
		let ul = that.parentElement.parentElement;
		alert('Are you sure you want to delete this item?');
		ul.removeChild(li);

		if (ul.childNodes.length === 1) {
			this.toggleVisibility(noTodos, true);
		}
	};
	//clear
	this.clear = () => {
		usernameField.value = '';
	};

	this.logBtn.addEventListener('click', this.logUser);
	this.createBtn.addEventListener('click', this.newTodo);
	return this;
}

const instance = new todoApp(window, document);
