import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

const CreateTask = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const dispatch = useDispatch();

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
