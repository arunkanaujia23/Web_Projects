const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");
const todosLocal = JSON.parse(localStorage.getItem("todos"));




form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
});

const addTodo = (todo) => {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoListElement = document.createElement("li");
        if (todo && todo.completed) {
            todoListElement.classList.add("completed");
        }

        todoListElement.innerText = todoText;

        todoListElement.addEventListener("click", () => {
            todoListElement.classList.toggle("completed");
            updateLocalStorage();
        });

        todoListElement.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            todoListElement.remove();
            updateLocalStorage();
        });

        todos.appendChild(todoListElement);
        input.value = "";
        updateLocalStorage();
    }
};

const updateLocalStorage = () => {
    const todosList = document.querySelectorAll("li");

    const todos = [];

    todosList.forEach((todoElement) =>
        todos.push({
            text: todoElement.innerText,
            completed: todoElement.classList.contains("completed"),
        })
    );

    localStorage.setItem('todos', JSON.stringify(todos))
};

console.log(
    todosLocal
);
if(todosLocal){
    todosLocal.forEach( todo => addTodo(todo) );
}