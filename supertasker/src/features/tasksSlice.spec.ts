import {
  addTask,
  createTask,
  DraftTask,
  removeTask,
  tasksReducer,
  TasksState,
} from './tasksSlice';

describe('tasksSlice', () => {
  const initialState: TasksState = {
    entities: [
      createTask({ title: 'Write tests' }),
      createTask({ title: 'Make tests pass' }),
    ],
  };

  // Pretty easy to test these things in Redux Toolkit
  it(`should add a task when the ${addTask} action is dispatched`, () => {
    const task: DraftTask = { title: 'Add an item' };
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities[0]).toEqual(expect.objectContaining(task));
    expect(newState.entities[0]).toHaveProperty('id');
  });
});
