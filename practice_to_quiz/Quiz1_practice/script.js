let btn = document.querySelector("#addBtn");
let input = document.querySelector("#taskInput");
let list = document.querySelector("#taskList");
let totalSpan = document.querySelector("#totalCount");
let doneSpan = document.querySelector("#doneCount");

const updateCounts = () => {
    const allTasks = document.querySelectorAll("li");
    const total = allTasks.length;
    
    const completed = Array.from(allTasks).filter(task => task.classList.contains("completed"));

    totalSpan.textContent = total;
    doneSpan.textContent = completed.length;
};

btn.addEventListener("click", () => {
    if(input.value === "") return;

    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Deleate';

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        updateCounts();
    });

    li.addEventListener("click", () => {
        li.classList.toggle('completed');
        updateCounts();
    })

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
    updateCounts();

    
});