
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  selectedUser: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    selectUser(state, action) {
      state.selectedUser = action.payload;
    },
    removeUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, selectUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
