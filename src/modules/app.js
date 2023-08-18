/* eslint-disable */
import Task from '../index.js';

export const textDecoration = () => {
  const textElement = document.querySelectorAll('.task-text');
  textElement.forEach((text) => {
    const index = parseInt(text.dataset.index, 10) - 1;
    if (Task.taskData[index].completed) {
      text.style.textDecoration = 'line-through';
    } else {
      text.style.textDecoration = 'none';
    }
  });
};

export const toggleCheckbox = (index) => {
  Task.taskData[index].completed = !Task.taskData[index].completed;
  Task.setToLocal();
  Task.createTaskList();
};

export const clearCompletedTask = () => {
  Task.taskData = Task.taskData.filter((task) => !task.completed);
};