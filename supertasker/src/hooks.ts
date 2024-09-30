import * as React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { ApplicationDispatch, ApplicationState } from './store';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export const useAppDispatch: () => ApplicationDispatch = useDispatch;

export const useTasks = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);
  const loading = useAppSelector((state) => !!state.tasks.loading);

  return React.useMemo(() => ({ tasks, loading }), [tasks, loading]);
};
