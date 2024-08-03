import { createSlice } from '@reduxjs/toolkit';
import { authState } from './authState';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: authState.cheking,
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      state.status = authState.authenticated;
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, action) => {
      state.status = authState.notAuthenticated;
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = action.payload?.errorMessage || '';
    },
    checkingCredentials: (state) => {
      state.status = authState.cheking;
    },
    uiStartLoading: (state) => {
      state.status = authState.cheking;
    },
    uiFinishLoading: (state) => {
      state.status = authState.cheking;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
// export default authSlice.reducer;
