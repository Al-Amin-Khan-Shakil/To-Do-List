import _ from 'lodash';
import './style.css';
import { addBtn } from './modules/variables.js';
import Task from './modules/taskclass.js';

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  Task.addTask();
  Task.setToLocal();
  Task.createTaskList();
});
