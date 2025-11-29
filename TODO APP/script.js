const mainTodo = document.querySelector(".todo-lists-elem");
const inputField = document.querySelector("#inputValue");

let localTodoLists = [];

const getTodoListFromLocal = () => {
  return JSON.parse(localStorage.getItem("youtubeTodoList"));
};

const addTodoListLocalStorage = (localTodoLists) => {
  return localStorage.setItem(
    "youtubeTodoList",
    JSON.stringify(localTodoLists)
  );
};

localTodoLists = getTodoListFromLocal() || [];

const addTodoDynamicElement = (currElem) => {
  const divElem = document.createElement("div");
  divElem.classList.add("main_todo_div");
  divElem.innerHTML = `<li> ${currElem} </li> <button class="deleteBtn">Delete</button>`;
  mainTodo.append(divElem);
};

const addTodoList = (e) => {
  e.preventDefault();
  const todoListValue = inputField.value.trim();

  inputField.value = " ";
  if (todoListValue !== "" && !localTodoLists.includes(todoListValue)) {
    localTodoLists.push(todoListValue);
    localTodoLists = [...new Set(localTodoLists)];
    console.log(localTodoLists);

    localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoLists));

    addTodoDynamicElement(todoListValue);
  }
};

const showTodoList = () => {
  console.log(localTodoLists);

  localTodoLists.forEach((currElem) => {
    addTodoDynamicElement(currElem);
  });
};

showTodoList();

const removeTodoElem = (e) => {
  const todoRemove = e.target;
  let todoListContent = todoRemove.previousElementSibling.innerText;
  let parentElem = todoRemove.parentElement;
  console.log(todoListContent);

  localTodoLists = localTodoLists.filter((currTodo) => {
    return currTodo !== todoListContent.toLowerCase();
  });

  addTodoListLocalStorage(localTodoLists);
  parentElem.remove();

  console.log(localTodoLists);
};

mainTodo.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("deleteBtn")) {
    removeTodoElem(e);
  }
});

document.querySelector(".btn").addEventListener("click", (e) => {
  addTodoList(e);
});


