/* eslint-disable */
import addTask from './addTask.js';
import { setToLocal, getFromLocal } from './localStore.js';
import createTaskList from './createList.js';

export default class Task {
  constructor(index, description) {
    this.index = index;
    this.description = description;
    this.completed = false;
  }

  static taskData = [];

  static addTask = addTask;

  static setToLocal = setToLocal;

  static getFromLocal = getFromLocal;

  static createTaskList = createTaskList;
}