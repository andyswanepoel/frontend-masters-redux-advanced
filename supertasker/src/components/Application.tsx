import CreateTask from './CreateTask';
import TaskList from './TaskList';

const Application = () => {
  return (
    <main className="application">
      <div className="side-panel">
        <CreateTask />
        {/* <UserList /> */}
      </div>
      <TaskList />
    </main>
  );
};

export default Application;
