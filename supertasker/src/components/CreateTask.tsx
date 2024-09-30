import { useState } from 'react';
import { addTask } from '../features/tasksSlice';
import { useAppDispatch } from '../hooks';

const CreateTask = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const dispatch = useAppDispatch();

  return (
    <form
      className="create-task"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTask({ title: newTaskTitle }));
      }}
    >
      <label htmlFor="new-task-title">
        Title
        <input
          id="new-task-title"
          type="text"
          value={newTaskTitle}
          placeholder="Title"
          required
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
