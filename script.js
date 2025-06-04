const ulTag = document.getElementById("todoContainer"); 
      const input = document.getElementById("todo-input"); 
      let todosData = JSON.parse(localStorage.getItem("todos")) || []; 

      function renderTodos() { 
      ulTag.innerHTML = ''; 
      todosData.forEach((todo, index) => { 
      const li = document.createElement('li'); 
      li.innerHTML = ` 
         <input type="checkbox" ${todo.completed ? "checked" : ""} 
         onchange="toggleinput(${index})"> 
         <span class="${todo.completed ? "text-decoration-line-through" : 
         ""}">${todo.todo}</span> 
         <button class="btn btn-warning btn-sm ms-2" 
         onclick="editTodo(${index})">Edit</button> 
         <button class="btn btn-danger btn-sm ms-2" 
         onclick="deleteTodo(${index})">Delete</button> 
         `; 
         ulTag.appendChild(li); 
        }); 
        } 

    function addToLocalStorage() { 
      localStorage.setItem("todos", JSON.stringify(todosData)); 
   } 
 
    function addTodos() { 
      if (input.value.trim() === '') return; 
          todosData.push({ 
          id: Date.now(), 
          todo: input.value, 
          completed: false 
        }); 
    addToLocalStorage(); 
    renderTodos(); 
    input.value = ''; 
    } 
   renderTodos(); 


   function deleteTodo(index) { 
todosData = todosData.filter((ele, i) => i !== index); 
addToLocalStorage(); 
renderTodos(); 
} 
function editTodo(index) { 
const newTodo = prompt("Edit your todo:", todosData[index].todo); 
if (newTodo !== null) { 
todosData[index].todo = newTodo; 
addToLocalStorage(); 
renderTodos(); 
} 
} 
function toggleinput(index) { 
todosData[index].completed = !todosData[index].completed; 
addToLocalStorage(); 
renderTodos(); 
} 