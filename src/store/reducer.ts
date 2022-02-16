import { createReducer } from '@reduxjs/toolkit';
import {
  authorization,
  registration
} from './action';
import { AuthStatus } from '../const';
import { State } from '../types';

export const initialState: State = {
  authStatus: AuthStatus.Unknown,
  userId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(authorization, (state, action) => {
      state.authStatus = AuthStatus.Auth;
      state.userId = action.payload;
    })
    .addCase(registration, (state, action) => {
      state.authStatus = AuthStatus.Auth;
      state.userId = action.payload;
    });
});
