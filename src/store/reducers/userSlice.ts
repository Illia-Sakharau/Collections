import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  name: string | null;
  isAdmin: boolean;
}

const initialState: IUserState = {
  name: localStorage.getItem('username') || null,
  isAdmin: !!localStorage.getItem('isAdmin'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserState>) {
      state.name = action.payload.name;
      state.isAdmin = action.payload.isAdmin;
    },
    removeUser(state) {
      state.name = null;
      state.isAdmin = false;
    },
  },
});

export const userReducer = userSlice.reducer;
