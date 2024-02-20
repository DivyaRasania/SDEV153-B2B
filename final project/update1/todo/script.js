// Model
// If localstorage has a todos array, then use it
// Otherwise use the default array.
let todos;

// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
// Check if it's an array
if (Array.isArray(savedTodos)) {
    todos = savedTodos;
} else {
    todos = [];
}

// Creates a todo
function createTodo(title, dueDate) {
    const id = '' + new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    saveTodos();
}

// Deletes a todo
function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) {
        // If the id of this todo matches idToDelete, return false
        // For everything else, return true
        if (todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    });

    saveTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Controller
function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createTodo(title, dueDate);
    render();
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);
    render();
}

// View
function render() {
    // reset our list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todo) {
        const element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}

render();