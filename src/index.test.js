import Task from './index.js';

const taskData = [];

describe('Task', () => {
  test('adds a task to the taskData array', () => {
    Task.addTask('new task1', taskData);
    expect(taskData).toHaveLength(1);
  });

  // You can continue adding more test cases here

  test('adds a task to the taskData array at 2', () => {
    Task.addTask('new task2', taskData);
    expect(taskData).toHaveLength(2);
  });

  test('adds a task to the taskData array at 3', () => {
    Task.addTask('new task3', taskData);
    expect(taskData).toHaveLength(3);
  });
});

describe('Event Listener', async () => {
  it('should add a task when the button is clicked', () => {
    document.body.innerHTML = `
    <button type="submit" id="add-btn">&#x23CE;</button>
    `;

    const addBtn = document.getElementById('add-btn');

    if (addBtn) {
      // Mock Task methods or use appropriate mocks
      Task.addTask = jest.fn();
      Task.setToLocal = jest.fn();
      Task.createTaskList = jest.fn();

      addBtn.click();

      expect(Task.addTask).toHaveBeenCalled();
      expect(Task.setToLocal).toHaveBeenCalled();
      expect(Task.createTaskList).toHaveBeenCalled();
    }
  });
});
