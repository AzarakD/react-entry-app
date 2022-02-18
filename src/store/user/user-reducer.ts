import { createReducer } from '@reduxjs/toolkit';
import {
  authorization,
  registration
} from '../action';
import { AuthStatus } from '../../const';
import { UserState } from '../../types';

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  userId: null,
};

export const userReducer = createReducer(initialState, (builder) => {
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
