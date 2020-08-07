class TodoApp {
	constructor(win, doc) {
		this.win = win;
		this.doc = doc;

		// Varaibles
		this.usernameField = doc.getElementById('usernameField');
		this.head = doc.getElementsByClassName('head');
		this.textField = doc.getElementById('inputText');
		this.logBtn = doc.getElementById('btnLogIn');
		this.createBtn = doc.getElementById('btnCreate');
		this.noTodos = doc.getElementById('noTodos');
		this.greet = doc.createElement('p');
		this.deleteAllTodos = doc.getElementsByClassName('deleteAll')[0];
		this.username = '';

		// Methods
		this.logUser = this.logUser.bind(this);
		this.newTodo = this.newTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.setUsernameField = this.setUsernameField.bind(this);
		this.deleteAll = this.deleteAll.bind(this);

		// Event Listeners
		this.logBtn.addEventListener('click', this.logUser);
		this.createBtn.addEventListener('click', this.newTodo);
		this.deleteAllTodos.addEventListener('click', this.deleteAll);
	}

	/**
	 * logUser
	 */
	logUser() {
		this.username = this.usernameField.value;

		if (this.logBtn.innerHTML == 'Log out') {
			this.toggleVisibility(this.greet, false);
			this.toggleVisibility(this.usernameField, true);
			this.setLogBtnText('Log in');
			this.setUsernameField();

			return;
		}

		if (!this.username) {
			alert('You must write Username!');

			this.setUsernameField();

			return;
		}

		this.greet.innerHTML = `Hello <strong>${this.username}</strong>`;
		this.toggleVisibility(this.greet, true);
		this.head[0].prepend(this.greet);
		this.toggleVisibility(this.usernameField, false);
		this.setLogBtnText('Log out');
	}

	/**
	 * Create new Todo
	 */
	newTodo() {
		if (!this.textField.value) {
			alert('You must write something!');

			return;
		}

		if (!this.username) {
			alert('First Log in Username!');

			return;
		}

		const deleteBtn = this.doc.createElement('span');
		const user = this.doc.createElement('span');

		user.innerHTML = `${this.username}:`;
		user.classList.add('userStyle');

		this.deleteAllTodos.classList.remove('disabled');
		this.addXBtn(deleteBtn);
		this.createListItem(user, deleteBtn);
	}

	/**
	 * add X button
	 * @param {object} deleteBtn
	 */
	addXBtn(deleteBtn) {
		deleteBtn.innerHTML = 'X';
		deleteBtn.classList.add('close');
		deleteBtn.addEventListener('click', this.deleteTodo);
		deleteBtn.setAttribute('id', 'delTodo');
	}

	createListItem(user, deleteBtn) {
		const li = this.doc.createElement('li');

		li.classList.add('fLex');
		li.classList.add('style');

		li.addEventListener('click', () => {
			this.toggleChecked(li);
		});

		this.inputText = this.textField.value;

		/**
		 * Append to li
		 */
		let todo = this.doc.createTextNode(`${this.inputText}`);

		li.appendChild(todo);
		li.appendChild(deleteBtn);
		li.appendChild(user);

		this.doc.getElementById('ul').appendChild(li);
		this.toggleVisibility(this.noTodos, false);
		this.textField.value = '';
	}

	toggleChecked(li) {
		li.classList.toggle('checked');
	}

	toggleVisibility(item, show) {
		const display = show ? 'block' : 'none';

		item.setAttribute('style', `display: ${display}`);
	}

	setLogBtnText(text) {
		this.logBtn.innerHTML = text;
	}

	deleteTodo(event) {
		event.stopPropagation();

		let that = this.doc.getElementById('delTodo');
		let li = that.parentElement;
		let ul = li.parentElement;

		alert('Are you sure you want to delete this item?');

		ul.removeChild(li);

		if (ul.childNodes.length === 1) {
			this.toggleVisibility(noTodos, true);
		}
	}

	deleteAll() {
		if (confirm('Are you sure you want to delete all items?')) {
			this.doc.getElementById('ul').innerHTML = '';
			this.deleteAllTodos.classList.add('disabled');
		}
	}

	/**
	 * SetUsernameField
	 */
	setUsernameField() {
		usernameField.value = '';
	}
}
const App2 = new TodoApp(window, document);
