const taskList = document.getElementById("tasklist");
const taskInput = document.getElementById("taskinput");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" class="taskCheckbox" onClick="toggleTask(this)">
            <span>${taskText}</span>
            <button class="deleteButton" onClick="deleteTask(this)" style="font-size: 15px"><img src="lixeira.png" alt="lixeira" id="lixeira"></button>
        `;

        taskList.appendChild(li);
        taskInput.value = ""; 
    }
}

function toggleTask(checkbox) {
    const span = checkbox.nextElementSibling; 
    const li = checkbox.parentElement;  

    if (checkbox.checked) {
        span.style.cssText = "text-decoration: line-through; color: gray"; 
        li.classList.add("completed"); 
        moveToEnd(li);  
    } else {
        span.style.cssText = "color: black";  
        li.classList.remove("completed"); 
        moveToTop(li); 
    }
}

function moveToEnd(li) {
    taskList.appendChild(li);  
}

function moveToTop(li) {
    taskList.insertBefore(li, taskList.firstChild); 
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li); 
}
