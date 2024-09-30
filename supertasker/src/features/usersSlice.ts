import data from '../api/data.json';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

type UsersState = {
  entities: User[];
};

type DraftUser = RequireOnly<User, 'realName' | 'alterEgo'>;

export const initialState: UsersState = {
  entities: data.users,
};

const createUser = (draftUser: DraftUser): User => {
  return { id: nanoid(), tasks: [], ...draftUser };
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (users, action: PayloadAction<DraftUser>) => {
      const user = createUser(action.payload);
      users.entities.unshift(user);
    },
    removeUser: (users, action: PayloadAction<User['id']>) => {
      const index = users.entities.findIndex(
        (user) => user.id === action.payload,
      );
      users.entities.splice(index, 1);
    },
    updateUser: (users, action: PayloadAction<DraftUser>) => {
      const user = users.entities.find((user) => user.id === action.payload.id);

      if (user) {
        user.alterEgo = action.payload.alterEgo;
        user.realName = action.payload.realName;
      }
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser, removeUser, updateUser } = usersSlice.actions;

export default usersSlice;
