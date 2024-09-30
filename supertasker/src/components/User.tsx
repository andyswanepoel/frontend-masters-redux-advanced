import { memo, useState } from 'react';
import UserEdit from './UserEdit';
import { useAppDispatch } from '../hooks';
import { removeUser } from '../features/usersSlice';

type UserProps = {
  user: User;
};

const toggle = (b: boolean): boolean => !b;

const User = ({ user }: UserProps) => {
  const [editing, setEditing] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <article className="user">
      <header className="user-header">
        <h2 className="user-alter-ego">{user.alterEgo}</h2>
        <span className="user-real-name">{user.realName}</span>
      </header>
      <div className="button-group">
        <button className="small" onClick={() => setEditing(toggle)}>
          {editing ? 'Cancel' : 'Edit'}
        </button>
        <button
          className="destructive small"
          aria-label="Remove"
          onClick={() => dispatch(removeUser(user.id))}
        >
          Remove
        </button>
      </div>
      {editing && <UserEdit user={user} closeForm={() => setEditing(false)} />}
    </article>
  );
};

export default memo(User);
