import Task from "./taskclass.js";
import { taskList } from "./variables.js";

const createTaskList = () => {
  Task.getFromLocal();
  taskList.innerHTML = '';
  Task.taskData.forEach(task => {
    const li = document.createElement("li");
    li.classList.add('list-item');
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    li.appendChild(checkbox);
    const taskText = document.createElement("span");
    taskText.classList.add('task-text');
    taskText.textContent = task.description;
    li.appendChild(taskText);
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<i class="fa fa-trash trash-icon"></i>`;
    li.appendChild(removeButton);

    taskList.appendChild(li)
  });
}

export default createTaskList;