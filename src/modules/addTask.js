/* eslint-disable */
import Task from './taskclass.js';
import { inputTask } from './variables.js';

const addTask = () => {
  const taskValue = inputTask.value.trim();

  if (taskValue) {
    const newTask = new Task(Task.taskData.length, taskValue);
    Task.taskData.push(newTask);
  }

  document.getElementById('input-task').value = '';
};

export default addTask;