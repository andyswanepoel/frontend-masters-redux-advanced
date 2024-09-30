import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/Application';

import { makeServer } from './api';

import ApplicationContext from './ApplicationContext';
import data from './api/data.json';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchTasks } from './features/tasksSlice';

const environment = process.env.NODE_ENV;
makeServer({ environment });

// If you have data you need to fetch, you can do that kind of wherever
// For example, if I want to dispatch an async thunk, I can do it here
// Since its just JavaScript, you can do whatever you want
// In this case, since we're doing it with a fake server, we have to do it after that is set up or it will just reject every time
store.dispatch(fetchTasks());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ApplicationContext.Provider value={data}>
      <Provider store={store}>
        <Application />
      </Provider>
    </ApplicationContext.Provider>
  </React.StrictMode>,
);
