import CreateUser from './CreateUser';
import Task from './User';

const UserList = () => {
  const users: User[] = [];

  return (
    <section className="user-list">
      <CreateUser />
      {users.map((user) => (
        <Task key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
