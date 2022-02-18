import { createAction } from '@reduxjs/toolkit';
import { ToastType } from '../const';
import { ActionType } from '../types';

export const authorization = createAction(
  ActionType.Authorization,
  (userId: number) => ({payload: userId}),
);

export const registration = createAction(
  ActionType.Registration,
  (userId: number) => ({payload: userId}),
);

export const showToast = createAction(
  ActionType.ShowToast,
  (type: ToastType, message: string) => ({payload: {
    type,
    message,
  }}),
);

export const clearToast = createAction(
  ActionType.ClearToast,
);
