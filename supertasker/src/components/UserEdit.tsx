import * as React from 'react';
import { useAppDispatch } from '../hooks';
import { updateUser } from '../features/usersSlice';

type UserEditProps = {
  user: User;
  closeForm: () => void;
};

const UserEdit = ({ user, closeForm }: UserEditProps) => {
  const id = (p: keyof User) => `edit-user-${user.id}-${p}`;
  const [updatedRealName, setUpdatedRealName] = React.useState(user.realName);
  const [updatedAlterEgo, setUpdatedAlterEgo] = React.useState(user.alterEgo);

  const dispatch = useAppDispatch();

  const handleRealNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setUpdatedRealName(event.target.value);
  };
  const handleAlterEgoChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setUpdatedAlterEgo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      updateUser({
        realName: updatedRealName,
        alterEgo: updatedAlterEgo,
        id: user.id,
      }),
    );
    closeForm();
  };

  return (
    <form className="user-edit" onSubmit={handleSubmit}>
      <label htmlFor={id('realName')}>
        Real Name
        <input
          id={id('realName')}
          type="text"
          value={updatedRealName}
          name="realName"
          placeholder="Real Name"
          onChange={handleRealNameChange}
        />
      </label>
      <label htmlFor={id('alterEgo')}>
        Alter Ego
        <input
          id={id('alterEgo')}
          type="text"
          value={updatedAlterEgo}
          name="alterEgo"
          placeholder="Alter Ego"
          onChange={handleAlterEgoChange}
        />
      </label>
      <button className="mt-4 ml-auto block" type="submit">
        Update
      </button>
    </form>
  );
};

export default UserEdit;
