import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types';

export const authorization = createAction(
  ActionType.Authorization,
  (userId: number) => ({payload: userId}),
);

export const registration = createAction(
  ActionType.Registration,
  (userId: number) => ({payload: userId}),
);
