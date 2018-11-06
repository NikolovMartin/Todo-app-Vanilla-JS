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
		this.username = '';

		// Methods
		this.logUser = this.logUser.bind(this);
		this.newTodo = this.newTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.clear = this.clear.bind(this);

		// Event Listeners
		this.logBtn.addEventListener('click', this.logUser);
		this.createBtn.addEventListener('click', this.newTodo);
	}

	logUser() {
		this.username = this.usernameField.value;

		if (this.logBtn.innerHTML == 'Log out') {
			this.greet.setAttribute('style', 'display:none');
			this.toggleVisibility(this.usernameField, true);
			this.setLogBtnText('Log in');
			this.clear();
			return;
		}

		if (!this.username) {
			alert('You must write Username!');
			this.clear();
			return;
		}

		this.greet.innerHTML = `Hello <strong>${this.username}</strong>`;
		this.greet.setAttribute('style', 'display:block');
		this.head[0].prepend(this.greet);
		this.toggleVisibility(this.usernameField, false);
		this.setLogBtnText('Log out');
		//this.clear();
	}

	// create new todo

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

		this.addXBtn(deleteBtn);
		this.createListItem(user, deleteBtn);
	}

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
			this.checked(li);
		});

		this.inputText = this.textField.value;

		//append to li
		let todo = this.doc.createTextNode(`${this.inputText}`);
		li.appendChild(todo);
		li.appendChild(deleteBtn);
		li.appendChild(user);

		this.doc.getElementById('ul').appendChild(li);
		this.toggleVisibility(this.noTodos, false);
		this.textField.value = '';
	}

	checked(li) {
		li.classList.toggle('checked');
	}

	toggleVisibility(item, show) {
		const display = show ? 'block' : 'none';
		item.setAttribute('style', `display: ${display}`);
	}

	setLogBtnText(text) {
		this.logBtn.innerHTML = text;
	}

	// Delete
	deleteTodo() {
		let that = this.doc.getElementById('delTodo');
		let li = that.parentElement;
		let ul = that.parentElement.parentElement;
		alert('Are you sure you want to delete this item?');
		ul.removeChild(li);

		if (ul.childNodes.length === 1) {
			this.toggleVisibility(noTodos, true);
		}
	}
	//clear;
	clear() {
		usernameField.value = '';
	}

	//	this.logBtn.addEventListener('click', logUser);
	//  createBtn.addEventListener('click', newTodo);
	//return this;
}
const App2 = new TodoApp(window, document);
