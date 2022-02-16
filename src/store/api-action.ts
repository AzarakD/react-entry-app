import { APIRoute } from '../const';
import {
  UserDataType,
  ServerResponse,
  ThunkActionResult
} from '../types';
import {
  authorization,
  registration
} from './action';

export const registerAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ServerResponse>(APIRoute.Registration, loginData);

    dispatch(registration(data.user.id));
    console.log(data);
    // saveToken(data.token);
    alert('Registration success!');
  };

export const loginAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ServerResponse>(APIRoute.Login, loginData);

    dispatch(authorization(data.user.id));
    console.log(data);
    // saveToken(data.token);
    alert('Login success!');
  };

export const changePassAction = (password: string): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const userId = getState().userId;
    const {data} = await api.put(`${APIRoute.Users}/${userId}`, { password: password });
    console.log(data);
    // saveToken(data.token);
    alert('Password change success!');
  };
