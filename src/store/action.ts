import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../const';
import { ActionType } from '../types';

export const authorization = createAction(
  ActionType.Authorization,
  (authStatus: AuthStatus) => ({payload: authStatus}),
);

export const registration = createAction(
  ActionType.Registration,
  (authStatus: AuthStatus) => ({payload: authStatus}),
);
