import './style.css';
const inputTask = document.getElementById('input-task');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

class Task {
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
      li.appendChild(taskText);

      const delBtn = document.createElement('button');
      delBtn.dataset.index = task.index;
      delBtn.classList.add('del-btn');
      li.appendChild(delBtn);
  
      taskList.appendChild(li);
    });
  };

  static updateIndex = () => {
    this.taskData.forEach((task, i) => task.index = i + 1);
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
  console.log('check the error');
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('del-btn')) {
    const index = parseInt(e.target.dataset.index);
    Task.deleteTask(index - 1);
    Task.updateIndex();
    Task.setToLocal();
    Task.createTaskList();
  };
});

window.addEventListener('load', () => {
  Task.createTaskList();
});