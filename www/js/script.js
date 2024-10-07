function addTask() {
    todoList.innerHTML += '<li><input type="checkbox">' + todoInput.value + '</li>';
    todoInput.value = '';
}