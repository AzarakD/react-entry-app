import {
  authorization,
  registration
} from './action';
import { APIRoute } from '../const';
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
      alert('Registration success!');
    } catch {
      alert('Error :( Try again later.');
    }
  };

export const loginAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<ServerResponse>(APIRoute.Login, loginData);

      dispatch(authorization(data.user.id));
      alert('Login success!');
    } catch {
      alert('Wrong email or password.');
    }
  };

export const changePassAction = (password: string): ThunkActionResult =>
  async (_dispatch, getState, api): Promise<void> => {
    try {
      const userId = getState().userId;
      await api.patch(`${APIRoute.Users}/${userId}`, { password: password });

      alert('Password change success!');
    } catch {
      alert('Error :( Try again later.');
    }
  };
