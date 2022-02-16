import { APIRoute } from '../const';
import {
  UserDataType,
  ServerResponse,
  ThunkActionResult
} from '../types';

export const registerAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ServerResponse>(APIRoute.Registration, loginData);

    console.log(data);
    // saveToken(data.token);
  };

export const loginAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ServerResponse>(APIRoute.Login, loginData);

    console.log(data);
    // saveToken(data.token);
  };
