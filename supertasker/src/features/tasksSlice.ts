import {
  createSlice,
  PayloadAction,
  nanoid,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { removeUser } from './usersSlice';

// Good to start out with a shape for your state that uses an object
export type TasksState = {
  entities: Task[];
  loading?: boolean;
  error?: boolean;
};

export type DraftTask = RequireOnly<Task, 'title'>;

export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};
export const initialState: TasksState = {
  entities: [],
  loading: false,
  error: false,
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (): Promise<Task[]> => {
    const response = await fetch('/api/tasks');
    const result = await response.json();
    return result.tasks;
  },
);

export const tasksSlice = createSlice({
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
    builder.addCase(fetchTasks.pending, (tasks) => {
      tasks.loading = true;
      tasks.error = false;
    });
    builder.addCase(fetchTasks.fulfilled, (tasks, action) => {
      tasks.entities = action.payload;
      tasks.loading = false;
    });
    builder.addCase(fetchTasks.rejected, (tasks, action) => {
      tasks.loading = false;
      tasks.error = true;
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
