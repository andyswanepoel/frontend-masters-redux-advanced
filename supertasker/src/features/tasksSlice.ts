import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

import data from '../api/data.json';
import { removeUser } from './usersSlice';

// Good to start out with a shape for your state that uses an object
export type TasksState = {
  entities: Task[];
};

export type DraftTask = RequireOnly<Task, 'title'>;

export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};
export const initialState: TasksState = {
  entities: data.tasks,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (tasks, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      tasks.entities.unshift(task);
    },
    removeTask: (tasks, action: PayloadAction<Task['id']>) => {
      const index = tasks.entities.findIndex(
        (task) => task.id === action.payload,
      );
      tasks.entities.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (tasks, action) => {
      const userId = action.payload;
      for (const task of tasks.entities) {
        if (task.user === userId) {
          task.user = undefined;
        }
      }
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
