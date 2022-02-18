export enum AppRoute {
  Login = '/login',
  Registration = '/registration',
  ChangePassword = '/change-password',
};

export enum APIRoute {
  Login = '/login',
  Registration = '/register',
  Users = '/users',
};

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
};

export enum ToastType {
  Default = '',
  Error = 'error',
  Info = 'info',
  Success = 'success',
};
