import './style.css';
import { textDecoration, toggleCheckbox, clearCompletedTask } from './modules/app.js';

const inputTask = document.getElementById('input-task');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const clearBtn = document.getElementById('clear-button');

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
      const newTask = new Task((this.taskData.length + 1), taskValue);
      this.taskData.push(newTask);
    }

    document.getElementById('input-task').value = '';
  };

  static setToLocal = () => {
    localStorage.setItem('taskCollection', JSON.stringify(this.taskData));
  };

  static getFromLocal = () => {
    const getData = localStorage.getItem('taskCollection');

    if (getData) {
      this.taskData = JSON.parse(getData);
    }
  };

  static createTaskList = () => {
    this.getFromLocal();
    taskList.innerHTML = '';
    this.taskData.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('list-item');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.dataset.index = task.index;
      checkbox.classList.add('checkbox');
      li.appendChild(checkbox);

      const taskText = document.createElement('span');
      taskText.classList.add('task-text');
      taskText.textContent = task.description;
      taskText.dataset.index = task.index;
      li.appendChild(taskText);

      const delBtn = document.createElement('button');
      delBtn.dataset.index = task.index;
      delBtn.classList.add('del-btn');
      li.appendChild(delBtn);

      taskList.appendChild(li);
    });
  };

  static updateIndex = () => {
    this.taskData.forEach((task, i) => {
      task.index = i + 1;
    });
  }

  static deleteTask = (index) => {
    this.taskData.splice(index, 1);
  };
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  Task.addTask();
  Task.setToLocal();
  Task.createTaskList();
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('del-btn')) {
    const getIndex = parseInt(e.target.dataset.index, 10);
    const index = getIndex - 1;
    Task.deleteTask(index);
    Task.updateIndex();
    Task.setToLocal();
    Task.createTaskList();
  }
});

taskList.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('task-text')) {
    if (!e.target.isContentEditable) {
      e.target.contentEditable = true;
      e.target.focus();
    }
  }
});

taskList.addEventListener('focusout', (e) => {
  if (e.target.classList.contains('task-text')) {
    const index = parseInt(e.target.dataset.index, 10) - 1;
    Task.taskData[index].description = e.target.textContent.trim();
    Task.setToLocal();
    e.target.blur();
    e.target.contentEditable = false;
  }
});

taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const index = parseInt(e.target.dataset.index, 10) - 1;
    toggleCheckbox(index, Task.taskData, Task.setToLocal, Task.createTaskList);
    textDecoration(Task.taskData);
  }
});

clearBtn.addEventListener('click', () => {
  Task.taskData = clearCompletedTask(Task.taskData);
  Task.updateIndex();
  Task.setToLocal();
  Task.createTaskList();
});

window.addEventListener('load', () => {
  Task.createTaskList();
});