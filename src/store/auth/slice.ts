import { ErrorBase } from '../core/models/errorBase';
import { ErrorRegistration } from '../core/models/errorRegistration';
import { createSlice } from '@reduxjs/toolkit';

import { fetchUser, loginUser, register } from './dispatchers';
import { initialLoginState, initialUserState, initialRegisterState } from './state';

export const userSlice = createSlice({
  name: 'auth',
  initialState: initialUserState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchUser.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchUser.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
      state.isLoading = false;
    }),
});

export const loginSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(loginUser.pending, state => {
      state.isLoading = true;
    })
    .addCase(loginUser.fulfilled, state => {
      state.isAuthorized = true;
      state.isLoading = false;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload as ErrorBase<ErrorRegistration>;
      state.isLoading = false;
    }),
});

export const registerSlice = createSlice({
  name: 'auth',
  initialState: initialRegisterState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(register.pending, state => {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, state => {
      state.isRegistered = true;
      state.isLoading = false;
    })
    .addCase(register.rejected, (state, action) => {
      state.error = action.payload as ErrorBase<ErrorRegistration>;
      state.isLoading = false;
    }),
});
