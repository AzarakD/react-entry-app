import { AuthStatus } from './const';

export type MenuItemType = {
  name: string,
  url: string,
};

export type State = {
  authStatus: AuthStatus,
};

export enum ActionType {
  Authorization = 'user/authorization',
  Registration = 'user/registration',
};
