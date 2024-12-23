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
    const li = checkbox.parentElement;  // A referência para o <li> da tarefa

    if (checkbox.checked) {
        span.style.cssText = "text-decoration: line-through; color: gray";  // Estilo para tarefa concluída
        li.classList.add("completed");  // Adiciona uma classe para marcar como concluída
        moveToEnd(li);  // Move a tarefa para o final da lista
    } else {
        span.style.cssText = "color: black";  // Restaura a cor normal quando desmarcada
        li.classList.remove("completed");  // Remove a classe de concluída
        moveToTop(li);  // Move a tarefa de volta para o topo
    }
}

// Função para mover o item para o final da lista
function moveToEnd(li) {
    taskList.appendChild(li);  // Move o <li> para o final da lista
}

// Função para mover o item de volta para o topo da lista
function moveToTop(li) {
    taskList.insertBefore(li, taskList.firstChild);  // Move o <li> para o topo da lista
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);  // Remove o item da lista
}
