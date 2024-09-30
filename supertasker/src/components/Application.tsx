import CreateTask from './CreateTask';
import TaskList from './TaskList';
import UserList from './UserList';

const Application = () => {
  return (
    <main className="application">
      <div className="side-panel">
        <CreateTask />
        <UserList />
      </div>
      <TaskList />
    </main>
  );
};

export default Application;
