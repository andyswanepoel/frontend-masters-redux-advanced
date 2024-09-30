import { useContext } from 'react';
import ApplicationContext from '../context';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(ApplicationContext);

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
