import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { RootState } from './store/root-reducer';
import {
  AuthStatus,
  ToastType
} from './const';

export type MenuItemType = {
  name: string,
  url: string,
};

export enum ActionType {
  Authorization = 'user/authorization',
  Registration = 'user/registration',
  ShowToast = 'app/showToast',
  ClearToast = 'app/clearToast',
};

export type UserDataType = {
  email: string,
  password: string,
};

export type RegUserInput = UserDataType & {
  repeatPassword: string,
};

export type ChangePassUserInput = {
  currentPassword: string,
  newPassword: string,
  repeatPassword: string,
};

export type ServerResponse = {
  accessToken: string,
  user: {
    email: string,
    id: number,
  },
};

export type UserState = {
  authStatus: AuthStatus,
  userId: null | number,
};

export type UiState = {
  toastOpen: boolean,
  toastType: ToastType,
  toastMessage: null | string,
};

export type State = RootState;
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
