import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Good to start out with a shape for your state that uses an object
export type TaskState = {
  entities: Task[];
};

const initialState: TaskState = {
  entities: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.unshift(action.payload);
    },
    removeTask: (state) => state,
  },
});
