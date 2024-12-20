document.addEventListener("DOMContentLoaded",function(){
    const addButton = document.getElementById("addTodo");
    const todoInput = document.getElementById("newTodo");
    const todoList = document.getElementById("todoList");
    addButton.addEventListener("click",function(){
        const todoText = todoInput.ariaValueMax.trim();
        if(todoText !==""){
            const li = document.createElement("li");
            li.classList.add("todo-item");
            const todoContent = document.createElement("span");
            todoContent.textContent = todoText;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click",function(){
                todoList.removeChild(li);
            });
        li.appendChild(todoContent);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = "";
        }
    });
    todoInput.addEventListener("keypress",function(e){
        if(e.key === "Enter"){
            addButton.click();
        }
    });
});
