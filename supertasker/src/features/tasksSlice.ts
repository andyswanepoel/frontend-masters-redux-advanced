import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Good to start out with a shape for your state that uses an object
export type TaskState = {
  entities: Task[];
};

type DraftTask = RequireOnly<Task, 'title'>;

const createTask = (draftTask: DraftTask): Task => {
  return { ...draftTask, id: nanoid() };
};
const initialState: TaskState = {
  entities: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state) => state,
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
