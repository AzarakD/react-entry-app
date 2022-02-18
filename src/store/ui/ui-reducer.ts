import { createReducer } from '@reduxjs/toolkit';
import {
  clearToast,
  showToast
} from '../action';
import { UiState } from '../../types';
import { ToastType } from '../../const';

const initialState: UiState = {
  toastOpen: false,
  toastType: ToastType.Default,
  toastMessage: null,
};

export const uiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showToast, (state, action) => {
      state.toastOpen = true;
      state.toastType = action.payload.type;
      state.toastMessage = action.payload.message;
    })
    .addCase(clearToast, (state, action) => {
      state.toastOpen = false;
    });
});
