document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    function addTask(taskText) {
        const li = document.createElement('li');
        
        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&#128465;';

        // Собираем структуру: checkbox + text -> div -> li -> ul
        taskContent.appendChild(checkbox);
        taskContent.appendChild(span);
        li.appendChild(taskContent);
        li.appendChild(deleteBtn);
        
        todoList.appendChild(li);

        // Обработчик для чекбокса (Marking as done)
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                span.classList.add('done');
            } else {
                span.classList.remove('done');
            }
        });

        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        });
    }

    // Обработка отправки формы
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const text = newTaskInput.value.trim();
        
        if (text !== "") {
            addTask(text);
            newTaskInput.value = '';
            newTaskInput.focus();
        }
    });
});