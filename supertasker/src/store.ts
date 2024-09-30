import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './features/tasksSlice';
import { usersReducer } from './features/usersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;
