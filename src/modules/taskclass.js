import {
  inputTask, taskList
} from './variables.js';

export default class Task {
  constructor(index, description) {
    this.index = index;
    this.description = description;
    this.completed = false;
  }

  static taskData = [];

  static addTask = () => {
    const taskValue = inputTask.value.trim();

    if (taskValue) {
      const newTask = new Task(this.taskData.length, taskValue);
      this.taskData.push(newTask);
    }

    document.getElementById('input-task').value = '';
  }

  static setToLocal = () => {
    localStorage.setItem('taskCollection', JSON.stringify(this.taskData));
  }

  static getFromLocal = () => {
    const getData = localStorage.getItem('taskCollection');

    if (getData) {
      this.taskData = JSON.parse(getData);
    }
  }

  static createTaskList = () => {
    this.getFromLocal();
    taskList.innerHTML = '';
    this.taskData.forEach(task => {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      li.appendChild(checkbox);
      const taskText = document.createElement("span");
      taskText.textContent = task.description;
      li.appendChild(taskText);
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      li.appendChild(removeButton);

      taskList.appendChild(li)
    });
  }
}