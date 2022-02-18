import {
  authorization,
  registration,
  showToast
} from './action';
import {
  APIRoute,
  ToastType
} from '../const';
import {
  UserDataType,
  ServerResponse,
  ThunkActionResult
} from '../types';

export const registerAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<ServerResponse>(APIRoute.Registration, loginData);

      dispatch(registration(data.user.id));
      dispatch(showToast(ToastType.Success, 'Registration success!'));
    } catch {
      dispatch(showToast(ToastType.Error, 'Error :( Try again later.'));
    }
  };

export const loginAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<ServerResponse>(APIRoute.Login, loginData);

      dispatch(authorization(data.user.id));
      dispatch(showToast(ToastType.Success, 'Login success!'));
    } catch {
      dispatch(showToast(ToastType.Error, 'Wrong email or password.'));
    }
  };

export const changePassAction = (password: string): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    try {
      const userId = getState().user.userId;
      await api.patch(`${APIRoute.Users}/${userId}`, { password: password });

      dispatch(showToast(ToastType.Success, 'Password change success!'));
    } catch {
      dispatch(showToast(ToastType.Error, 'Error :( Try again later.'));
    }
  };
