import Task from "./taskclass.js";

export const setToLocal = () => {
  localStorage.setItem('taskCollection', JSON.stringify(Task.taskData));
}

export const getFromLocal = () => {
  const getData = localStorage.getItem('taskCollection');

  if (getData) {
    Task.taskData = JSON.parse(getData);
  }
}