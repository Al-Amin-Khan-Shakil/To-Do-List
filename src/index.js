import './style.css';

const taskData = [
  {
    index: 1,
    description: 'My todo list number 01',
    completed: false,
  },
  {
    index: 2,
    description: 'My todo list number 02',
    completed: false,
  },
  {
    index: 3,
    description: 'My todo list number 03',
    completed: false,
  },
  {
    index: 4,
    description: 'My todo list number 04',
    completed: false,
  },
];

const taskList = document.getElementById('task-list');

window.addEventListener('load', () => {
  taskData.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    li.appendChild(checkbox);
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = task.description;
    li.appendChild(taskText);
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fa fa-trash trash-icon"></i>';
    li.appendChild(removeButton);

    taskList.appendChild(li);
  });
});
