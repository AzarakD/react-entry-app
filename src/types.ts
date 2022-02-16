import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AuthStatus } from './const';

export type MenuItemType = {
  name: string,
  url: string,
};

export type State = {
  authStatus: AuthStatus,
  userId: null | number,
};

export enum ActionType {
  Authorization = 'user/authorization',
  Registration = 'user/registration',
  RedirectToRoute = 'app/redirect',
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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
