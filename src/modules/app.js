export const textDecoration = (taskData) => {
  const textElement = document.querySelectorAll('.task-text');
  textElement.forEach((text) => {
    const index = parseInt(text.dataset.index, 10) - 1;
    if (taskData[index].completed) {
      text.style.textDecoration = 'line-through';
    } else {
      text.style.textDecoration = 'none';
    }
  });
};

export const toggleCheckbox = (index, taskData, setToLocal, createTaskList) => {
  taskData[index].completed = !taskData[index].completed;
  setToLocal();
  createTaskList();
};

export const clearCompletedTask = (taskData) => taskData.filter((task) => !task.completed);