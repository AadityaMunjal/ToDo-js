// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".add-todo-button");
const todoList = document.querySelector(".todo-list");
const importantButton = document.querySelector(".important-todo-button");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteDone);
importantButton.addEventListener("click", changeImportance);

var importance = false;
const isImportantClassName = "is-important-todo-button";

function changeImportance(event) {
  importance = !importance;
  importantButton.classList.toggle(isImportantClassName);
}

function addTodo(event) {
  // Prevents document from refreshing
  event.preventDefault();

  const todoName = todoInput.value;
  if (todoName != "") {
    createTodo(todoName, importance);
  } else {
    alert("Give your todo a Name!");
  }
}

function createTodo(text, isImportant) {
  // todo Div
  const todoDIV = document.createElement("div");
  if (!isImportant) {
    todoDIV.classList.add("todo");
  } else {
    todoDIV.classList.add("important-todo");
  }

  // Create <li></li>
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = text;
  todoDIV.appendChild(newTodo);

  // Done button
  const doneButton = document.createElement("button");
  doneButton.classList.add("done-btn");
  doneButton.type = "submit";
  doneButton.innerText = "Done!";
  todoDIV.appendChild(doneButton);

  // Delete button
  const trashButton = document.createElement("button");
  trashButton.classList.add("delete-btn");
  trashButton.type = "submit";
  trashButton.innerText = "Delete";
  todoDIV.appendChild(trashButton);

  // Append todoDIV to the list
  todoList.appendChild(todoDIV);

  // Cleraing input
  todoInput.value = "";

  isImportantTask = importantButton.classList.value.includes(
    isImportantClassName
  );
  if (isImportantTask) {
    importantButton.classList.remove("is-important-todo-button");
  }
  importance = false;
}

function deleteDone(event) {
  const button = event.target;
  const deleteClassName = "delete-btn";
  const doneClassName = "done-btn";

  if (button.classList[0] === deleteClassName) {
    const todo = button.parentElement;
    todo.remove();
  } else if (button.classList[0] === doneClassName) {
    const todo = button.parentElement;
    todo.classList.toggle("completed");
  }
}
